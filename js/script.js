"use strict";

const url = 'https://round-puffy-blizzard.glitch.me/movies';

// loading message function to disappear and show movie lists after 5 seconds
function startDelay(){
    setTimeout(function() {
            $('#loading').addClass('hide');
            getMovies();
    }, 1000);
}
startDelay();

//ajax request to get a listing of all movies
function getMovies () {
    $.get(url).done(function (data) {
        //do something with the data
        let movies= "";
        $.each(data, function(data,value){
            movies += `
            <div class="movieItem card d-flex flex-row m-2 p-2" id="moveieItem${value.id}">
                <div class="flex-grow-1">
                    <div class="fs-5 fw-bolder">${value.title}</div>
                    <div>Rating: ${value.rating}/10</div>
                    <div>Genre: ${value.genre}</div>
                    <div>Director: ${value.director}</div>
                    <div>Staring:${value.staring}</div>
                    <div class="fst-italic">"${value.tagline}"</div>
                </div>
                <div class="controls d-flex flex-column ps-2 justify-content-between">
                    <button id="deleteBtn" type="button" class="deleteBtn btn btn-light" >
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                    <button type="button" class="editBtn btn btn-light" data-bs-toggle="modal" data-bs-target="#editMovieModal">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                </div>
            </div>
            `;
        });
        $("#movieContent").html(movies);
    });
}

//add movie button functionality
// $("#addMovieBtn").click(function(){
//
// });

//submit button functionality for add movies
$("#addMoviesSubmitBtn").click(function(event){
    event.preventDefault();
    console.log("working");
    const  movie = {
        title: $("#mtitle").val(),
        rating: $("#mrating").val()
    };
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
    };
    fetch(url,options)
        .then(function(response){
    });

});

//submit button functionality for editing movies
$("#editMoviesSubmitBtn").click(function(event){
    event.preventDefault();
    console.log("working");


});

//delete button functionality
$("#deleteBtn").click(function(){
    // event.preventDefault();
    console.log("working");
    // $(this).parents("#movieContent").hide();
});




// function deleteBtn() {
//     let deleteBtn = document.querySelector("#deleteBtn");
//     deleteBtn.forEach(function () {
//         $(".deleteBtn").click(function () {
//             console.log("working");
//             // deleteMovieById();
//         });
    // })
// }
// deleteBtn();

// function deleteMovieById(){
//     document.getElementById(`moveieItem${value.id}`)
//         .outerHTML = "";
// }






// function to add a movie; possibly useful later
// function addMovie(inputTitle, inputRating){
//     let movie = {};
//     let lastID = movies.length;
//     movie.id = lastID+1;
//     movie.title = inputTitle;
//     movie.rating = inputRating;
//     console.log(movie);
//     $("#movieContent").prepend($("movie"));
// }

// //edit modal functionality
// let editModal = document.querySelector("#editMovieModal");
// let editModalBtn = document.querySelector("#editMoviesSubmitBtn");









