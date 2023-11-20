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
    country: string,
    "type" : string
}
export interface IFilter{
    genre: string
    year: string
    search:string
    sort: string
    rating: string
    country: string
    type: string
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
    avatar: string
}

export interface IUser extends IShippingFields{
    id: number
}
export interface IFilterState {
    state: string,
    year: string,
    genreState: string,
    country: string,
    rating: string
}

export interface IEditUser{
    email: string
    login: string
    phone: string
}