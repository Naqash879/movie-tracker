import { db } from "../database.js";

class Watchlist {
  static getByUserId(userId) {
    return new Promise((resolve, reject) => {
      db.all(
        "SELECT w.id, w.userId, w.movieId, m.name, m.trailerURL, m.description, m.rating, m.reviewCount, m.posterURL FROM watchlists w JOIN movies m ON w.movieId = m.id WHERE w.userId = ?",
        [userId],
        (err, rows) => {
          if (err) reject(err);
          else resolve(rows);
        }
      );
    });
  }

  static getById(id) {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM watchlists WHERE id = ?", [id], (err, row) => {
        if (err) reject(err);
        else resolve(row);
      });
    });
  }

  static create(userId, movieId) {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO watchlists (userId, movieId) VALUES (?, ?)",
        [userId, movieId],
        function (err) {
          if (err) reject(err);
          else resolve(this.lastID);
        }
      );
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      db.run("DELETE FROM watchlists WHERE id = ?", [id], function (err) {
        if (err) reject(err);
        else resolve(this.changes);
      });
    });
  }

  static deleteByUserAndMovie(userId, movieId) {
    return new Promise((resolve, reject) => {
      db.run(
        "DELETE FROM watchlists WHERE userId = ? AND movieId = ?",
        [userId, movieId],
        function (err) {
          if (err) reject(err);
          else resolve(this.changes);
        }
      );
    });
  }

  static isMovieInWatchlist(userId, movieId) {
    return new Promise((resolve, reject) => {
      db.get(
        "SELECT id FROM watchlists WHERE userId = ? AND movieId = ?",
        [userId, movieId],
        (err, row) => {
          if (err) reject(err);
          else resolve(!!row);
        }
      );
    });
  }
}

export default Watchlist;
