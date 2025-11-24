import express from "express";
import WatchlistController from "../controllers/WatchlistController.js";

const router = express.Router();

router.get("/user/:userId", WatchlistController.getUserWatchlist);
router.post("/", WatchlistController.addToWatchlist);
router.delete("/:id", WatchlistController.removeFromWatchlist);
router.delete(
  "/user/:userId/movie/:movieId",
  WatchlistController.removeFromWatchlistByMovieId
);

export default router;
