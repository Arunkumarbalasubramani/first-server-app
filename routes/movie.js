import express from "express";
import { auth } from "../middleware/auth.js";
import {
  addMovie,
  deleteMovies,
  updateMovies,
  getMoviesById,
  getAllMovies,
} from "./movie-helper.js";
const router = express.Router();

router.get("/", auth, async (request, response) => {
  if (request.query.rating) {
    request.query.rating = +request.query.rating;
  }

  const movies = await getAllMovies(request);

  response.send(movies);
});

router.get("/:id", auth, async (request, response) => {
  const { id } = request.params;

  const movie = await getMoviesById(id);

  movie
    ? response.send(movie)
    : response.status(400).send(`Error Messsage: Movie not found`);
});

router.post("/", async (request, response) => {
  const newmovies = request.body;

  const result = await addMovie(newmovies);
  response.send(result);
});

router.put("/:id", async (request, response) => {
  const { id } = request.params;
  const update = request.body;
  const result = await updateMovies(id, update);

  response.send(result);
});

router.delete("/:id", async (request, response) => {
  const { id } = request.params;

  const result = await deleteMovies(id);

  result.deletedCount > 0
    ? response.send({ msg: " Movie Has been deleted successfully" })
    : response.status(404).send({ msg: " Movie not found" });
});

export const movieRouter = router;
