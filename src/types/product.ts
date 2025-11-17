export type Product = {
    id: string
    label: string
    image: string
    price: number
    liked: boolean
    created_at: Date
}

export type ProductDetail = {
    id: string
    label: string
    //images: string[]
    price: number
    liked: boolean
    description: string,
    created_at: Date
}