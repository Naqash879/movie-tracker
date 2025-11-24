import { db } from "../database.js";

class Movie {
  static getAll() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM movies", (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  }

  static getById(id) {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM movies WHERE id = ?", [id], (err, row) => {
        if (err) reject(err);
        else resolve(row);
      });
    });
  }

  static create(name, trailerURL, description, rating, posterURL) {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO movies (name, trailerURL, description, rating, posterURL) VALUES (?, ?, ?, ?, ?)",
        [name, trailerURL, description, rating, posterURL],
        function (err) {
          if (err) reject(err);
          else resolve(this.lastID);
        }
      );
    });
  }

  static update(id, name, trailerURL, description, rating, posterURL) {
    return new Promise((resolve, reject) => {
      db.run(
        "UPDATE movies SET name = ?, trailerURL = ?, description = ?, rating = ?, posterURL = ? WHERE id = ?",
        [name, trailerURL, description, rating, posterURL, id],
        function (err) {
          if (err) reject(err);
          else resolve(this.changes);
        }
      );
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      db.run("DELETE FROM movies WHERE id = ?", [id], function (err) {
        if (err) reject(err);
        else resolve(this.changes);
      });
    });
  }

  static updateReviewCount(id, increment = 1) {
    return new Promise((resolve, reject) => {
      db.run(
        "UPDATE movies SET reviewCount = reviewCount + ? WHERE id = ?",
        [increment, id],
        function (err) {
          if (err) reject(err);
          else resolve(this.changes);
        }
      );
    });
  }
}

export default Movie;
