// ambil film nya
function getMovies(keyword) {
 let xhr = new XMLHttpRequest();

 xhr.onreadystatechange = function() {
       if ( xhr.readyState === 4 && xhr.status === 200) {
             //ketika ajax siap
             let movies = JSON.parse(xhr.response);
             showMovies(movies.Search);

       }
 }

xhr.open('get', 'http://www.omdbapi.com/?apikey=1c25750c&s='+ keyword);
xhr.send();
}



// tampilkan film nya
function showMovies(movies) {

      if (!movies) {
            movieList.innerHTML = '<p class="alert alert-danger>not found</p>';
      }
      let cards = '';
      movies.forEach(function(movie) {
            cards += `<div class="col-4 my-3">
            <div class="card">
                  <img src="${movie.Poster}" class="card-img-top">
                   <div class="card-body">
                  <h5 class="card-title">${movie.Title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                  <a href="detail.php?id=${movie.imdbID}" class="btn btn-primary">Show Details</a>
            </div>
      </div>
</div>`;
      });

      movieList.innerHTML = cards;
}

let movieList = document.querySelector('.movie-list');
let inputKeyword = document.querySelector('.input-keyword');
let buttonSerach = document.querySelector('.button-search');
//ketika halaman dibuka
getMovies('avengers');


//ketika film dicari
buttonSerach.addEventListener('click', function(){
getMovies(inputKeyword.value);
});   

