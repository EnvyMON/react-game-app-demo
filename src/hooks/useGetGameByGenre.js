import { useQuery } from "@tanstack/react-query"
import {  } from "../api/gameApi"
import { getGameByGenre } from "../api/genreApi"

export const useGetGameByGenre = (genreId, enabled = true) => {
    return useQuery({
        queryKey: ['useGetGameByGenre', genreId],
        queryFn: ()=>( getGameByGenre(genreId) ),
        enabled,
    })
}
