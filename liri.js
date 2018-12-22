// Following the instructions on the GitLab homework I added the require and the other variables listed. This seems to have no issues when calling functions.

require("dotenv").config();

var Spotify = require("node-spotify-api");

var keys = require("./keys.js");

function mySpotify() {
 // This is the Spotify search function that will return the values requested. 
  spotifyInfo.search({ type: 'track', query: value, limit: '1'}, function(err, data) {
    if (err) {
      console.log('Error occured: ' + err);
    } else {
      // Returns JSON info for selected track
      // console.log(JSON.stringify(data, null, 2));

      console.log("\nArtist: " + JSON.stringify(data.tracks.items[0].artists[0].name, null, 2) + "\n");
      console.log("Song Title: " + JSON.stringify(data.tracks.items[0].name) + "\n");
      console.log("Album " + JSON.stringify(data.tracks.items[0].album.name) + "\n");
      console.log("Link: " + JSON.stringify(data.tracks.itmes[0].album.external_urls));
    }
  });
};



  // At this point when trying to run the command "node liri.js spotify-this-song" it continues to throw the error saying "keys" is not defined.
  //Once all variables were defined and all connected properly the console logs out "this is loaded" so the application is atleast listening to itself


// This function below is used to call the OMDB API and when you ask a certain movie name this will return all the info relevant to that title


  var callOMDBAPI = function(movieName) {
    if (movieName === undefined) {
      movieName = "";
    }
    var urlHit =
    "http://www.omdbapi.com/?t=" +
    movieName +
    "&y=&plot=full&tomatoes=true&apikey=trilogy";
    request(urlHit, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var jsonData = JSON.parse(body);
        console.log("Title: " + jsonData.Title);
        console.log("Year: " + jsonData.Year);
        console.log("Rated: " + jsonData.Rated);
        console.log("IMDB Rating: " + jsonData.imdbRating);
        console.log("Country: " + jsonData.Country);
        console.log("Language: " + jsonData.Language);
        console.log("Plot: " + jsonData.Plot);
        console.log("Actors: " + jsonData.Actors);
        console.log("Rotton Tomatoes Rating: " + jsonData.Ratings[1].Value);
      }
    });
  };
// When the "node liri.js command is ran it still only returns the "this is loaded" message. Unsure of how to work around this error.

  
 
