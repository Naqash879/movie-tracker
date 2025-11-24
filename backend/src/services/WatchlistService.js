import Watchlist from "../models/Watchlist.js";
import Movie from "../models/Movie.js";
import User from "../models/User.js";

class WatchlistService {
  static async getUserWatchlist(userId) {
    try {
      const user = await User.getById(userId);
      if (!user) {
        return {
          success: false,
          error: "User not found",
          message: "User with the given ID does not exist",
        };
      }

      const watchlist = await Watchlist.getByUserId(userId);
      return {
        success: true,
        data: watchlist,
        message: "Watchlist retrieved successfully",
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: "Failed to retrieve watchlist",
      };
    }
  }

  static async addToWatchlist(userId, movieId) {
    try {
      const user = await User.getById(userId);
      if (!user) {
        return {
          success: false,
          error: "User not found",
          message: "User with the given ID does not exist",
        };
      }

      const movie = await Movie.getById(movieId);
      if (!movie) {
        return {
          success: false,
          error: "Movie not found",
          message: "Movie with the given ID does not exist",
        };
      }

      const isInWatchlist = await Watchlist.isMovieInWatchlist(userId, movieId);
      if (isInWatchlist) {
        return {
          success: false,
          error: "Movie already in watchlist",
          message: "This movie is already in the user's watchlist",
        };
      }

      const watchlistId = await Watchlist.create(userId, movieId);
      return {
        success: true,
        data: { id: watchlistId },
        message: "Movie added to watchlist successfully",
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: "Failed to add movie to watchlist",
      };
    }
  }

  static async removeFromWatchlist(watchlistId) {
    try {
      const watchlist = await Watchlist.getById(watchlistId);
      if (!watchlist) {
        return {
          success: false,
          error: "Watchlist item not found",
          message: "Watchlist item with the given ID does not exist",
        };
      }

      const changes = await Watchlist.delete(watchlistId);
      return {
        success: changes > 0,
        data: { deletedRows: changes },
        message:
          changes > 0
            ? "Movie removed from watchlist successfully"
            : "Failed to remove movie",
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: "Failed to remove movie from watchlist",
      };
    }
  }

  static async removeFromWatchlistByMovieId(userId, movieId) {
    try {
      const user = await User.getById(userId);
      if (!user) {
        return {
          success: false,
          error: "User not found",
          message: "User with the given ID does not exist",
        };
      }

      const isInWatchlist = await Watchlist.isMovieInWatchlist(userId, movieId);
      if (!isInWatchlist) {
        return {
          success: false,
          error: "Movie not in watchlist",
          message: "This movie is not in the user's watchlist",
        };
      }

      const changes = await Watchlist.deleteByUserAndMovie(userId, movieId);
      return {
        success: changes > 0,
        data: { deletedRows: changes },
        message:
          changes > 0
            ? "Movie removed from watchlist successfully"
            : "Failed to remove movie",
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: "Failed to remove movie from watchlist",
      };
    }
  }
}

export default WatchlistService;
