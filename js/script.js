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
                      
          for (let i = 0; i < 10; i++) {
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

    $('button:button').click(() => {
        searchGif();
   });   
})


