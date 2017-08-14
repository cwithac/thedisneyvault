// console.log('app.js is connected to thedisneyvault.');
//
// if (typeof jQuery == 'undefined'){
//   console.log('jQuery is NOT connected to thedisneyvault');
// } else {console.log('jQuery is connected to thedisneyvault')};

//-------------------------------------

$(function() {

var $searchButton = $('#search-button');
$searchButton.on('click', findFilms);

var $deleteButton = $('#delete-button');
$deleteButton.on('mouseenter', areYouSure);
$deleteButton.on('mouseleave', changedMind);

});

//-------------------------------------

//---------------------------------------
//USES OMDBABI FOR ADD FILMS AND CONTENT:
//---------------------------------------
//SEARCH BUTTON FINDS THROUGH ALL OMDB API

// var apiKey = config.API_KEY;
var apiKey = process.env.API_KEY;

var findFilms = function() {
  console.log('Search Button Has Been Clicked');
  var $searchBox = $('#search-box');
  var $searchedValue = $searchBox.val();
  console.log("Searched Input:" + $searchedValue);
  var $searchResults = $('#search-results');

  $.ajax('https://www.omdbapi.com/?s=' + $searchedValue + '&r=json&apikey=' + apiKey) //RETURNS DATA BASED ON SEARCH PARAM

  .done(function(filmsList) {
    console.log("JSON:");
    console.log(filmsList);
    console.log(filmsList.Search);
    $searchResults.empty()

//CREATES AND DISPLAYS RESULTS BOX AND INDIVIDUAL RESULTS
    for (var i = 0; i < filmsList.Search.length; i++) { //LOOPS THROUGH DATA TO DISPLAY ...
      if ((filmsList.Search[i].Poster !== "N/A") && (filmsList.Search[i].Type === "movie")) { //ONLY MOVIES WITH POSTERS
      var $poster = $('<img>').attr('src', filmsList.Search[i].Poster)
      $poster.attr('class', 'poster');
      var $addButton = $('<button id=' + filmsList.Search[i].imdbID + ' type="submit">Select Film</button>');
      $addButton.attr('class', 'addBtn')
      $addButton.on('click', addButtonClicked)
      var $resultsBox = $('<div>').attr('class', 'result');
      $resultsBox.append($poster);
      $resultsBox.append('<br/>')
      $resultsBox.append($addButton);
      $searchResults.append($resultsBox)
    } else { //REDUNDANT DEFAULT POSTER CHECK
        if (filmsList.Search[i].Poster === "N/A") { filmsList.Search[i].Poster = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"; };
      }
    }
    $searchBox.val('');
  })
};

var addButtonClicked = function() { //API ADD/POST FUNCTIONALITY ON CLICK OF 'SELECT FILM'
  console.log("imdbID: " + this.id);
   $.ajax('https://www.omdbapi.com/?i=' + this.id + '&y=&plot=short&r=json&apikey=' + apiKey)
   .done(function(selectedFilm) {
     $.ajax({
        method: 'POST',
        url: '/films',
        data: selectedFilm
      }).done(function(response) {
        window.location.href = '/films/';
      })
   })
};

//=======================================================

//---------------------------------------
//WARNING POPUP FOR DELETING FILMS
//---------------------------------------

var $h4message = $('<h4>').text('Deleting a film will remove all associated characters.  Are you sure you wish to continue?');

var areYouSure = function() {
  console.log('are you sure');
  $('footer').prepend($h4message);
};

var changedMind = function() {
  console.log('changed mind');
  $('h4').remove();
};
