var quotes = [{
        quote: "Have the courage to follow your heart and intuition. They somehow know what you truly want to become.",
        source: "Steve Jobs",
        tags: "Wisdom"
    },
    {
        quote: "The cynics may be the loudest voies - but I promise you, they will accomplish the least.",
        source: "Barack Obama",
        tags: "Wisdom"
    },
    {
        quote: "The greatest glory in living lies not in never failing, but in rising every time we fall",
        source: "Nelson Mandela",
        tags: "History"
    },
    {
        quote: "I'm king of the world!",
        source: "Leonardo Dicaprio",
        citation: "Titanic",
        year: 1997,
        tags: "Movie"
    },
    {
        quote: "I have a dream...",
        source: "Martin Luther King Jr.",
        year: 1963,
        tags: "History"
    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        source: "Mahatma Gandhi",
        tags: "History"
    },
    {
        quote: "That which does not kill us makes us stronger.",
        source: "Friedrich Nietzsche",
        tags: "Wisdom"
    },
    {
        quote: "We must not allow other people's limited perceptions to define us.",
        source: "Virginia Satir",
        tags: "Wisdom"
    },
    {
        quote: "Do what you can, with what you have, where you are.",
        source: "Theodore Roosevelt",
        tags: "Wisdom"
    },
    {
        quote: "If opportunity doesn't knock, build a door.",
        source: "Milton Berle",
        tags: "Success"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        source: "Albert Einstein",
        tags: "Success"

    },
    {
        quote: "Take out the trash",
        source: "Mom",
        citation: "My Life",
        year: "1997-Present",
        tags: "Humor"
    }
];

var colors = ["#222fe3", "#f368e0", "#ee5253", "#0abde3", "#10ac84", "#5f27cd"];

function getRandomQuote() {
    var randNumb = Math.floor((Math.random() * quotes.length));
    return quotes[randNumb];
}
//console.log(getRandomQuote());

function getRandomColor() {
    var randNumb = Math.floor((Math.random() * colors.length));
    return colors[randNumb];
}
//console.log(getRandomColor);

function printQuote() {
    document.querySelector("body, button").style.background = getRandomColor();
    document.querySelector("button").style.background = getRandomColor();

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
    newQuote += '<span class = "tags">' + randQuote.tags + '</span>';
    newQuote += '</p>';
    document.getElementById("quote-box").innerHTML = newQuote;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", setInterval(printQuote, 15000), false);