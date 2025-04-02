import { useQuery } from "@tanstack/react-query"
import { getGenreList } from "../api/genreApi"


export const useGetGenreList = () => {
    return useQuery({
        queryKey: ['useGetGenreList'],
        queryFn: getGenreList
    })
}
