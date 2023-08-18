let users = []

export const listUsers = () => {
    return users
}

export const createUser = (user) => {
    console.log(user)
    user.push(user)
}