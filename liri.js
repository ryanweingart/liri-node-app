require("dotenv").config();

var log = console.log;
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios"); 
var moment = require("moment");
var fs = require("fs");

//Spotify keys
var spotifyKey = keys.spotify.id;
var spotifySecret = keys.spotify.secret;
 
var spotify = new Spotify({
  id: spotifyKey,
  secret: spotifySecret
});
 

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

    var apiURL = "http://www.omdbapi.com/?apikey=trilogy&t=" + movie;

    axios.get(apiURL).then(function(response) {
        var movieData = response.data;

        log("Title: " + movieData.Title);
        log("Release Year: " + movieData.Year);
        log("IMDB Rating: " + movideData.imdbRating);
        log("Rotten Tomatoes Rating: " + movieData.tomatoRating);
        log("Country of Production: " + movieData.Country);
        log("Language: " + movieData.Language);
        log("Plot: " + movieData.Plot);
        log("Actors/Actresses: " + movieData.Actors);
    })
}

function concertSearch() {
    var artistName = process.argv.slice(3).join(" ");

    var bandsURL = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp";

    axios.get(bandsURL).then(function(response) {

        for (var i = 0; i < response.data.length; i++) {
            var bandData = response.data[i];  
            
            log("================================================")
            log("Artist: " + bandData.lineup);
            log("Venue: " + bandData.venue.name);
            log("Location: " + bandData.venue.city);
            log("Date: " + moment(bandData.datetime).format("MM/DD/YYYY"));
        }
    })
}

function doWhatItSays () {

    fs.readFile("random.txt", "utf8", function(error, data) {

        if (error) {
            return log(error);
        }

        var dataArr = data.split(",");

        if (dataArr.length == 2) {
            userActions(dataArr[0], dataArr[1]);
        } else if (dataArr.length == 1) {
            userActions(dataArr[0]);
        }
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
        case "concert-this":
            concertSearch(functionData);
            break;
        case "do-what-it-says":
            doWhatItSays();
            break;
        default:
        console.log("LIRI does not know that");
    }
}

function userInput(argOne, argTwo) {
    userActions(argOne, argTwo);
};

userInput(process.argv[2], process.argv[3]);