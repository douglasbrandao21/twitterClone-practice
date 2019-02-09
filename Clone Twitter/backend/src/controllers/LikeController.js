/*
Author: Douglas Brandão dos Santos
Brazil, 10 January 2019
GitHub: https://github.com/douglasbrandao21
LinkedIn: https://www.linkedin.com/in/douglas-brandao/
*/

const Tweet = require('../models/Tweet')

module.exports = {
    async store(req, res) {
        const tweet = await Tweet.findById(req.params.id)

        tweet.set({ likes: tweet.likes + 1 })
    
        await tweet.save()

        req.io.emit('like', tweet)

        return res.json(tweet)
    }
}