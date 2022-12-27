import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true,
		select: false
	},
	email: {
		type: String,
		required: true,
		select: false,
		unique: true
	},
	role: {
		type: String
	}
});

const UserModel = mongoose.model("UserModel", UserSchema);

export default UserModel;