import jwt from 'jsonwebtoken';
import createError from 'http-errors';

export const authenticate = (req, res, next) => {
  try {
    // 1. Grab token from cookies or Authorization header
    const token =
      req.cookies?.access_token ||
      (req.headers.authorization || '').split(' ')[1];

    if (!token) {
      // 401 Unauthorized when no credentials are provided
      return next(createError(401, 'Authentication token missing'));
    }

    // 2. Verify asynchronously
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        // 403 Forbidden when token is invalid or expired
        return next(createError(403, 'Invalid or expired token'));
      }

      // 3. Attach decoded payload to req.user
      req.user = decoded;
      next();
    });
  } catch (err) {
    // 500 Internal Server Error for anything else
    next(createError(500, err.message));
  }
};
