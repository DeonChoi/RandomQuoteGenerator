var quotes = [{
        quote: "Have the courage to follow your heart and intuition. They somehow know what you truly want to become.",
        source: "Steve Jobs"
    },
    {
        quote: "The cynics may be the loudest voies - but I promise you, they will accomplish the least.",
        source: "Barack Obama"
    },
    {
        quote: "The greatest glory in living lies not in never failing, but in rising every time we fall",
        source: "Nelson Mandela"
    },
    {
        quote: "I'm king of the world!",
        source: "Leonardo Dicaprio",
        citation: "Titanic",
        year: 1997
    },
    {
        quote: "I have a dream...",
        source: "Martin Luther King Jr.",
        year: 1963
    }
];


function getRandomQuote() {
    var randNumb = Math.floor(Math.random() * (quotes.length - 1));
    return quotes[randNumb];
}
//console.log(getRandomQuote());

function printQuote() {
    var randQuote = getRandomQuote();
    var newQuote = '';

    newQuote += '<p class = "quote">' + randQuote.quote + '</p>';
    newQuote += '<p class = "source">' + randQuote.source;
    if (randQuote.citation) {
        newQuote += '<span class = "citation">' + randQuote.citation + '</span>';
    }
    if (randQuote.year) {
        newQuote += '<span class = "year">' + randQuote.year + '</span>';
    }
    newQuote += '</p>';
    document.getElementById("quote-box").innerHTML = newQuote;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);