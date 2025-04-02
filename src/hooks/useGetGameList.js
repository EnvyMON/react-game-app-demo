import { useQuery } from "@tanstack/react-query"
import { getGameList } from "../api/gameApi"

export const useGetGameList = () => {
    return useQuery({
        queryKey: ['useGetGameList'],
        queryFn: getGameList
    })
}
