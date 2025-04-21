import jwt from 'jsonwebtoken';

export const onlyadmin = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    // console.log(token);
    

    // No token provided
    if (!token) {
      return res.status(401).json({ 
        success: false,
        message: 'Access denied: No token provided'
      });
    }

    // Verify token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Check for admin role
    if (decodedToken.role === "admin") {
      req.user = decodedToken;
      return next();
    } else {
      return res.status(403).json({ 
        success: false,
        message: 'Access denied: Admins only'
      });
    }

  } catch (error) {
    return res.status(500).json({ 
      success: false,
      message: 'Server Error: ' + error.message 
    });
  }
  next()
};
