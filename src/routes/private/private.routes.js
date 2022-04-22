const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        error: null,
        data: {
            title: 'Protected Route',
            user: req.user
        }
    })
})

module.exports = router