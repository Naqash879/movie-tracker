import { db } from "../database.js";
import bcrypt from "bcrypt";

class User {
  static getAll() {
    return new Promise((resolve, reject) => {
      db.all(
        "SELECT id, firstName, lastName, email, created_at FROM users",
        (err, rows) => {
          if (err) reject(err);
          else resolve(rows);
        }
      );
    });
  }

  static getById(id) {
    return new Promise((resolve, reject) => {
      db.get(
        "SELECT id, firstName, lastName, email, created_at FROM users WHERE id = ?",
        [id],
        (err, row) => {
          if (err) reject(err);
          else resolve(row);
        }
      );
    });
  }

  static getByEmail(email) {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM users WHERE email = ?", [email], (err, row) => {
        if (err) reject(err);
        else resolve(row);
      });
    });
  }

  static async create(firstName, lastName, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)",
        [firstName, lastName, email, hashedPassword],
        function (err) {
          if (err) reject(err);
          else resolve(this.lastID);
        }
      );
    });
  }

  static async update(id, firstName, lastName, email) {
    return new Promise((resolve, reject) => {
      db.run(
        "UPDATE users SET firstName = ?, lastName = ?, email = ? WHERE id = ?",
        [firstName, lastName, email, id],
        function (err) {
          if (err) reject(err);
          else resolve(this.changes);
        }
      );
    });
  }

  static async updatePassword(id, newPassword) {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    return new Promise((resolve, reject) => {
      db.run(
        "UPDATE users SET password = ? WHERE id = ?",
        [hashedPassword, id],
        function (err) {
          if (err) reject(err);
          else resolve(this.changes);
        }
      );
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      db.run("DELETE FROM users WHERE id = ?", [id], function (err) {
        if (err) reject(err);
        else resolve(this.changes);
      });
    });
  }

  static async verifyPassword(hashedPassword, plainPassword) {
    return bcrypt.compare(plainPassword, hashedPassword);
  }
}

export default User;
