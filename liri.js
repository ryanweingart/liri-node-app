require("dotenv").config();

var log = console.log;
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios"); 
// var moment = require("moment");
// var fs = require("fs");

//Spotify keys
var spotifyKey = keys.spotify.id;
var spotifySecret = keys.spotify.secret;
 
var spotify = new Spotify({
  id: spotifyKey,
  secret: spotifySecret
});
 
function artistName(artist) {
    return artist.name;
}
function spotifySearch(songName) {

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

function movieSearch(movie) {

    var queryURL = "http://www.omdbapi.com/?apikey=trilogy&t=" + movie;

    axios.get(queryURL).then(function(response) {
        var data = response.data;

        log("Title: " + data.Title);
        log("Release Year: " + data.Year);
        log("IMDB Rating: " + data.imdbRating);
        log("Rotten Tomatoes Rating: " + data.tomatoRating);
        log("Country of Production: " + data.Country);
        log("Language: " + data.Language);
        log("Plot: " + data.Plot);
        log("Actors/Actresses: " + data.Actors);
    })
}
function userActions(caseData, functionData) {
    switch(caseData) {
        case "spotify-this-song":
            spotifySearch(functionData);
            break;
        case "movie-this":
            movieSearch(functionData);
            break;
        default:
        console.log("LIRI does not know that");
    }
}

function userInput(argOne, argTwo) {
    userActions(argOne, argTwo);
};

userInput(process.argv[2], process.argv[3]);