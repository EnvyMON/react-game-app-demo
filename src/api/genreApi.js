import api from "./api"


export const getGenreList = async() => {
    try{
        const res = await api.get('/genres')
        return res.data
    } catch(e) {
        throw new Error('fail to getGenreList : ', e.message)
    }
}

export const getGameByGenre = async(genreId) => {
    try{
        const res = await api.get(`/games?genres=${genreId}`)
        return res.data
    } catch(e) {
        throw new Error('fail to getGameByGenre : ', e.message)
    }
}