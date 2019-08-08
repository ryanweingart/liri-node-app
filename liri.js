require("dotenv").config();

var log = console.log;
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

//Spotify keys
var spotifyKey = keys.spotify.id;
var spotifySecret = keys.spotify.secret;
 
var spotify = new Spotify({
  id: spotifyKey,
  secret: spotifySecret
});
 
var artistName = function(artist) {
    return artist.name;
}
var spotifySearch = function(songName) {

    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        
        var songs = data.tracks.items;
        for (var i = 0; i < songs.length; i++) {
            log(i);
            log("artist(s): " + songs[i].artists.map(artistName));
            log("song name: " + songs[i].name);
            log("preview song: " + songs[i].preview_url);
            log("album: " + songs[i].album.name);
            log("=========================================================");
        }
    });
}

var userActions = function(caseData, functionData) {
    switch(caseData) {
        case "spotify-this-song":
            spotifySearch(functionData);
            break;
        default:
        console.log("LIRI does not know that");
    }
}

var userInput = function(argOne, argTwo) {
    userActions(argOne, argTwo);
};

userInput(process.argv[2], process.argv[3]);