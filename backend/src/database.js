import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, "../db/movies.db");
const db = new sqlite3.Database(dbPath);

// Enable foreign keys
db.run("PRAGMA foreign_keys = ON");

const initializeDatabase = () => {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      // Movies table
      db.run(`
        CREATE TABLE IF NOT EXISTS movies (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          trailerURL TEXT,
          description TEXT,
          rating REAL CHECK(rating >= 0 AND rating <= 5),
          reviewCount INTEGER DEFAULT 0,
          posterURL TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);

      // Users table
      db.run(`
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          firstName TEXT NOT NULL,
          lastName TEXT NOT NULL,
          email TEXT UNIQUE NOT NULL,
          password TEXT NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);

      // Watchlist table
      db.run(
        `
        CREATE TABLE IF NOT EXISTS watchlists (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          userId INTEGER NOT NULL,
          movieId INTEGER NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
          FOREIGN KEY (movieId) REFERENCES movies(id) ON DELETE CASCADE,
          UNIQUE(userId, movieId)
        )
      `,
        (err) => {
          if (err) reject(err);
          else resolve();
        }
      );
    });
  });
};

export { db, initializeDatabase };
