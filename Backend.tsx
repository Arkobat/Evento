import { IEventPreview } from "./components/EventPreview";

function delay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
}



async function GetEventOverview(): Promise<IEventPreview[]> {
    await delay(1000);
    return [
        {
            name: "Beer Pong",
            location: "Nedenunder",
            image: "https://images.interactives.dk/beerpong-woman-dk-M_gSy7-yyJsqSjEXUI8hkQ.jpg"
        },
        {
            name: "Banko",
            location: "Storms Pakhus",
            image: "https://picsum.photos/150/100?blur=10"

        },
        {
            name: "Software Dysten",
            location: "SDU",
            image: "https://picsum.photos/150/100?blur=10"

        },
        {
            name: "Have's indflytterfest",
            location: "Haves kærestes lejlighed",
            image: "https://picsum.photos/150/100?blur=10"

        },
        {
            name: "Amilcar pension fest",
            location: "Plejehjemmet",
            image: "https://picsum.photos/150/100?blur=10"

        },
        {
            name: "Jonathan konfirmation",
            location: "Jonathans forældre",
            image: "https://picsum.photos/150/100?blur=10"

        }
    ]
}

export default {
    GetEventOverview
}