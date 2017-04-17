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
  $.ajax('https://www.omdbapi.com/?t=' + $searchedValue + '&r=json')

  .done(function(filmsList) {
    console.log("JSON:");
    console.log(filmsList);
    $searchResults.empty()
      if (filmsList.Poster === "N/A") { filmsList.Poster = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"; };
    var $poster = $('<img>').attr('src', filmsList.Poster)
    $poster.attr('class', 'poster');
    var $addButton = $('<button id=' + filmsList.imdbID + ' type="submit">Add Film</button>');
    $addButton.on('click', addButtonClicked)
    var $resultsBox = $('<div>')
    $resultsBox.append($poster);
    $resultsBox.append($addButton);
    $searchResults.append($resultsBox)

    $searchBox.val('');
    addButtonClicked();
  })
};

var addButtonClicked = function() {
  console.log(this.id);
};
