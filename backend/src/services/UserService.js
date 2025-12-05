import User from "../models/User.js";
import jwt from 'jsonwebtoken';

class UserService {
  static async getAllUsers() {
    try {
      const users = await User.getAll();
      return {
        success: true,
        data: users,
        message: "Users retrieved successfully",
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: "Failed to retrieve users",
      };
    }
  }

  static async getUserById(id) {
    try {
      const user = await User.getById(id);
      if (!user) {
        return {
          success: false,
          error: "User not found",
          message: "User with the given ID does not exist",
        };
      }
      return {
        success: true,
        data: user,
        message: "User retrieved successfully",
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: "Failed to retrieve user",
      };
    }
  }

  static async createUser(firstName, lastName, email, password) {
    try {
      if (!firstName || !lastName || !email || !password) {
        return {
          success: false,
          error:
            "All fields (firstName, lastName, email, password) are required",
          message: "Validation failed",
        };
      }

      const existingUser = await User.getByEmail(email);
      if (existingUser) {
        return {
          success: false,
          error: "Email already exists",
          message: "User with this email already registered",
        };
      }

      const userId = await User.create(firstName, lastName, email, password);
      return {
        success: true,
        data: { id: userId },
        message: "User created successfully",
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: "Failed to create user",
      };
    }
  }

  static async updateUser(id, firstName, lastName, email) {
    try {
      const user = await User.getById(id);
      if (!user) {
        return {
          success: false,
          error: "User not found",
          message: "User with the given ID does not exist",
        };
      }

      if (email && email !== user.email) {
        const existingUser = await User.getByEmail(email);
        if (existingUser) {
          return {
            success: false,
            error: "Email already exists",
            message: "Email is already registered by another user",
          };
        }
      }

      const changes = await User.update(
        id,
        firstName || user.firstName,
        lastName || user.lastName,
        email || user.email
      );

      return {
        success: changes > 0,
        data: { changedRows: changes },
        message: changes > 0 ? "User updated successfully" : "No changes made",
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: "Failed to update user",
      };
    }
  }

  static async updatePassword(id, newPassword) {
    try {
      const user = await User.getById(id);
      if (!user) {
        return {
          success: false,
          error: "User not found",
          message: "User with the given ID does not exist",
        };
      }

      if (!newPassword) {
        return {
          success: false,
          error: "New password is required",
          message: "Validation failed",
        };
      }

      const changes = await User.updatePassword(id, newPassword);
      return {
        success: changes > 0,
        data: { changedRows: changes },
        message:
          changes > 0
            ? "Password updated successfully"
            : "Failed to update password",
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: "Failed to update password",
      };
    }
  }

  static async deleteUser(id) {
    try {
      const user = await User.getById(id);
      if (!user) {
        return {
          success: false,
          error: "User not found",
          message: "User with the given ID does not exist",
        };
      }

      const changes = await User.delete(id);
      return {
        success: changes > 0,
        data: { deletedRows: changes },
        message:
          changes > 0 ? "User deleted successfully" : "Failed to delete user",
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: "Failed to delete user",
      };
    }
  }

  static async loginUser(email, password) {
    try {
      if (!email || !password) {
        return {
          success: false,
          error: "Email and password are required",
          message: "Validation failed",
        };
      }

      const user = await User.getByEmail(email);
      if (!user) {
        return {
          success: false,
          error: "Invalid email or password",
          message: "Authentication failed",
        };
      }

      const isPasswordValid = await User.verifyPassword(
        user.password,
        password
      );
      if (!isPasswordValid) {
        return {
          success: false,
          error: "Invalid email or password",
          message: "Authentication failed",
        };
      }

        // Sign JWT token
        const JWT_SECRET = process.env.JWT_SECRET || 'secret';
        const tokenPayload = {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName
        };
        const token = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: '8h' });

        return {
          success: true,
          data: {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token
          },
          message: 'Login successful'
        };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: "Failed to login",
      };
    }
  }
}

export default UserService;
