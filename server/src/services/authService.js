import User from "../models/User.js"

const register = async(email, username, password) => {
    const userCount = await User.countDocuments({ email })

    if (userCount > 0){
        throw new Error("User already exists !")
    }

    return User.create({email, username, password})
}

