var friends = require('../data/friends');

module.exports = function (app) {

    app.get('/data/friend', function(req,res){
        var match = req.params.friends;
  
    console.log(match);
  
    for (var i = 0; i < friends.length; i++) {
      if (match === friends[i].routeName) {
        return res.json(friends[i]);
      }
    }
    return res.json(false);
  });
}
app.post("/data/friends", function(req, res) {
    var scoreCal;
        var userData = req.body;
        var match = {
            name: "",
            photo: "",
            scores: "",
        }
        for (var i = 0; i < friends.length; i++) {
            scoreCal = 0;
            for (var i = 0; i < Friend[i].scores.length; i++) {
                var friendScores = userData.scores[i];
                var FriendScore = Friend[i].scores[i];

                scoreCal += Math.abs(parseInt(FriendScore) - parseInt(friendScores));
                //console.log(scoreCal);
            }
            if (scoreCal <= match.scores) {
                match.name = Friend.name;
                match.photo = Friend.photo;
                match.scores = scoreCal;
            }
        }
        friends.push(userData);
        res.json(match);
    });
