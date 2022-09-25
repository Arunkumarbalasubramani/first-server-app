import { client } from "../index.js";

export async function findUserfromDB(username) {
  return await client.db("b33we").collection("users").findOne({
    username: username,
  });
}
export async function addNewUser(username, hasedPassword) {
  return await client.db("b33we").collection("users").insertOne({
    username: username,
    password: hasedPassword,
  });
}
