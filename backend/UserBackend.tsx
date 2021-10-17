function delay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
}

const users: IUser[] = [
    {
        id: '1',
        name: 'Nedenunder',
        avatar: 'https://www.nedenunder.dk/wp-content/uploads/2019/06/nedenunder-Logo-300x300.png'
    },
    {
        id: '2',
        name: 'SDU fest udvalg',
        avatar: 'https://yt3.ggpht.com/ytc/AKedOLRDROzbneYWqsurPl052e4x149I_F5Hi6Gv_yoy=s900-c-k-c0x00ffffff-no-rj'
    },
    {
        id: '3',
        name: 'SIF Events',
        avatar: 'https://sif.sdu.dk/wp-content/uploads/2017/03/SIF-EVENT.png'
    },
    {
        id: '4',
        name: 'John Doe',
        avatar: 'https://www.socialketchup.in/wp-content/uploads/2020/05/fi-vill-JOHN-DOE.jpg'
    },
    {
        id: '5',
        name: 'Sømændende',
        avatar: 'https://mk0roskildekonge7o1b.kinstacdn.com/wp-content/uploads/2020/10/S%C3%B8m%C3%A6ndende.jpg'
    },
    {
        id: '6',
        name: 'Suspekt',
        avatar: 'https://resources.mynewsdesk.com/image/upload/ar_16:9,c_fill,dpr_auto,f_auto,g_auto,q_auto,w_864/ird2v46seehvrng71aeb.jpg'
    },
    {
        id: '7',
        name: 'Elton John',
        avatar: 'https://bt.bmcdn.dk/media/cache/resolve/image_1240/image/129/1294196/22817684-verst.jpg'
    },
    {
        id: '8',
        name: 'Hopsin',
        avatar: 'https://static.gaffa.dk/images/2014/08/14/f82e2/163877-860x484.jpeg'
    },
    {
        id: '9',
        name: 'MØ',
        avatar: 'https://migogaalborg.dk/wp-content/uploads/2019/02/M%C3%98-800x480.png'
    },
    {
        id: '10',
        name: 'Emilie Peterson',
        avatar: 'https://randomuser.me/api/portraits/women/31.jpg'
    },
]

async function addUser(user: IUser): Promise<IUser> {
    await delay(1)
    users.push(user)
    return user;
}

async function getUser(userId: string): Promise<IUser | undefined> {
    await delay(1)
    return users.find(e => e.id == userId)
}

async function updateUser(user: IUser): Promise<IUser> {
    await delay(1)
    let index = users.findIndex(e => e.id === user.id)
    if (index === -1) throw new Error("Could not find user");
    users[index] = user
    return user;
}

async function deleteUser(userId: string): Promise<void> {
    let index = users.findIndex(e => e.id === userId)
    if (index === -1) return
    users.splice(index, 1)
}

export default {
    addUser,
    getUser,
    updateUser,
    deleteUser
}