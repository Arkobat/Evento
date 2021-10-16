interface IEvent {
    id: string
    name: string
    public: boolean
    description: string
    image: string,
    location: ILocation
    date: {
        start: Date
        end: Date
    }
    created_by: string
}

interface ILocation {
    name: string
    address: string
    latitude?: number
    longitude?: number
}

interface IUser {
    id: string
    name: string
    avatar?: string
}