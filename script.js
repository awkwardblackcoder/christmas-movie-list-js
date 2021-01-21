var movieNames = [
  "Best Man Holiday",
  "Home Alone",
  "Bad Santa",
  "The Preacher's Wife",
  "Almost Christmas",
  "Jingle Jangle: A Christmas Story",
  "This Christmas",
  "The Night Before",
  "Bad Moms Christmas",
  "Daddy's Home 2",
  "Office Christmas Party",
  "Love Actually",
  "Black Nativity",
  "Love the Coopers",
  "The Family Stone",
  "A Very Harold & Kumar Christmas",
  "While You Were Sleeping",
  "Elf",
  "Die Hard",
  "Home Alone",
];

var movieCheckList = document.querySelectorAll("label");
var numMoviesWatched = document.getElementById("watched");

for (i = 0; i < movieCheckList.length; i++) {
  movieCheckList[i].textContent = movieNames[i];
}

var numofMovies = 0;
var movieCheckboxes = document.querySelectorAll("input");
numMoviesWatched.textContent = numofMovies;

movieCheckboxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      numofMovies++;
    } else {
      numofMovies--;
    }
    numMoviesWatched.textContent = numofMovies;
  });
});
