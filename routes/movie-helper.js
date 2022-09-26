import { client } from "../index.js";
import { ObjectId } from "mongodb";
export async function addMovie(newmovies) {
  return await client.db("b33we").collection("movies").insertMany(newmovies);
}

export async function deleteMovies(id) {
  return await client
    .db("b33we")
    .collection("movies")
    .deleteOne({ _id: ObjectId(id) });
}

export async function updateMovies(id, update) {
  return await client
    .db("b33we")
    .collection("movies")
    .updateOne({ _id: ObjectId(id) }, { $set: update });
}

export async function getMoviesById(id) {
  return await client
    .db("b33we")
    .collection("movies")
    .findOne({ _id: ObjectId(id) });
}

export async function getAllMovies(request) {
  return await client
    .db("b33we")
    .collection("movies")
    .find(request.query)
    .toArray();
}
