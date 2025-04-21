import jwt from 'jsonwebtoken'
export const authenticate = async (req, _, next) => {
    try {
        const token = req.cookies.access_token
        // console.log(token);
        
        if (!token) {
            return next(403, 'Unathorized')
        }
        const decodeToken = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decodeToken
        next()
    } catch (error) {
        next(500, error.message)
    }
}