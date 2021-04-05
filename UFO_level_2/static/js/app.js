var tableData = data;

var button = d3.select("#filter-btn");

var tbody = d3.select("tbody");

button.on("click", runEnter);

// button.getElementById("#filter-btn").addEventListener("change", runEnter);

var DateData = d3.select("#datetime");
var City = d3.select("#city");
var State = d3.select("#state");
var Country = d3.select("#country");
var Shape = d3.select("#shape");

var errMsg = d3.select("#error-message")


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

    d3.event.preventDefault();

    var inputValueDate = DateData.property("value");

    var inputValueCity = City.property("value").toLowerCase();

    var inputValueState = State.property("value").toLowerCase();

    var inputValueCountry = Country.property("value").toLowerCase();

    var inputValueShape = Shape.property("value").toLowerCase();


    var filteredDataDate = tableData.filter(tableData => tableData.datetime === inputValueDate);

    var filteredDataCity = tableData.filter(tableData => tableData.city === inputValueCity);

    var filteredDataState = tableData.filter(tableData => tableData.state === inputValueState);

    var filteredDataCountry = tableData.filter(tableData => tableData.country === inputValueCountry);

    var filteredDataShape = tableData.filter(tableData => tableData.shape === inputValueShape);

    tbody.html("");

    // d3.select("p").remove();

    if (filteredDataDate !== 0) {
      populateData(filteredDataDate);
    }
      else if (filteredDataDate.length === 0) {
        d3.select("tbody").selectAll("tr").remove();
        errMsg.append("p").text("These are not the droids you are looking for, move along");
        };


    if (filteredDataCity !== 0) {
      populateData(filteredDataCity);
      }
      else {
        d3.select("tbody").selectAll("tr").remove();
        errMsg.append("p").text("These are not the droids you are looking for, move along");
    };


    if (filteredDataState !== 0) {
      populateData(filteredDataState);
      }
      else {
        d3.select("tbody").selectAll("tr").remove();
        errMsg.append("p").text("These are not the droids you are looking for, move along");
    };


    if (filteredDataCountry !== 0) {
      populateData(filteredDataCountry);
      }
      else {
        d3.select("tbody").selectAll("tr").remove();
        errMsg.append("p").text("These are not the droids you are looking for, move along");
    };


    if (filteredDataShape !== 0) {
      populateData(filteredDataShape);
      }
      else {
        d3.select("tbody").selectAll("tr").remove();
        errMsg.append("p").text("These are not the droids you are looking for, move along");
    };
}












// var buttonCity = d3.select("#filter-btn-city");

// buttonCity.on("click", runEnterCity);


// function runEnterCity () { 

//     d3.event.preventDefault();

//     var inputElementCity = d3.select("#city");

//     var inputValueCity = inputElementCity.property("value");

//     var filteredDataCity = tableData.filter(tableData => tableData.city === inputValueCity);

//     tbody.html("");
    

//     // if (filteredDataCity.datetime === inputValueDate) {
//     //   filteredDataCity.forEach((sightingsCity) => {
//     //     var row = tbody.append("tr");
//     //     Object.entries(sightingsCity).forEach(([key, value]) => {
//     //       var cell = row.append("td");
//     //       cell.text(value);
          
//     //     });
//     //   });
//     // }
//     // else {

//     filteredDataCity.forEach((sightingsCity) => {
//         var row = tbody.append("tr");
//         Object.entries(sightingsCity).forEach(([key, value]) => {
//           var cell = row.append("td");
//           cell.text(value);
          
//         });
//       });
//     // }
// };

// var buttonState = d3.select("#filter-btn-state");

// buttonState.on("click", runEnterState);


// function runEnterState () {

//     d3.event.preventDefault();

//     var inputElementState = d3.select("#state");

//     var inputValueState = inputElementState.property("value");

//     var filteredDataState = tableData.filter(tableData => tableData.state === inputValueState);

//     tbody.html("");

//     filteredDataState.forEach((sightingsState) => {
//         var row = tbody.append("tr");
//         Object.entries(sightingsState).forEach(([key, value]) => {
//           var cell = row.append("td");
//           cell.text(value);
          
//         });
//       });
// };

// var buttonCountry = d3.select("#filter-btn-country");

// buttonCountry.on("click", runEnterCountry);


// function runEnterCountry () {

//     d3.event.preventDefault();

//     var inputElementCountry = d3.select("#country");

//     var inputValueCountry = inputElementCountry.property("value");

//     var filteredDataCountry = tableData.filter(tableData => tableData.country === inputValueCountry);

//     tbody.html("");

//     filteredDataCountry.forEach((sightingsCountry) => {
//         var row = tbody.append("tr");
//         Object.entries(sightingsCountry).forEach(([key, value]) => {
//           var cell = row.append("td");
//           cell.text(value);
          
//         });
//       });
// };


// var buttonCountry = d3.select("#filter-btn-shape");

// buttonCountry.on("click", runEnterShape);


// function runEnterShape () {

//     d3.event.preventDefault();

//     var inputElementShape = d3.select("#shape");

//     var inputValueShape = inputElementShape.property("value");

//     var filteredDataShape = tableData.filter(tableData => tableData.shape === inputValueShape);

//     tbody.html("");

//     filteredDataShape.forEach((sightingsShape) => {
//         var row = tbody.append("tr");
//         Object.entries(sightingsShape).forEach(([key, value]) => {
//           var cell = row.append("td");
//           cell.text(value);
          
//         });
//       });
// };

// try change instead of click button and it will allow to switch between parameters.