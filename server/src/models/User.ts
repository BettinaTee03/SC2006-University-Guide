import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const UserAccount = new Schema({
    username: { type: String, required: true},
    password: { type: String, required: true},
});

const UserModel = mongoose.model("User", UserAccount);
export default UserModel;
