import { AppDBContext } from "../server.js"
import User from "../Models/UserModel.js"
class UserManager {
    constructor() {
        this.db = AppDBContext
        this.db.connect()
    }

    async findByUsernameAsync(UserName) {
        return await User.find({ UserName })
    }

    async addUser(user){
        
        try{
            let t = await user.save()
            return t
        }
        catch(e){
            console.log("dsf",e)
        }
    }

}


export default UserManager