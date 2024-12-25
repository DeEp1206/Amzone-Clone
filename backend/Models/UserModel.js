import mongoose, { get } from "mongoose";
const userSchema = new mongoose.Schema(
    {
        
        UserName: { type: String, required: true, unique: true },
        PasswordHash: { type: String, required: true },
        Email: { type: String, required: true, unique: true },
        CreatedAt: { type: Date, default: Date.now},
        EmailConfirmed: {type: Boolean, default: false},
        PhoneNumber: {type: String,},
        AccessFailedCount: {type: Number, default: 0},
        TwoFactorEnabled: {type: Boolean, default:false}

    }
)

const User = mongoose.model('User',userSchema)

export default User