import { Schema, model } from 'mongoose';

const userSchema = new Schema(
        {
                fullName: { type: String, required: true },
                email: { type: String, unique: true, required: true },
                phoneNumber: { type: String, unique: true, required: true },
                password: { type: String, unique: true, required: true },
                isActive: { type: Boolean, default: false },
        },
        { timestamps: true },
);


const UserModel = model("users", userSchema)

export default UserModel