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

        for (let i = 0; i < friendAnswers.length; i++) {
            console.log(friendAnswers[i].name);
            friendDifference = 0;
            for (let j = 0; j < friendAnswers[i].scores[j]; j++) {
                friendDifference += Math.abs(parseInt(userScore[j]) - parseInt(friendAnswers[i].scores[j]));
                if (friendDifference <= userMatch.matchDifference) {
                    userMatch.name = friendAnswers[i].name;
                    userMatch.photo = friendAnswers[i].photo;
                    userMatch.matchDifference = friendDifference;
                }
            }
        }
        friendAnswers.push(userData);
        res.json(userMatch);
    });
}