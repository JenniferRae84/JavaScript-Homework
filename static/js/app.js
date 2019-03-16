// from data.js
var tableData = data;

// Using the UFO dataset provided in the form of an array of JavaScript objects, 
//write code that appends a table to your web page and then adds new rows of data for each UFO sighting.


// Make sure you have a column for 
//date/time, city, state, country, shape, and comment at the very least.
var tbody = d3.select("tbody");
// console.log(data)
function createTable(newTableData){
  tbody.html("")
  newTableData.map(x => {
    let newTr = tbody.append('tr');
    Object.values(x).forEach(element => {
        newTr.append('td').text(element)
    });
});
}

createTable(tableData);

// Use a date form in your HTML document and write JavaScript code that will 
//listen for events and search through the date/time column to find rows that match user input.

document.getElementById('filter-btn').addEventListener('click', handleClick);

function handleClick() {
  // Prevent the page from refreshing
  event.preventDefault();
  inputVal = d3.select("#datetime").node().value
  //filter the data
  var filterData = tableData
  filterData = filterData.filter(x => x.datetime == inputVal);
  createTable(filterData)
  //alert ("hello");  
}

// call rendered table with inputVal
// use an array filter method to get the value in the form field
// and filter the array of objects against it


//research the arrow function more
//