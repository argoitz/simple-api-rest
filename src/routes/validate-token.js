const jwt = require('jsonwebtoken')

// middleware to validate token (Protected routes)
const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) return res.status(401).json({ error: 'Acces denied' })
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        next() // Continue
    } catch (error) {
        res.status(400).json({error: 'token not valid'})
    }
}

module.exports = verifyToken;