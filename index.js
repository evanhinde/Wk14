// create constants to get data from html using query selector
const search = document.querySelector(".searchInput");
const submitButton = document.querySelector("#submitButton");
const tableBody = document.querySelector("#tableBody");

// create base url and the api key
const baseURL = "http://www.omdbapi.com/";
const apiKey = "12b8ac5c";

// generate complete url and do a fetch request
function fetchDataFromJson(){
    // generate the complete url
    let searchData = search.value;
    let url = `${baseURL}?apikey=${apiKey}&s=${searchData}`;
    console.log(url);

    // create a fetch request and call other function
    fetch(url).then(response => response.json()).then(json => displayData(json));
}

// create function to display data on page
function displayData(json) {
    console.log(json);

    const movieData = json.Search;
    // loop through each object of the array
    for (let i = 0; i < movieData.length; i++) {
        console.log(movieData[i]);

        // create tr and td elements for the body tag
        let tableRow = document.createElement("tr");
        let titleData = document.createElement("td");
        let yearData = document.createElement("td");
        let imdbIdData = document.createElement("td");
        let posterData = document.createElement("td");

        tableRow.setAttribute("class", "table-danger");

        // add data in all the td tags
        titleData.textContent = movieData[i].Title;
        yearData.textContent = movieData[i].Year;
        imdbIdData.textContent = movieData[i].imdbID;

        // show image in poster td
        let image = document.createElement("img");
        image.setAttribute("src", movieData[i].Poster);
        posterData.appendChild(image);

        // appending all the data to tr tags and adding tr to body tag
        tableRow.appendChild(imdbIdData);
        tableRow.appendChild(titleData);
        tableRow.appendChild(yearData);
        tableRow.appendChild(posterData);
        tableBody.appendChild(tableRow);
    }
}

// add event listener on submit button to call fetchDataFromJson function
submitButton.addEventListener('click', fetchDataFromJson);