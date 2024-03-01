document.addEventListener('DOMContentLoaded', () => {
    // This event listener waits for the DOM content to be fully loaded before executing its callback function.

    const amount = document.getElementById('amount');
    const currency = document.getElementById('currency');
    const convert = document.getElementById('convert'); // Getting references to HTML elements
    const result = document.getElementById('result');

    const apiKey = "w0obSgeMudW6BmnXRmQmoQ==a0PNHhe3NVHQepI4";
    const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_";
    // Setting up API key and API URL for fetching exchange rates

    convert.addEventListener('click', () => {
        // Adding a click event listener to the 'convert' button

        const amountTotal = amount.value;
        const currencyTotal = currency.value;
        // Getting the values entered by the user for amount and currency

        const url = apiUrl + currencyTotal;
        // Creating the URL for fetching the exchange rate based on the selected currency

        fetch(url, {
            headers: {
                'X-API-KEY': apiKey
            }
        })
        .then(response => response.json())
        // Fetching data from the API using the URL and API key, and converting the response to JSON format
        .then(data => {
            // Handling the JSON data received from the API

            const rate = data.exchange_rate;
            // Extracting the exchange rate from the API response

            const resultPrice = amountTotal * rate;
            // Calculating the converted amount using the exchange rate

            result.innerHTML = `${amountTotal} ${currencyTotal} = ${resultPrice.toFixed(2)} USD`;
            // Displaying the converted amount in the result element
        })
        .catch(error => {
            // Handling errors that may occur during the API request
            console.error('Request Failed:', error);
            result.innerHTML = 'An error occurred please try again later';
            // Displaying an error message if the request fails
        });
    });
});
