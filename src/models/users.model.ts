import mongoose, {Schema, model, models} from "mongoose";

const UserSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},

		email: {
			type: String,
			required: true,
			unique: true,
		},

		password: {
			type: String,
			required: true,
		},
		profileImage: {
			type: String,
			default: "https://ui-avatars.com/api/?name=User&background=random",
		},
	},
	{
		timestamps: true,
	},
);

export const USER_DB_REF = "users";

export const User = models[USER_DB_REF] || model(USER_DB_REF, UserSchema);
