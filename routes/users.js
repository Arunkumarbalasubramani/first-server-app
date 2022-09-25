import express from "express";
import { client } from "../index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { addNewUser, findUserfromDB } from "./user-helper.js";

const router = express.Router();

async function generateHashedPassword(password) {
  const NO_OF_ROUNDS = 10;
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(salt);
  console.log(hashedPassword);
  return hashedPassword;
}

router.post("/signup", async (request, response) => {
  const { username, password } = request.body;
  const hasedPassword = await generateHashedPassword(password);
  const userfromDB = await findUserfromDB(username);
  if (userfromDB) {
    response.status(404).send({ msg: "user already exists in the database" });
  } else if (password.length < 8) {
    response.status(404).send({ msg: "Password Must be atleast 8 Characters" });
  } else {
    const result = await addNewUser(username, hasedPassword);
    response.send(result);
  }
});
router.post("/login", async (request, response) => {
  const { username, password } = request.body;

  const userfromDB = await findUserfromDB(username);

  if (!userfromDB) {
    response.status(404).send({ msg: "Invalid Credentials" });
  } else {
    const storedPassword = userfromDB.password;
    const isPasswordMatch = await bcrypt.compare(password, storedPassword);
    console.log(isPasswordMatch);
    if (isPasswordMatch) {
      const token = jwt.sign({ id: userfromDB._id }, process.env.SECRET_KEY);
      response.send({ Message: "Login Successfully", tokenNo: token });
    } else {
      response.status(404).send({
        msg: "Invalid Credentials . Check Your UserName and Password",
      });
    }
  }
});

export const usersRouter = router;
