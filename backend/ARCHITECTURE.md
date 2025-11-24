# Movie Tracker Backend - Architecture Documentation

## Overview

This backend follows the **Model-Controller-Service (MCS)** architecture pattern, which provides clean separation of concerns and makes the codebase maintainable and scalable.

## Architecture Layers

### 1. Model Layer (`src/models/`)

**Responsibility:** Direct database interactions

The models represent the data structure and handle all database operations (CRUD). Each model corresponds to a database table.

**Key Files:**
- `Movie.js` - Handles all movie database operations
- `User.js` - Handles all user database operations and password hashing
- `Watchlist.js` - Handles watchlist database operations

**Pattern:**
```javascript
// Models use promises and return raw data
static getById(id) {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM movies WHERE id = ?', [id], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}
```

### 2. Service Layer (`src/services/`)

**Responsibility:** Business logic and validation

Services contain the application's business logic, data validation, and error handling. They use models to interact with the database and return structured responses.

**Key Files:**
- `MovieService.js` - Business logic for movies
- `UserService.js` - Business logic for users (login, password hashing)
- `WatchlistService.js` - Business logic for watchlist operations

**Pattern:**
```javascript
// Services use models and return structured responses
static async getMovieById(id) {
  try {
    const movie = await Movie.getById(id);
    if (!movie) {
      return { success: false, error: '...', message: '...' };
    }
    return { success: true, data: movie, message: '...' };
  } catch (error) {
    return { success: false, error: error.message, message: '...' };
  }
}
```

### 3. Controller Layer (`src/controllers/`)

**Responsibility:** HTTP request/response handling

Controllers handle incoming HTTP requests, call appropriate services, and return responses with proper HTTP status codes.

**Key Files:**
- `MovieController.js` - Handles movie API endpoints
- `UserController.js` - Handles user API endpoints
- `WatchlistController.js` - Handles watchlist API endpoints

**Pattern:**
```javascript
// Controllers call services and handle HTTP responses
static async getMovieById(req, res) {
  const { id } = req.params;
  const result = await MovieService.getMovieById(id);
  const statusCode = result.success ? 200 : 404;
  res.status(statusCode).json(result);
}
```

### 4. Routes Layer (`src/routes/`)

**Responsibility:** API endpoint definitions

Routes map HTTP methods and paths to specific controller methods.

**Key Files:**
- `movieRoutes.js` - Movie API routes
- `userRoutes.js` - User API routes
- `watchlistRoutes.js` - Watchlist API routes

**Pattern:**
```javascript
router.get('/:id', MovieController.getMovieById);
router.post('/', MovieController.createMovie);
router.put('/:id', MovieController.updateMovie);
router.delete('/:id', MovieController.deleteMovie);
```

## Data Flow

### Request Flow Example: Create a Movie

```
HTTP Request (POST /api/movies)
    ↓
Routes (movieRoutes.js)
    ↓
Controller (MovieController.createMovie)
    ↓
Service (MovieService.createMovie)
    ├─ Validation
    ├─ Business Logic
    └─ Error Handling
    ↓
Model (Movie.create)
    ↓
Database (SQLite)
    ↓
Service (returns structured response)
    ↓
Controller (sets HTTP status and returns JSON)
    ↓
HTTP Response
```

## Key Design Patterns

### 1. Separation of Concerns
- **Models:** Database only
- **Services:** Business logic only
- **Controllers:** HTTP handling only

### 2. Consistent Response Format
All API responses follow a standard structure:
```javascript
{
  success: boolean,
  data: any,
  error?: string,
  message: string
}
```

### 3. Promise-Based Async Operations
- Models use Promises for database operations
- Services use async/await for cleaner code
- Controllers are async to handle service calls

### 4. Error Handling
- Models throw errors, services catch them
- Services validate input and handle business logic errors
- Controllers set appropriate HTTP status codes

## Database Schema

### Relationships
```
Users (1) ──→ (*) Watchlists
             ↓
            Movies
```

## Security Considerations

1. **Password Hashing:** Passwords are hashed using bcrypt with salt rounds of 10
2. **Foreign Keys:** Enabled in SQLite to maintain referential integrity
3. **Unique Constraints:** Email is unique, watchlist entries are unique per user-movie combination
4. **Input Validation:** All inputs are validated at the service layer

## Adding New Features

To add a new resource (e.g., Reviews):

1. **Create Model** (`src/models/Review.js`)
   - Define database operations

2. **Create Service** (`src/services/ReviewService.js`)
   - Add business logic and validation
   - Use the Review model

3. **Create Controller** (`src/controllers/ReviewController.js`)
   - Handle HTTP requests
   - Use ReviewService

4. **Create Routes** (`src/routes/reviewRoutes.js`)
   - Define API endpoints
   - Use ReviewController

5. **Update Main App** (`src/index.js`)
   - Register new routes

## Testing Recommendations

- **Unit Tests:** Test services in isolation
- **Integration Tests:** Test controllers with mocked services
- **API Tests:** Test endpoints with actual requests
- **Database Tests:** Test models with test database

## Performance Optimization

Current optimizations:
- Direct database queries (no ORMs)
- Indexed primary keys
- UNIQUE constraints prevent duplicate entries
- Proper foreign key relationships

Future optimizations:
- Add database indexes for frequently queried fields
- Implement pagination for large result sets
- Add caching layer (Redis)
- Use connection pooling
