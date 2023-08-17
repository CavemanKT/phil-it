import CompsLayout from '@/components/layouts/Layout'
import CompsLoading from '@/components/modals/loader/loader'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

import { io } from "socket.io-client"

const generateUsername = () => {
    const adjs = ['happy', 'sleepy', 'grumpy', 'silly', 'funny']
    const nouns = ['apple', 'banana', 'carrot', 'donut', 'eggplant']
    const adj = adjs[Math.floor(Math.random() * adjs.length)]
    const noun = nouns[Math.floor(Math.random() * nouns.length)]
    return `${adj} ${noun}-${Math.floor(Math.random() * 100)}`
}

const socket = io(process.env.NEXT_PUBLIC_BASE_URL, { transports: ['websocket'] })
const username = generateUsername()

const pageChatRoom = () => {
    const router = useRouter()
    const { query: { room } } = router
    const inputRef = useRef(null)

    // connected flag
    const [connected, setConnected] = useState(false)

    // init chat and message
    const [chat, setChat] = useState([])
    const [msg, setMsg] = useState("")

    socket.on('connect', () => {
        console.log('connected');
    })

    // if (router.isFallback) return <CompsLoading />     
    // if (!chat || !connected) return <CompsLoading />     // need swr to fetch chat and connected

    socket.on("disconnect", (reason) => {
        console.log(`${username} disconnected from ${room}`);
        if (reason == "io server disconnect") {
            socket.connect()
        }
    })


    // ComponentDidMount -- start of useEffect
    useEffect(() => {
        socket.on('receive-message', (data) => {
            console.log(data.msg, data.username, data.room)
            setChat([...chat, data])
        })

        if (room) {
            console.log(room)
            socket.emit("join-room", { room, username }, initMsg => {
                console.log(room, username)
                if (chat.length == 0) {
                    let d = { msg: initMsg, username: "Bot", room: room }
                    setChat([...chat, d])
                }
                setConnected(true)
            })

        } else {
            console.log("room is undefined.");
        }


        if (chat.length >= 10) return () => {
            socket.disconnect()
        }

    }, [chat, room])
    // end of useEffect

    // Done. click enter, clear the input & dispatch msg
    const sendMessage = async () => {
        if (msg === "") return
        // build msg obj
        let data = {
            msg: msg, username: username, room: room
        }
        setChat([...chat, data])
        // dispatch message to other users
        const resp = socket.emit("message", data)


        // reset field if OK
        if (resp) setMsg("")

        // focus after click
        inputRef?.current?.focus()
    }

    // Done. input -> setMsg
    const onChangeHandler = (e) => {
        setMsg(e.target.value)
    }
    // . onClick -> send to server & sendMessage()
    const onKeyDownHandler = (e) => {
        if (e.key === 'Enter') {
            sendMessage()                   // dispatch msg
        }
    }

    // Done
    // chatList -> determine which is me or other users
    const meUser = (msg, user) => {
        if (user == username) {
            return (
                <div className="flex justify-end mb-4">
                    <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white" >
                        {msg}
                    </div>
                    {/* <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600" className="object-cover h-8 w-8 rounded-full" alt="" /> */}
                    <span className="object-cover h-8 w-8 rounded-full" alt="">Me</span>
                </div>
            )
        }
    }
    // Done
    // chatList -> determine which is me or other users
    const otherUser = (msg, user) => {
        if (user !== username) {
            return (
                <div className="flex justify-start mb-4">
                    {/* <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600" className="object-cover h-8 w-8 rounded-full" alt="" /> */}
                    <span className="" alt="">{user}</span>
                    <div
                        className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white" >
                        {msg}
                    </div>
                </div>
            )

        }
    }


    return (
        <CompsLayout>
            {/* <!-- This is an example component --> */}
            <div className="container mx-auto shadow-lg rounded-lg">

                {/* <!-- headaer --> */}
                <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
                    <div className="font-semibold text-2xl">{room}</div>
                    <div className="w-1/2">
                        <input type="text" name="" id="" placeholder="search IRL" className="rounded-2xl bg-gray-100 py-3 px-5 w-full" />
                    </div>
                    <div className="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
                        RA
                    </div>
                </div>
                {/* <!-- end header --> */}

                {/* <!-- Chatting --> */}
                <div className="flex flex-row justify-between bg-white">

                    {/* <!-- chat list --> */}
                    <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
                        {/* <!-- search compt --> */}
                        <div className="border-b-2 py-4 px-2">
                            <input type="text" placeholder="search chatting" className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full" />
                        </div>
                        {/* <!-- end search compt --> */}


                        {/* <!-- user list --> */}
                        {/* user icon & info */}
                        <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2">
                            <div className="w-1/4">
                                <img src="https://source.unsplash.com/_7LbC5J-jw4/600x600" className="object-cover h-12 w-12 rounded-full" alt="" />
                            </div>
                            <div className="w-full">
                                <div className="text-lg font-semibold">Luis1994</div>
                                <span className="text-gray-500">Pick me at 9:00 Am</span>
                            </div>
                        </div>

                        {/* user icon & info */}
                        <div className="flex flex-row py-4 px-2 items-center border-b-2">
                            <div className="w-1/4">
                                <img src="https://source.unsplash.com/otT2199XwI8/600x600" className="object-cover h-12 w-12 rounded-full" alt="" />
                            </div>
                            <div className="w-full">
                                <div className="text-lg font-semibold">Everest Trip 2021</div>
                                <span className="text-gray-500">Hi Sam, Welcome</span>
                            </div>
                        </div>

                        {/* user icon & info */}
                        <div className="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400">
                            <div className="w-1/4">
                                <img src="https://source.unsplash.com/L2cxSuKWbpo/600x600" className="object-cover h-12 w-12 rounded-full" alt="" />
                            </div>
                            <div className="w-full">
                                <div className="text-lg font-semibold">MERN Stack</div>
                                <span className="text-gray-500">Lusi : Thanks Everyone</span>
                            </div>
                        </div>

                        {/* user icon & info */}
                        <div className="flex flex-row py-4 px-2 items-center border-b-2">
                            <div className="w-1/4">
                                <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600" className="object-cover h-12 w-12 rounded-full" alt="" />
                            </div>
                            <div className="w-full">
                                <div className="text-lg font-semibold">Javascript Indonesia</div>
                                <span className="text-gray-500">Evan : some one can fix this</span>
                            </div>
                        </div>

                        {/* user icon & info */}
                        <div className="flex flex-row py-4 px-2 items-center border-b-2">
                            <div className="w-1/4">
                                <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600" className="object-cover h-12 w-12 rounded-full" alt="" />
                            </div>
                            <div className="w-full">
                                <div className="text-lg font-semibold">Javascript Indonesia</div>
                                <span className="text-gray-500">Evan : some one can fix this</span>
                            </div>
                        </div>

                        {/* user icon & info */}
                        <div className="flex flex-row py-4 px-2 items-center border-b-2">
                            <div className="w-1/4">
                                <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600" className="object-cover h-12 w-12 rounded-full" alt="" />
                            </div>
                            <div className="w-full">
                                <div className="text-lg font-semibold">Javascript Indonesia</div>
                                <span className="text-gray-500">Evan : some one can fix this</span>
                            </div>
                        </div>
                        {/* <!-- end user list --> */}
                    </div>
                    {/* <!-- end chat list --> */}

                    {/* [chat] list */}
                    <div className="w-full px-5 flex flex-col justify-between">
                        <div className="flex flex-col mt-5">
                            {chat.length ? (chat.map((chat, i) => (
                                <div key={"msg_" + i} tw='mt-1'>
                                    {chat.username === username ? meUser(chat.msg, chat.username) : otherUser(chat.msg, chat.username)}
                                </div>
                            ))
                            ) : (
                                <div tw="text-sm text-center text-gray-400 py-6">
                                    No chat messages
                                </div>
                            )}

                        </div>
                        <div className="py-5">
                            <input className="w-full bg-gray-300 py-5 px-3 rounded-xl" type="text" placeholder={connected ? "Type your message here." : "Connecting..."} ref={inputRef} value={msg} onChange={onChangeHandler} onKeyDownCapture={onKeyDownHandler} />
                        </div>
                    </div>
                    {/* end [chat] list */}

                    {/* Group name */}
                    <div className="w-2/5 border-l-2 px-5">
                        <div className="flex flex-col">
                            <div className="font-semibold text-xl py-4">Mern Stack Group</div>
                            <img src="https://source.unsplash.com/L2cxSuKWbpo/600x600" className="object-cover rounded-xl h-64" alt="" />
                            <div className="font-semibold py-4">Created 22 Sep 2021</div>
                            <div className="font-light">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
                                perspiciatis!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CompsLayout >
    )
}


export default pageChatRoom


// export const getStaticProps = () => {

//     const [initChat, setInitChat] = useState([])
//     const router = useRouter()
//     const { query: { room } } = router

//     return { props: { initChat } }
// }