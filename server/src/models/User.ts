import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserAccount = new Schema({
    username: { type: String, required: true},
    password: { type: String, required: true},
});

const UserModel = mongoose.model("users", UserAccount);
export default UserModel;
