var tableData = data;

var buttonDate = d3.select("#filter-btn-date");

var tbody = d3.select("tbody");

buttonDate.on("click", runEnterDate);


function runEnterDate () {

    d3.event.preventDefault();

    var inputElementDate = d3.select("#datetime");

    var inputValueDate = inputElementDate.property("value");

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValueDate);

    tbody.html("");

    filteredData.forEach((sightings) => {
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

    filteredDataCity.forEach((sightingsCity) => {
        var row = tbody.append("tr");
        Object.entries(sightingsCity).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
          
        });
      });
};