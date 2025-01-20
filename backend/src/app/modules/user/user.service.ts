import { IUser } from "./user.interface";
import User from "./user.model";

const registerUser = async (userData: IUser) => {
  const user = new User(userData);
  await user.save();
  return user;
};

const loginUser = async (payload: IUser) => {
  const user = await User.findOne({ email: payload.email }).select(
    "password email role"
  );
  if (!user || !(await user.comparePassword(payload.password))) {
    throw new Error("Invalid email or password");
  }

  const accessToken = await user.generateToken();
  return accessToken;
};

export const UserService = {
  registerUser,
  loginUser,
};
