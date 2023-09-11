import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserAccount = new Schema({
    username: { type: String, required: true},
    password: { type: String, required: true},
});

const UserModel = mongoose.model("user", UserAccount);
export default UserModel;
