let apiQuotes =[];

// display random Quote 
const newQuote = ()=>{
    // pick a random quote from apiQuote array 
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
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


getQuotes();
