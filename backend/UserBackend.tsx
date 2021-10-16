function delay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
}

const users: IUser[] = [
    {
        id: '1',
        name: 'Nedenunder',
        avatar: 'https://www.nedenunder.dk/wp-content/uploads/2019/06/nedenunder-Logo-300x300.png'
    }
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