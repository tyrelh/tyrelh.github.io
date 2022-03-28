import { PostData } from "../dtos/PostData"

export const sortPostsByDate = (a: PostData, b: PostData): number => {
    return ((new Date(b.date) as any) - (new Date(a.date) as any))
}