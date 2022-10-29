const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


let apiQuotes =[];

// display random Quote 
const newQuote = ()=>{
    // pick a random quote from apiQuote array 
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // console.log(quote);
    quoteAuthor.textContent = quote.author != null || quote.author ? quote.author : 'unknown';

    // styleing quote fontsize
    if(quote.text.length >= 50){
        quoteText.classList.add('long-quote');
        quoteAuthor.classList.add('long-quote');
    }else {
        quoteText.classList.remove('long-quote');
        quoteAuthor.classList.remove('long-quote');

    }
    quoteText.textContent = quote?.text;
}

// Get Quotes from API: https://type.fit/api/quotes

const getQuotes =  async() => {
        console.log('hiiiiii');
        const apiUrl = 'https://type.fit/api/quotes';
        try {
            const response = await fetch(apiUrl);
            const data = await response.json()
            apiQuotes = data;
            // console.log(apiQuotes[4])
            newQuote();
        } catch (error) {
            // catch and display error
            console.log(error);
        }
}

// tweet Quote
const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(twitterUrl, '_blank');
}
// event  listener

newQuoteBtn.addEventListener('click', newQuote);

twitterBtn.addEventListener('click',tweetQuote);


getQuotes();
// newQuote();