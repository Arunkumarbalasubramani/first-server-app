import { client } from "../index.js";

export async function addMovie(newmovies) {
  return await client.db("b33we").collection("movies").insertMany(newmovies);
}

export async function deleteMovies(id) {
  return await client.db("b33we").collection("movies").deleteOne({ id: id });
}

export async function updateMovies(id, update) {
  return await client
    .db("b33we")
    .collection("movies")
    .updateOne({ id: id }, { $set: update });
}

export async function getMoviesById(id) {
  return await client.db("b33we").collection("movies").findOne({ id: id });
}

export async function getAllMovies(request) {
  return await client
    .db("b33we")
    .collection("movies")
    .find(request.query)
    .toArray();
}
