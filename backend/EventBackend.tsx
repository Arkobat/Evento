import { IUpcomingEvent } from "../components/UpcomingEvent";

function delay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
}


const events: IEvent[] = [
    {
        id: '1',
        name: 'Beer Pong Turnering',
        public: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ornare quam. Quisque posuere imperdiet sem at pretium. Fusce et facilisis metus, ut faucibus lectus. Suspendisse at ultricies risus. Ut id tristique risus, ut viverra arcu. Ut eu suscipit nunc, eget elementum tortor. Nunc ut lacus vitae libero tempus tempor vel sit amet magna. Ut ac erat fringilla, auctor mi eget, dictum quam. Praesent vestibulum lorem facilisis commodo facilisis. Donec a justo eget sapien tempus tincidunt sit amet ut quam. Maecenas tempor suscipit eros ac porttitor. Aliquam erat volutpat. Fusce lacinia ut mi et malesuada. Aliquam erat volutpat. Phasellus eu luctus quam, id egestas turpis.',
        image: 'https://images.interactives.dk/beerpong-woman-dk-M_gSy7-yyJsqSjEXUI8hkQ.jpg',
        location: {
            name: 'Nedenunder',
            address: 'Campusvej 55, Odense M',
        },
        date: {
            start: new Date('2021-11-01T19:00:00'),
            end: new Date('2021-11-02T03:00:00'),
        },
        created_by: '1',
    }
]

async function addEvent(event: IEvent): Promise<IEvent> {
    await delay(1)
    events.push(event)
    return event;
}

async function getEvent(eventId: string): Promise<IEvent | undefined> {
    await delay(1)
    return events.find(e => e.id === eventId);
}

async function updateEvent(event: IEvent): Promise<IEvent> {
    await delay(1)
    let index = events.findIndex(e => e.id === event.id)
    if (index === -1) throw new Error("Could not find event");
    events[index] = event
    return event;
}

async function deleteEvent(eventId: string): Promise<void> {
    let index = events.findIndex(e => e.id === eventId)
    if (index === -1) return
    events.splice(index, 1)
}

async function GetEventOverview(): Promise<IUpcomingEvent[]> {
    await delay(25);
    return [
        {
            id: "e1",
            name: "Beer Pong",
            location: "Nedenunder",
            image: "https://images.interactives.dk/beerpong-woman-dk-M_gSy7-yyJsqSjEXUI8hkQ.jpg",
            date: new Date(),
        },
        {
            id: "e2",
            name: "Banko",
            location: "Storms Pakhus",
            image: "https://picsum.photos/150/100?blur=10",
            date: new Date(),

        },
        {
            id: "e3",
            name: "Software Dysten",
            location: "SDU",
            image: "https://picsum.photos/150/100?blur=10",
            date: new Date(),
        },
        {
            id: "e4",
            name: "Have's indflytterfest",
            location: "Haves kærestes lejlighed",
            image: "https://picsum.photos/150/100?blur=10",
            date: new Date(),
        },
        {
            id: "e5",
            name: "Amilcar pension fest",
            location: "Plejehjemmet",
            image: "https://picsum.photos/150/100?blur=10",
            date: new Date(),
        },
        {
            id: "e6",
            name: "Jonathan konfirmation",
            location: "Jonathans forældre",
            image: "https://picsum.photos/150/100?blur=10",
            date: new Date(),
        }
    ]
}

export default {
    GetEventOverview,
    addEvent,
    getEvent,
    updateEvent,
    deleteEvent
}