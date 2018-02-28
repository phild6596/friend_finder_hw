var friendAnswers = require('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res){
        res.json(friendAnswers);
    });
    app.post('/api/friends', function (req, res) {
        let userMatch = {
            name: '',
            photo: '',
            matchDifference: 1000
        }
        let userData = req.body;
        let userName = userData.name;
        let userPhoto = userData.photo;
        let userScore = userData.scores
        let friendDifference = 0;
    });
}