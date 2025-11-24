# Movie Tracker Backend

A REST API backend for a movie tracking application built with Express.js, SQLite, and following the Model-Controller-Service architecture pattern.

## Features

- **Express.js** - Fast and minimalist web framework
- **SQLite** - Lightweight relational database
- **CORS** - Cross-Origin Resource Sharing enabled
- **bcrypt** - Password hashing for secure authentication
- **JSON Body Parser** - Built-in JSON request parsing
- **MCS Architecture** - Clean separation of concerns

## Project Structure

```
backend/
├── src/
│   ├── controllers/     # Route handlers
│   │   ├── MovieController.js
│   │   ├── UserController.js
│   │   └── WatchlistController.js
│   ├── models/          # Database models
│   │   ├── Movie.js
│   │   ├── User.js
│   │   └── Watchlist.js
│   ├── services/        # Business logic
│   │   ├── MovieService.js
│   │   ├── UserService.js
│   │   └── WatchlistService.js
│   ├── routes/          # API routes
│   │   ├── movieRoutes.js
│   │   ├── userRoutes.js
│   │   └── watchlistRoutes.js
│   ├── database.js      # SQLite database configuration
│   └── index.js         # Server entry point
├── db/                  # Database files
├── package.json
└── README.md
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

The server will run on `http://localhost:5000`

## Database Schema

### Movies Table
- `id` - Primary Key (Auto-increment)
- `name` - Movie name (Required)
- `trailerURL` - Trailer URL
- `description` - Movie description
- `rating` - Rating out of 5 (0-5)
- `reviewCount` - Number of reviews
- `posterURL` - Poster image URL
- `created_at` - Timestamp

### Users Table
- `id` - Primary Key (Auto-increment)
- `firstName` - First name (Required)
- `lastName` - Last name (Required)
- `email` - Email address (Unique, Required)
- `password` - Hashed password (Required)
- `created_at` - Timestamp

### Watchlists Table
- `id` - Primary Key (Auto-increment)
- `userId` - Foreign Key to Users
- `movieId` - Foreign Key to Movies
- `created_at` - Timestamp
- `UNIQUE(userId, movieId)` - Prevents duplicate entries

## API Endpoints

### Movies

- **GET** `/api/movies` - Get all movies
- **GET** `/api/movies/:id` - Get movie by ID
- **POST** `/api/movies` - Create a new movie
  - Body: `{ name, trailerURL, description, rating, posterURL }`
- **PUT** `/api/movies/:id` - Update a movie
  - Body: `{ name?, trailerURL?, description?, rating?, posterURL? }`
- **DELETE** `/api/movies/:id` - Delete a movie

### Users

- **GET** `/api/users` - Get all users
- **GET** `/api/users/:id` - Get user by ID
- **POST** `/api/users` - Create a new user (Register)
  - Body: `{ firstName, lastName, email, password }`
- **PUT** `/api/users/:id` - Update user information
  - Body: `{ firstName?, lastName?, email? }`
- **PATCH** `/api/users/:id/password` - Update password
  - Body: `{ newPassword }`
- **DELETE** `/api/users/:id` - Delete a user
- **POST** `/api/users/login` - Login user
  - Body: `{ email, password }`

### Watchlist

- **GET** `/api/watchlist/user/:userId` - Get user's watchlist
- **POST** `/api/watchlist` - Add movie to watchlist
  - Body: `{ userId, movieId }`
- **DELETE** `/api/watchlist/:id` - Remove movie from watchlist by watchlist item ID
- **DELETE** `/api/watchlist/user/:userId/movie/:movieId` - Remove movie from watchlist by user and movie IDs

## Response Format

All API responses follow a consistent format:

### Success Response
```json
{
  "success": true,
  "data": { /* response data */ },
  "message": "Operation successful"
}
```

### Error Response
```json
{
  "success": false,
  "error": "Error description",
  "message": "Human readable message"
}
```

## Health Check

- **GET** `/api/health` - Check if server is running

## Error Handling

The API includes comprehensive error handling for:
- Validation errors
- Database errors
- Duplicate email registration
- Missing resources
- Authentication failures

## Technologies Used

- **Express.js** 4.18.2
- **SQLite3** 5.1.6
- **bcrypt** 5.1.0
- **CORS** 2.8.5
- **Node.js** ES Modules

## Development

For development with hot reload:
```bash
npm run dev
```

This uses `nodemon` to automatically restart the server when files change.

## Notes

- Passwords are hashed using bcrypt with a salt round of 10
- Foreign key constraints are enabled in SQLite
- CORS is configured to accept requests from all origins (adjust as needed)
- The database file is stored at `db/movies.db`
