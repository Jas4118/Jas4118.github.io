# Current Weather Lookup
This is a weather lookup program made for CISC 3140 Lab 4 by Jason Li. This program is mainly to learning to use an already pre made API. 
It takes information from a website (https://openweathermap.org/) api and brings information about whatever location it has entered.
## How it works
There are 3 JavaScript files and 1 HTML file that help run this program all in one folder. The app.js file holds mainly event listeners that help produce certain results mainly for the search bar and the submit button. 
When a search value is entered and once the button is clicked, fetch.js then uses a key to fetch for a response from the api website and returns the data.
The data is then used by ui.js, where a text box is created with the data given by the fetch and parses the data into strings I modified.
The index.html code is mainly to build out what the page looks like.
## How to use it
There isn't a need to download anything and it is automatically deployed by GitHub Pages and could be reached here(https://jas4118.github.io/Weather_Info_Lookup/)
## Example
