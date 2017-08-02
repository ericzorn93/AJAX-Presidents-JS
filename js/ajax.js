/* Eric Zorn: July 31, 2017 / AJAX and Voting for the President, Module 6: Homework 1 JS */


//HTTP Requests and Sends
var xmlHTTP = new XMLHttpRequest(); //Set up Request

xmlHTTP.onreadystatechange = function() {
    "use strict";
    if (xmlHTTP.readyState === 4 && xmlHTTP.status === 200) {
        var dataJSON = xmlHTTP.responseText;
        console.log(dataJSON);
        var tableInfoParse = JSON.parse(dataJSON);

        console.log(tableInfoParse);


        function createTable() {
            "use strict";
            var table = document.getElementById("presidentTable");
            var row = table.insertRow();
            var head = table.createTHead();


            for (var i = 0; i < presidents.president.name.length; i += 1) {
                
            }


        }

        createTable();


    }
};




// Set up the request
xmlHTTP.open("GET", "http://schwartzcomputer.com/ICT4570/Resources/USPresidents.json");
// Perform the request
xmlHTTP.send();
















