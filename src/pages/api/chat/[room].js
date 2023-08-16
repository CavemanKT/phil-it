import io from "socket.io-client"
const socket = io(process.env.NEXT_PUBLIC_BACKEND_SOCKETIO_URL, { transports: ['websocket'] })

const generateUsername = () => {
    const adjs = ['happy', 'sleepy', 'grumpy', 'silly', 'funny']
    const nouns = ['apple', 'banana', 'carrot', 'donut', 'eggplant']
    const adj = adjs[Math.floor(Math.random() * adjs.length)]
    const noun = nouns[Math.floor(Math.random() * nouns.length)]
    return `${adj} ${noun}-${Math.floor(Math.random() * 100)}`
}

export default function roomHandler(req, res) {
    if (req.method == "GET") {
        const { room } = req.query
        if (room) {
            let username = generateUsername()
            console.log(username, room);

            socket.emit("join-room", room)
        } else {
            console.log("room is undefined");
        }

        res.status(201).json(room)
    }
}