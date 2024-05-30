export type ProductGetModel = {
    title: string
}
export type ProductViewModel = {
    id: number
    month: string
    title: string
    description: string
    date: string
    time: string
    place: string
}

export type AdminResponseModel = {
    resCode: 0 | 1
    error?: string
}