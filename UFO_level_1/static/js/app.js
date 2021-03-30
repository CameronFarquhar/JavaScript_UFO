var tableData = data;

var button = d3.select("#filter-btn");

var form = d3.select(".form-control");

var tbody = d3.select("tbody");

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter () {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    tbody.html("");

    filteredData.forEach((sightings) => {
        var row = tbody.append("tr");
        Object.entries(sightings).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
          
        });
      });
};