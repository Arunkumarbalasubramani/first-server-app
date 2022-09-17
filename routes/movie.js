import express from "express";
import { client } from "../index.js";
const router = express.Router();

router.get("/", async (request, response) => {
  if (request.query.rating) {
    request.query.rating = +request.query.rating;
  }

  const movies = await client
    .db("b33we")
    .collection("movies")
    .find(request.query)
    .toArray();

  response.send(movies);
});

router.get("/:id", async (request, response) => {
  const { id } = request.params;

  const movie = await client
    .db("b33we")
    .collection("movies")
    .findOne({ id: id });

  movie
    ? response.send(movie)
    : response.status(400).send(`Error Messsage: Movie not found`);
});

router.post("/", async (request, response) => {
  const newmovies = request.body;

  const result = await client
    .db("b33we")
    .collection("movies")
    .insertMany(newmovies);
  response.send(result);
});

router.put("/:id", async (request, response) => {
  const { id } = request.params;
  const update = request.body;
  const result = await client
    .db("b33we")
    .collection("movies")
    .updateOne({ id: id }, { $set: update });

  response.send(result);
});
router.delete("/movies/:id", async (request, response) => {
  const { id } = request.params;

  const result = await client
    .db("b33we")
    .collection("movies")
    .deleteOne({ id: id });
  result.deletedCount > 0
    ? response.send({ Msg: " Movie Has been deleted successfully" })
    : response.status(404).send({ Msg: " Movie not found" });
});

export const movieRouter = router;
