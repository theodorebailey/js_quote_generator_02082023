// access HTML element with JS and save to variable
const quote = document.getElementById("quote");
// access HTML element with JS and save to a variable
const author = document.getElementById("author");
// save api link
const api_url = "https://api.quotable.io/random";

// create an asynchronous function which takes a URL as an argument to fetch data saved to an awaited response variable then create a new variable data that converts the response from json data and log data to the console
async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    // console.log(data);
    // popluate HTML element with data.content with id quote
    quote.innerHTML = data.content;
    // popluate HTML element with data.author with id author
    author.innerHTML = data.author;
}

// popluateds HTML elements with API information
getQuote(api_url);

// function tweet will populate an open twitter window with tweet text of quote populated in innerHTML and author in innerHTML with tweet window size
function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "-- " + author.innerHTML, "Tweet Window", "width-600, height=300")
    
}