import io from "socket.io-client"
const socket = io(process.env.NEXT_PUBLIC_BACKEND_SOCKETIO_URL, { transports: ['websocket'] })

import CompsLayout from '@/components/layouts/Layout'
import { useRouter } from 'next/router'

const pageTopics = () => {
    const router = useRouter()


    const hEnterChat = (e) => {
        // console.log(e.target.innerText)
        let room = e.target.innerText
        router.push('/chatRoom/' + room)
        socket.on('join-room', room)

    }


    return (
        <CompsLayout>
            <div className="container mx-auto shadow-lg rounded-lg">

                <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
                    <div className="font-semibold text-2xl" onClick={hEnterChat}>What is happiness&#63; </div>
                </div>
                <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
                    <div className="font-semibold text-2xl" onClick={hEnterChat}>How could we defeat Hitler&#63; </div>
                </div>
            </div>
        </CompsLayout>
    )
}




export default pageTopics