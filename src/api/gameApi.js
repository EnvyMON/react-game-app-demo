import api from "./api"


export const getGameList = async() => {
    try{
        const res = await api.get('/games')
        return res.data
    } catch(e) {
        throw new Error('fail to getGameList : ', e.message)
    }
}