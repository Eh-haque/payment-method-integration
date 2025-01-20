import { Shurjopay } from "shurjopay";

const shurjopay = new Shurjopay({
  username: process.env.SHURJOPAY_USERNAME || "",
  password: process.env.SHURJOPAY_PASSWORD || "",
  baseUrl: process.env.SHURJOPAY_BASE_URL || "",
});

export default shurjopay;
