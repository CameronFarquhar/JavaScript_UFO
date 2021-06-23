// create variable to connect with data file
var tableData = data;

// create variables to interact with html
var button = d3.select("#filter-btn");

var tbody = d3.select("tbody");

var DateData = d3.select("#datetime");
var City = d3.select("#city");
var State = d3.select("#state");
var Country = d3.select("#country");
var Shape = d3.select("#shape");

var errMsg = d3.select("#error-message")

// create event listener
button.on("click", runEnter);

// this loop populates the table by grabbing th input values that match table data, 
// then creates a row then inserts each cell with data
function populateData(userEntry) {
  userEntry.forEach((sightings) => {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  })
}


function runEnter () {

  // define variable paths to variables outside of function
  var filteredData = tableData;

  var inputValueDate = DateData.property("value");

  var inputValueCity = City.property("value").toLowerCase();

  var inputValueState = State.property("value").toLowerCase();

  var inputValueCountry = Country.property("value").toLowerCase();

  var inputValueShape = Shape.property("value").toLowerCase();

  // create a conditional statement that filters each respective column and modifies the filteredData variable

  if (inputValueDate) {
   filteredData = filteredData.filter(tableData => tableData.datetime === inputValueDate);
  };
  if (inputValueCity) {
    filteredData = filteredData.filter(tableData => tableData.city === inputValueCity);
  };
  if (inputValueCountry) {
    filteredData = filteredData.filter(tableData => tableData.country === inputValueCountry);
  };
  if (inputValueState) {
    filteredData = filteredData.filter(tableData => tableData.state === inputValueState);
  };
  if (inputValueShape) {
    filteredData = filteredData.filter(tableData => tableData.shape === inputValueShape);
  };

  // clear out body if/when no conditions are met.
  tbody.html("");

  // use the populateData function to loop through the data file where input conditions are met.
  if (filteredData !== 0) {
    populateData(filteredData);}
      // else {
      //   // d3.select("tbody").selectAll("tr").remove();
      //   errMsg.append("p").text("These are not the droids you are looking for, move along");
      //   };

}