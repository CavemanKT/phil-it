import { io } from "socket.io-client"
const socket = io(process.env.NEXT_PUBLIC_BASE_URL, { transports: ['websocket'] })

export default function chatHandler(req, res) {
    if (req.method == "POST") {
        // get msg
        const data = req.body
        console.log("/page/api/chat/index.js ::line 8::", data);
        // dispatch to channel "message"
        socket.emit("message", data)

        //return message
        res.status(201).json(data)
    }

}