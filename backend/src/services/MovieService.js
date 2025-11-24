import Movie from "../models/Movie.js";

class MovieService {
  static async getAllMovies() {
    try {
      const movies = await Movie.getAll();
      return {
        success: true,
        data: movies,
        message: "Movies retrieved successfully",
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: "Failed to retrieve movies",
      };
    }
  }

  static async getMovieById(id) {
    try {
      const movie = await Movie.getById(id);
      if (!movie) {
        return {
          success: false,
          error: "Movie not found",
          message: "Movie with the given ID does not exist",
        };
      }
      return {
        success: true,
        data: movie,
        message: "Movie retrieved successfully",
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: "Failed to retrieve movie",
      };
    }
  }

  static async createMovie(name, trailerURL, description, rating, posterURL) {
    try {
      if (!name) {
        return {
          success: false,
          error: "Movie name is required",
          message: "Validation failed",
        };
      }

      if (rating && (rating < 0 || rating > 5)) {
        return {
          success: false,
          error: "Rating must be between 0 and 5",
          message: "Validation failed",
        };
      }

      const movieId = await Movie.create(
        name,
        trailerURL,
        description,
        rating,
        posterURL
      );
      return {
        success: true,
        data: { id: movieId },
        message: "Movie created successfully",
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: "Failed to create movie",
      };
    }
  }

  static async updateMovie(
    id,
    name,
    trailerURL,
    description,
    rating,
    posterURL
  ) {
    try {
      const movie = await Movie.getById(id);
      if (!movie) {
        return {
          success: false,
          error: "Movie not found",
          message: "Movie with the given ID does not exist",
        };
      }

      if (rating && (rating < 0 || rating > 5)) {
        return {
          success: false,
          error: "Rating must be between 0 and 5",
          message: "Validation failed",
        };
      }

      const changes = await Movie.update(
        id,
        name || movie.name,
        trailerURL || movie.trailerURL,
        description || movie.description,
        rating !== undefined ? rating : movie.rating,
        posterURL || movie.posterURL
      );

      return {
        success: changes > 0,
        data: { changedRows: changes },
        message: changes > 0 ? "Movie updated successfully" : "No changes made",
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: "Failed to update movie",
      };
    }
  }

  static async deleteMovie(id) {
    try {
      const movie = await Movie.getById(id);
      if (!movie) {
        return {
          success: false,
          error: "Movie not found",
          message: "Movie with the given ID does not exist",
        };
      }

      const changes = await Movie.delete(id);
      return {
        success: changes > 0,
        data: { deletedRows: changes },
        message:
          changes > 0 ? "Movie deleted successfully" : "Failed to delete movie",
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: "Failed to delete movie",
      };
    }
  }
}

export default MovieService;
