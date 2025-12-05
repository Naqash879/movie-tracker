import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

// Auth middleware that skips registration and login endpoints
export default function authMiddleware(req, res, next) {
  const { method, path } = req;

  // Allow health check
  if (path === '/api/health') return next();

  // Allow register: POST /api/users
  if (method === 'POST' && path === '/api/users') return next();

  // Allow login: POST /api/users/login
  if (method === 'POST' && path === '/api/users/login') return next();

  // All other routes require Authorization header with Bearer token
  const authHeader = req.headers['authorization'] || req.headers['Authorization'];
  if (!authHeader) {
    return res.status(401).json({ success: false, error: 'Authorization header missing', message: 'Authentication required' });
  }

  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return res.status(401).json({ success: false, error: 'Invalid authorization header format', message: 'Authentication required' });
  }

  const token = parts[1];

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    // attach user info to request for downstream handlers
    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, error: 'Invalid or expired token', message: 'Authentication required' });
  }
}
