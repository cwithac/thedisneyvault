// console.log('app.js is connected to thedisneyvault.');
//
// if (typeof jQuery == 'undefined'){
//   console.log('jQuery is NOT connected to thedisneyvault');
// } else {console.log('jQuery is connected to thedisneyvault')};

//-------------------------------------

$(function() {

var $searchButton = $('#search-button');

$searchButton.on('click', findFilms)

});

//-------------------------------------

var findFilms = function() {
  console.log('Search Button Has Been Clicked');
  var $searchBox = $('#search-box');
  var $searchedValue = $searchBox.val();
  console.log("Searched Input:" + $searchedValue);
  var $searchResults = $('#search-results');
  $.ajax('https://www.omdbapi.com/?s=' + $searchedValue + '&r=json')

  .done(function(filmsList) {
    console.log("JSON:");
    console.log(filmsList);
    console.log(filmsList.Search);
    $searchResults.empty()

    for (var i = 0; i < filmsList.Search.length; i++) {
      if ((filmsList.Search[i].Poster !== "N/A") && (filmsList.Search[i].Type === "movie")) {
      var $poster = $('<img>').attr('src', filmsList.Search[i].Poster)
      $poster.attr('class', 'poster');
      var $addButton = $('<button id=' + filmsList.Search[i].imdbID + ' type="submit">Add Film</button>');
      $addButton.on('click', addButtonClicked)
      var $resultsBox = $('<div>')
      $resultsBox.append($poster);
      $resultsBox.append($addButton);
      $searchResults.append($resultsBox)
    } else {
        if (filmsList.Search[i].Poster === "N/A") { filmsList.Search[i].Poster = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"; };
      }
    }
    $searchBox.val('');
    addButtonClicked();
  })
};

var addButtonClicked = function() {
  console.log("imdbID: " + this.id);

};
