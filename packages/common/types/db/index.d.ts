export interface DUser {
    address: string;
    mainColor: string;
    theme: "dark" | "light";
    Favorite: DFavorite[]
    createdAt: string;
    updatedAt: string;
}

export interface DFavorite {
    id: string
    address: string
    createdAt: Date
    updatedAt: Date
    userAddress: string | null
    name: string
}
