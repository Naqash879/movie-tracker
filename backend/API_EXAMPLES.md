# Example API Usage

This file contains example requests for testing the Movie Tracker API.

## Base URL
```
http://localhost:5000/api
```

## Movies Endpoints

### Get All Movies
```bash
curl -X GET http://localhost:5000/api/movies
```

### Get Movie by ID
```bash
curl -X GET http://localhost:5000/api/movies/1
```

### Create a Movie
```bash
curl -X POST http://localhost:5000/api/movies \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Inception",
    "trailerURL": "https://youtube.com/...",
    "description": "A thief who steals corporate secrets through dream-sharing technology",
    "rating": 4.8,
    "posterURL": "https://image.url/inception.jpg"
  }'
```

### Update a Movie
```bash
curl -X PUT http://localhost:5000/api/movies/1 \
  -H "Content-Type: application/json" \
  -d '{
    "rating": 4.9,
    "description": "Updated description"
  }'
```

### Delete a Movie
```bash
curl -X DELETE http://localhost:5000/api/movies/1
```

## Users Endpoints

### Get All Users
```bash
curl -X GET http://localhost:5000/api/users
```

### Get User by ID
```bash
curl -X GET http://localhost:5000/api/users/1
```

### Create a User (Register)
```bash
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "securePassword123"
  }'
```

### Login User
```bash
curl -X POST http://localhost:5000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "securePassword123"
  }'
```

### Update User
```bash
curl -X PUT http://localhost:5000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "jane@example.com"
  }'
```

### Update Password
```bash
curl -X PATCH http://localhost:5000/api/users/1/password \
  -H "Content-Type: application/json" \
  -d '{
    "newPassword": "newSecurePassword456"
  }'
```

### Delete User
```bash
curl -X DELETE http://localhost:5000/api/users/1
```

## Watchlist Endpoints

### Get User's Watchlist
```bash
curl -X GET http://localhost:5000/api/watchlist/user/1
```

### Add Movie to Watchlist
```bash
curl -X POST http://localhost:5000/api/watchlist \
  -H "Content-Type: application/json" \
  -d '{
    "userId": 1,
    "movieId": 1
  }'
```

### Remove Movie from Watchlist (by watchlist item ID)
```bash
curl -X DELETE http://localhost:5000/api/watchlist/1
```

### Remove Movie from Watchlist (by user and movie IDs)
```bash
curl -X DELETE http://localhost:5000/api/watchlist/user/1/movie/1
```

## Health Check
```bash
curl -X GET http://localhost:5000/api/health
```

## Using with Postman

1. Import these examples as a Postman collection
2. Set the base URL variable: `{{BASE_URL}}` = `http://localhost:5000/api`
3. Create environment variables as needed for user IDs and movie IDs
4. Test each endpoint with the provided request bodies
