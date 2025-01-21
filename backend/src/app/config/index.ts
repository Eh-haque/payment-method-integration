import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  default_password: process.env.DEFAULT_PASS,
  jwt: {
    access_secret: process.env.JWT_ACCESS_SECRET,
    refresh_secret: process.env.JWT_REFRESH_SECRET,
    access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
    refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  },
};

/* 
PORT=4000
DATABASE_URL=mongodb+srv://ladium-backend:mhTO8PHSlwGnFy9V@cluster0.ryljg.mongodb.net/pmi?retryWrites=true&w=majority

JWT_ACCESS_SECRET=verysecret
JWT_REFRESH_SECRET=veryverysecret
JWT_ACCESS_EXPIRES_IN=7d
JWT_REFRESH_EXPIRES_IN=365d


SP_ENDPOINT=https://sandbox.shurjopayment.com
SP_USERNAME=sp_sandbox
SP_PASSWORD=pyyk97hu&6u6
SP_PREFIX=SP
SP_RETURN_URL=http://localhost:5173/shurjopay-response

# SP_PREFIX=NOK
# SP_RETURN_URL=https://sandbox.shurjopayment.com/response
*/
