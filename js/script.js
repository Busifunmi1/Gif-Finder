

const searchGif = () => {
//  get the text from the search 
    let searchQuery = $('.form input:text').val();
    console.log(searchQuery);
 let url = "https://api.giphy.com/v1/gifs/search?q=" + searchQuery + "&api_key=JDNzS1KhJDXTTbDwQDny86dazXTAUaWv";        

    $.ajax({
        url: url,
        method: 'GET',
        success: function(result) {    
            console.log(result)        
             $('.search-results').text(''); 
                      
          for (let i = 0; i < 20; i++) {
            $('.search-results').append(`<a href="${result.data[i].images.downsized_large.url}"
             class="click-gif">
            <img class="gif-box" src="${result.data[i].images.fixed_height_small.url}" 
            alt="${result.data[i].images}"
             title="${result.data[i].title}">
            </a>`
            )
            ;}   
            
        },

        error: (err) => {
            console.log(err.responseText);
            $('.search-results').text(err.responseText);
        }
    });}




$(document).ready(() => {
    var input = document.getElementById("myInput");

    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function (event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("myBtn").click();
        }
    });


    $('button:button').click(() => {
        searchGif();
   });   
})


