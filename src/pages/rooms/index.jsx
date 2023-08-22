import { io } from "socket.io-client"
const socket = io(process.env.NEXT_PUBLIC_BACKEND_SOCKETIO_URL, { transports: ['websocket'] })

import DATA_SET from '@/db/DATA_SET'
import CompsLayout from '@/components/layouts/Layout'
import { useRouter } from 'next/router'

export default function PageTopics() {
    const router = useRouter()


    const hEnterChat = (e) => {
        // console.log(e.target.innerText)
        let room = e.target.innerText
        router.push('/chatRoom/' + room)
    }


    return (
        <CompsLayout>
            <div className="container mx-auto shadow-lg rounded-lg">
                {
                    DATA_SET.map((item, index) => {
                        return <div key={`q_${index}`} className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
                            <div className="font-semibold text-2xl" onClick={hEnterChat}>{item.question}</div>
                        </div>
                    })
                }
            </div>
        </CompsLayout>
    )
}



