/*
Author: Douglas Brandão dos Santos
Brazil, 10 January 2019
GitHub: https://github.com/douglasbrandao21
LinkedIn: https://www.linkedin.com/in/douglas-brandao/
*/

const Tweet = require('../models/Tweet')

module.exports = {

    async index(req, res) {
        const tweets = await Tweet.find({}).sort('-createdAt')

        return res.json(tweets)
    },

    async store(req, res) {
        const tweet = await Tweet.create(req.body)

        req.io.emit('tweet', tweet)

        return res.json(tweet)
    }

}