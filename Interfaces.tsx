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

interface IEventPreview {
    id: string
    name: string
    image: string,
    location: string
    date: Date,
}

interface ILocation {
    name?: string
    address: string
    latitude?: number
    longitude?: number
}

interface IUser {
    id: string
    name: string
    avatar?: string
}