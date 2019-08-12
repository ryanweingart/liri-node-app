# LIRI Bot

Welcome to LIRI Bot! LIRI is a Language Interpretation and Recognition Interface. LIRI works through the user's command line, and takes in parameters from the user to give back data.

## What does LIRI do?

LIRI Bot has the capability to take in four different commands from the user:

* **spotify-this-song** "*song name here*"
* **movie-this** "*movie title here*"
* **concert-this** "*name of band/singer here*"
* **do-what-it-says**

The user can type in any four of these commands with the desired parameter and LIRI Bot will display the data the user is looking for.

## spotify-this-song

For the "*spotify-this-song*" command, the user is able to enter this phrase and then enter the name of the song they are searching for inside of quotations. LIRI Bot will retrieve the desired song information from the **Spotify API** package. The following information will be displayed:

* Artist(s)
* Song Name
* Preview Link
* Album

The following is an example of the user entering the song title "*We Will Rock You*" with the results displayed:

![spotify image](https://github.com/ryanweingart/liri-node-app/blob/master/images/spotify-this-song-image.png)

If no song is entered into the command line, LIRI Bot will auto-enter the song "*The Sign*" as shown below:

![spotify no entry](https://github.com/ryanweingart/liri-node-app/blob/master/images/spotify%20-%20no%20song%20entered%20image.png)

## movie-this

For the "*movie-this*" command, the user is able to enter this phrase and then enter the name of the movie they are searching for inside of quotations. LIRI Bot will retrieve the desired movie information from the **OMDB API** package. The following information will be displayed:

* Movie Title
* Debut Year
* IMDB Rating
* Rotten Tomatoes Rating
* Country of Production
* Language
* Plot
* Actors

The following is an example of the user entering the movie title "*The Terminator*" with the results displayed:

![movie image](https://github.com/ryanweingart/liri-node-app/blob/master/images/movie-this-image.png)

If no movie is entered into the command line, LIRI Bot will auto-enter the movie "*Mr. Nobody*" as shown below:

![movie no entry](https://github.com/ryanweingart/liri-node-app/blob/master/images/movie%20-%20no%20movie%20entered%20image.png)

## concert-this

For the "*concert-this*" command, the user is able to enter this phrase and then enter the name of the band or singer they are searching for inside of quotations. LIRI Bot will retrieve the upcoming concert information for the desired band or singer from the **Bands in Town Artist Events API** package. The following information will be displayed:

* Name of Venue
* Venue Location
* Date of Event

For the date of the event, LIRI Bot uses **Moment.js** package to format the date to *MM/DD/YYYY*.

The following is an example of the user entering the band "*21 Pilots*" with the results displayed:

![concert image](https://github.com/ryanweingart/liri-node-app/blob/master/images/concert-this-image.png)

If no band/singer is entered into the command line, LIRI Bot will auto-enter the singer "*Andrea Bocelli*" as shown below:

![concert no entry](https://github.com/ryanweingart/liri-node-app/blob/master/images/concert%20-%20no%20band%20entered%20image.png)

## do-what-it-says

For the "*do-what-it-says*" command, LIRI Bot will use the fs Node package with the command "*readFile*" and read the text that is located inside of **random.txt** to call the *spotify-this-song* command. The **random.txt** file will have LIRI Bot search for the song "*I Want It That Way*" and it will display the results as if it were entered by the user into the *spotify-this-song* command:

![do what it says image](https://github.com/ryanweingart/liri-node-app/blob/master/images/do-what-it-says-image.png)
