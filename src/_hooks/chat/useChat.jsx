import useSWR from 'swr'
import axios from 'axios'

import fetcher from '@/_services/fetcher'
import getFormData from '@/_services/getFormData'

export default function useChat() {


    const apiEnterChat = (room) => (new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `/api/chatRoom/${room}`
        }).then((resp) => {
            resolve(resp)
            console.log(resp)
        }).catch((err) => {
            reject(err)
            console.log(err)
        })
    }))


    return {
        apiEnterChat
    }
}