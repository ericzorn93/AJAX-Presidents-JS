/* Eric Zorn: July 31, 2017 / AJAX and Voting for the President, Module 6: Homework 1 JS */


//HTTP Requests and Sends
var xmlHTTP = new XMLHttpRequest(); //Set up Request

xmlHTTP.onreadystatechange = function() {
    "use strict";
    if (xmlHTTP.readyState === 4 && xmlHTTP.status === 200) {
        var dataJSON = xmlHTTP.responseText;
        // console.log(dataJSON);

        var tableInfoParse = JSON.parse(dataJSON);

        console.log(tableInfoParse);


        function createTable() {
            "use strict";
            var table = document.getElementById("presidentTable");
            var rows = [
                table.insertRow(),
                table.insertRow(),
                table.insertRow(),
                table.insertRow(),
                table.insertRow()
            ];

            var tableNames = [];

            for (var i = 0; i < 6; i++) {
                rows[i];
            }

            rows[0].id = "nameTable";
            rows[1].id = "date";
            rows[2].id = "left-office";
            rows[3].id = "party";
            rows[4].id = "took-office";


            var presidents = tableInfoParse.presidents.president;
            var i;

            for (i in presidents) {
                // console.log(presidents[i].name);
                var presidentNames = presidents[i].name;
                tableNames.push(presidentNames);
            }

            return tableNames;

        }

        createTable();

        function createRows() {
            var table = document.getElementById("presidentTable");
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(0);
            var cell3 = row.insertCell(0);
            var presidentNames = createTable;
            var i;

            for (i = 0; i < presidentNames().length; i++) {
                cell1.innerHTML = presidentNames().length;
                cell2.innerHTML = presidentNames().length;
                cell3.innerHTML = presidentNames()[i];
            }

        }

        function clearForm() {
            "use strict";
            var table = document.getElementById("presidentTable");
        }

        document.getElementById("searchButton").addEventListener('click', createRows);

    }
};




// Set up the request
xmlHTTP.open("GET", "http://schwartzcomputer.com/ICT4570/Resources/USPresidents.json");
// Perform the request
xmlHTTP.send();
















