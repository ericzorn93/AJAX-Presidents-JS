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
            var thead = document.createElement('thead');

            var presidents = tableInfoParse.presidents.president;
            var i;

            for (var i = 0; i < 3; i += 1) {
                table.createTHead();
            }

            for (i in presidents) {
                console.log(presidents[i].name);
            }

            // console.log(presidents);

        }

        createTable();


    }
};




// Set up the request
xmlHTTP.open("GET", "http://schwartzcomputer.com/ICT4570/Resources/USPresidents.json");
// Perform the request
xmlHTTP.send();
















