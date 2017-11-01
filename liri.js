// load the omdb, twitter, spotify API
var request = require("request");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");

//load the Twitter keys javescript
var config = require('./keys');
var T = new Twitter(config);
//does the function entered on the console
//var action = process.argv[2];

function myTweets() {
        params = {screen_name: 'tiffanyyyim'};
		T.get("statuses/user_timeline/", params, function(error, data, response){
			if (!error) {
				for(var i = 0; i < 10; i++) {
					//console.log(response); // Show the full response in the terminal
					var twitterResults = 
					"@" + data[i].tiffanyyyim + ": " + 
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

myTweets();