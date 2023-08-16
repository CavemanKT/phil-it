import nc from 'next-connect'


const apiEnterChat = async (req, res, next) => {
    const { room } = req.query
    res.status(200).json({ room })
}
export default nc()
    .use(apiEnterChat)