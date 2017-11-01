// load the omdb, twitter, spotify API
var request = require("request");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
//does the function entered on the console
var action = process.argv[2];
//load the Twitter keys javescript
var config = require('./keys');
var T = new Twitter(config);

//takes the second written in from node and does a search for this song title
//need to figure out how to combine a few entries into one string to search on. currently it only looks at the one word 
var song = process.argv[3];



switch (action){
    case "tweets": myTweets(); break;
    case "spotify": spotifyThisSong(); break;
    default: console.log("your entry is not a recognized action");
};

////twitterapi
function myTweets() {
        params = {screen_name: 'tiffanyyyim'};
		T.get("statuses/user_timeline/", params, function(error, data, response){
			if (!error) {
				for(var i = 0; i < 10; i++) {
					//console.log(response); // Show the full response in the terminal
					var twitterResults = 
					"@" + data[i].user.screen_name + ": " + 
					data[i].text + "\r\n" + 
					data[i].created_at + "\r\n" + 
					"------------------------------ " + i + " ------------------------------" + "\r\n";
					console.log(twitterResults);
					
				}
			}  else {
				console.log("Error :"+ error);
				return;
			}
		});
	}

//spotifyapi
function spotifyThisSong(){
    var spotify = new Spotify({
        id: 'a463fe2182004d78a3b4635f909aaf61',
        secret: '09ad8e49614f4664afc225a35ee46690'
    });
    
    spotify.search({type: 'track', query: song}, function(err, data){
        if (err){
            return console.log("spotify error occurred:" + err);
        }
        var songResult =    console.log(data.tracks.items[0].artists[0].name)
                            console.log(data.tracks.items[0].name)
                            console.log(data.tracks.items[0].preview_url)
                            console.log(data.tracks.items[0].album.name)
        })
}
























