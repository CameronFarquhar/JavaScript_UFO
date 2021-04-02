var tableData = data;

var buttonDate = d3.select("#filter-btn-date");

var tbody = d3.select("tbody");

buttonDate.on("click", runEnterDate);


function runEnterDate () {

    d3.event.preventDefault();

    var inputElementDate = d3.select("#datetime");

    var inputValueDate = inputElementDate.property("value");

    var filteredDataDate = tableData.filter(tableData => tableData.datetime === inputValueDate);

    tbody.html("");
    
    filteredDataDate.forEach((sightings) => {
        var row = tbody.append("tr");
        Object.entries(sightings).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
};


var buttonCity = d3.select("#filter-btn-city");

buttonCity.on("click", runEnterCity);


function runEnterCity () {

    d3.event.preventDefault();

    var inputElementCity = d3.select("#city");

    var inputValueCity = inputElementCity.property("value");

    var filteredDataCity = tableData.filter(tableData => tableData.city === inputValueCity);

    tbody.html("");
    

    // if (filteredDataCity.datetime === inputValueDate) {
    //   filteredDataCity.forEach((sightingsCity) => {
    //     var row = tbody.append("tr");
    //     Object.entries(sightingsCity).forEach(([key, value]) => {
    //       var cell = row.append("td");
    //       cell.text(value);
          
    //     });
    //   });
    // }
    // else {

    filteredDataCity.forEach((sightingsCity) => {
        var row = tbody.append("tr");
        Object.entries(sightingsCity).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
          
        });
      });
    // }
};

var buttonState = d3.select("#filter-btn-state");

buttonState.on("click", runEnterState);


function runEnterState () {

    d3.event.preventDefault();

    var inputElementState = d3.select("#state");

    var inputValueState = inputElementState.property("value");

    var filteredDataState = tableData.filter(tableData => tableData.state === inputValueState);

    tbody.html("");

    filteredDataState.forEach((sightingsState) => {
        var row = tbody.append("tr");
        Object.entries(sightingsState).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
          
        });
      });
};

var buttonCountry = d3.select("#filter-btn-country");

buttonCountry.on("click", runEnterCountry);


function runEnterCountry () {

    d3.event.preventDefault();

    var inputElementCountry = d3.select("#country");

    var inputValueCountry = inputElementCountry.property("value");

    var filteredDataCountry = tableData.filter(tableData => tableData.country === inputValueCountry);

    tbody.html("");

    filteredDataCountry.forEach((sightingsCountry) => {
        var row = tbody.append("tr");
        Object.entries(sightingsCountry).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
          
        });
      });
};


var buttonCountry = d3.select("#filter-btn-shape");

buttonCountry.on("click", runEnterShape);


function runEnterShape () {

    d3.event.preventDefault();

    var inputElementShape = d3.select("#shape");

    var inputValueShape = inputElementShape.property("value");

    var filteredDataShape = tableData.filter(tableData => tableData.shape === inputValueShape);

    tbody.html("");

    filteredDataShape.forEach((sightingsShape) => {
        var row = tbody.append("tr");
        Object.entries(sightingsShape).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
          
        });
      });
};

// try change instead of click button and it will allow to switch between parameters.