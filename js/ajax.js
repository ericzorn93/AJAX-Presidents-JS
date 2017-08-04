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


        /*function createTable() {
            "use strict";
            var table = document.getElementById("presidentTable");

            var tableNames = [];

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
        */
        
        function queryData() {
            "use strict";
            var presidents = tableInfoParse.presidents.president;
            var input = document.getElementById('input');
            var regex = new RegExp(input.value, "i");


            return presidents.filter(function (president) {
                console.log("President", president);
                var presidentialTrait;
               for (var trait in president) {

                   presidentialTrait = president[trait];

                   if (trait === "party" || trait === "term") {
                       continue;
                   }

                   if (regex.test(presidentialTrait)) {
                       return true;
                   }

               }

               return false;
            });
        }

        function createRows() {
            "use strict";
            clearForm();
            var table = document.getElementById("presidentTable");
            var presidents = queryData();
            var president;
            var row;
            var number;
            var name;
            var birthday;
            var tookOffice;
            var leftOffice;
            var i;


            for (i = 0; i < presidents.length; i++) {
                row = table.insertRow(i);
                president = presidents[i];

                number = row.insertCell();
                number.appendChild(document.createTextNode(president.number));

                name = row.insertCell();
                name.appendChild(document.createTextNode(president.name));

                birthday = row.insertCell();
                birthday.appendChild(document.createTextNode(president.date));

                tookOffice = row.insertCell();
                tookOffice.appendChild(document.createTextNode(president.took_office));

                leftOffice = row.insertCell();
                leftOffice.appendChild(document.createTextNode(president.left_office));
            }

        }

        function clearForm() {
            "use strict";
            var table = document.getElementById("presidentTable");
            table.innerHTML = " ";
        }


        document.onload = createRows();
        document.getElementById("searchButton").addEventListener('click', createRows);
        document.getElementById("clearButton").addEventListener('click', clearForm);

    }
};




// Set up the request
xmlHTTP.open("GET", "http://schwartzcomputer.com/ICT4570/Resources/USPresidents.json");
// Perform the request
xmlHTTP.send();
















