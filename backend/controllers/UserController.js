import config from "../utils/configManager.js";
import User from '../Models/UserModel.js';
import mongoose, { Model } from 'mongoose';
import AppDB from "../db/AppDB.js";
import UserManager from "../utils/UserManager.js";





export const getAllUsers = async (req, res) => {
    // let database 
    // // await database.connectDB(config.MONGO_DB_CONNECTION_STR)
    // let db = services.getService("AppDB")
    // db.connect()


    // const users = await User.find()
    let userManager = new UserManager()
    
    let newUser = new User(
        {
                UserName : "jeetu",
                PasswordHash : "hello",
                Email: "jeetu1@mail.com"
            }
        )

    userManager.addUser(newUser)
    let user = await userManager.findByUsernameAsync("jeet")

    await userManager.findByUsernameAsync(user)
    console.log(user)
    res.send(user)

    // gu()
}