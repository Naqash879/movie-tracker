import MovieService from "../services/MovieService.js";

class MovieController {
  static async getAllMovies(req, res) {
    const result = await MovieService.getAllMovies();
    const statusCode = result.success ? 200 : 400;
    res.status(statusCode).json(result);
  }

  static async getMovieById(req, res) {
    const { id } = req.params;
    const result = await MovieService.getMovieById(id);
    const statusCode = result.success ? 200 : 404;
    res.status(statusCode).json(result);
  }

  static async createMovie(req, res) {
    const { name, trailerURL, description, rating, posterURL } = req.body;
    const result = await MovieService.createMovie(
      name,
      trailerURL,
      description,
      rating,
      posterURL
    );
    const statusCode = result.success ? 201 : 400;
    res.status(statusCode).json(result);
  }

  static async updateMovie(req, res) {
    const { id } = req.params;
    const { name, trailerURL, description, rating, posterURL } = req.body;
    const result = await MovieService.updateMovie(
      id,
      name,
      trailerURL,
      description,
      rating,
      posterURL
    );
    const statusCode = result.success ? 200 : 400;
    res.status(statusCode).json(result);
  }

  static async deleteMovie(req, res) {
    const { id } = req.params;
    const result = await MovieService.deleteMovie(id);
    const statusCode = result.success ? 200 : 404;
    res.status(statusCode).json(result);
  }
}

export default MovieController;
