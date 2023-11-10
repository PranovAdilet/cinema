export interface IFilm{
    "id": number,
    "title": string,
    "description": string,
    "year": number,
    "time": number,
    "genre": string,
    "trailer": string,
    "poster": string,
    "rating": number,
    "countRate": number,
    "status": string,
    "viewCount": number
}
export interface IFilter{
    genre: string
    year: string
    search:string
    status:string | null,
    sort: string
    rating: string
}

export interface ILoginField{
    id: number
    email: string
    password: string
}

export interface IShippingFields{
    id: number
    email: string
    password: string
    login: string
    phone: string
}

export interface IUser extends IShippingFields{
    id: number
}