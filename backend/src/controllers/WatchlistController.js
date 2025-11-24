import WatchlistService from "../services/WatchlistService.js";

class WatchlistController {
  static async getUserWatchlist(req, res) {
    const { userId } = req.params;
    const result = await WatchlistService.getUserWatchlist(userId);
    const statusCode = result.success ? 200 : 404;
    res.status(statusCode).json(result);
  }

  static async addToWatchlist(req, res) {
    const { userId, movieId } = req.body;
    const result = await WatchlistService.addToWatchlist(userId, movieId);
    const statusCode = result.success ? 201 : 400;
    res.status(statusCode).json(result);
  }

  static async removeFromWatchlist(req, res) {
    const { id } = req.params;
    const result = await WatchlistService.removeFromWatchlist(id);
    const statusCode = result.success ? 200 : 404;
    res.status(statusCode).json(result);
  }

  static async removeFromWatchlistByMovieId(req, res) {
    const { userId, movieId } = req.params;
    const result = await WatchlistService.removeFromWatchlistByMovieId(
      userId,
      movieId
    );
    const statusCode = result.success ? 200 : 404;
    res.status(statusCode).json(result);
  }
}

export default WatchlistController;
