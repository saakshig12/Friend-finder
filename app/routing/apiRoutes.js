var friends = require('../data/friends');

module.exports = function (app) {

    app.get('./app/data/friends', function(req,res){
        var bestMatch = req.params.friend;
  
    console.log(bestMatch);
  
    for (var i = 0; i < friends.length; i++) {
      if (bestMatch === friends[i].routeName) {
        return res.json(friends[i]);
      }
    }
  
    return res.json(false);
  });
}



    