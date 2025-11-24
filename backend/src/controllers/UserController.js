import UserService from "../services/UserService.js";

class UserController {
  static async getAllUsers(req, res) {
    const result = await UserService.getAllUsers();
    const statusCode = result.success ? 200 : 400;
    res.status(statusCode).json(result);
  }

  static async getUserById(req, res) {
    const { id } = req.params;
    const result = await UserService.getUserById(id);
    const statusCode = result.success ? 200 : 404;
    res.status(statusCode).json(result);
  }

  static async createUser(req, res) {
    const { firstName, lastName, email, password } = req.body;
    const result = await UserService.createUser(
      firstName,
      lastName,
      email,
      password
    );
    const statusCode = result.success ? 201 : 400;
    res.status(statusCode).json(result);
  }

  static async updateUser(req, res) {
    const { id } = req.params;
    const { firstName, lastName, email } = req.body;
    const result = await UserService.updateUser(id, firstName, lastName, email);
    const statusCode = result.success ? 200 : 400;
    res.status(statusCode).json(result);
  }

  static async updatePassword(req, res) {
    const { id } = req.params;
    const { newPassword } = req.body;
    const result = await UserService.updatePassword(id, newPassword);
    const statusCode = result.success ? 200 : 400;
    res.status(statusCode).json(result);
  }

  static async deleteUser(req, res) {
    const { id } = req.params;
    const result = await UserService.deleteUser(id);
    const statusCode = result.success ? 200 : 404;
    res.status(statusCode).json(result);
  }

  static async loginUser(req, res) {
    const { email, password } = req.body;
    const result = await UserService.loginUser(email, password);
    const statusCode = result.success ? 200 : 401;
    res.status(statusCode).json(result);
  }
}

export default UserController;
