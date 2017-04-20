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

$deleteButton.on('click', areYouSure);

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
      var $addButton = $('<button id=' + filmsList.Search[i].imdbID + ' type="submit">Select Film</button>');
      $addButton.attr('class', 'addBtn')
      $addButton.on('click', addButtonClicked)
      var $resultsBox = $('<div>').attr('class', 'result');
      $resultsBox.append($poster);
      $resultsBox.append('<br/>')
      $resultsBox.append($addButton);
      $searchResults.append($resultsBox)
    } else {
        if (filmsList.Search[i].Poster === "N/A") { filmsList.Search[i].Poster = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"; };
      }
    }
    $searchBox.val('');
  })
};

var addButtonClicked = function() {
  console.log("imdbID: " + this.id);
   $.ajax('https://www.omdbapi.com/?i=' + this.id + '&y=&plot=short&r=json')
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

var $h4message = $('<h4>').text('Deleting a film will remove all associated characters.  Are you sure you wish to continue?');
var $yesRealDelete = $('<button>Yes</button>').attr('id', 'yesButton');
var $noToDelete = $('<button>No</button>').attr('id', 'noButton');

var areYouSure = function() {
  console.log("Delete Button Clicked");
  $('#delete-button').hide();
  $('footer').prepend($yesRealDelete);
  $('footer').prepend($noToDelete);
  $('footer').prepend($h4message);
  $yesRealDelete.on('click', yesDelete);
  $noToDelete.on('click', noDoNotDelete);
};

var yesDelete = function(){
  console.log('Yes has been clicked');
  $('#delete-button').show();
  $('h4').empty();
  $yesRealDelete.hide();
  $noToDelete.hide();
};

var noDoNotDelete = function() {
  console.log('No has been clicked');
  $('#delete-button').show();
  $('h4').empty();
  $yesRealDelete.hide();
  $noToDelete.hide();
}



// <form action="/films/<%=film._id%>?_method=DELETE" method="POST">
//   <input class="logout" type="submit" value="Delete <%=film.Title%>">
// </form>
