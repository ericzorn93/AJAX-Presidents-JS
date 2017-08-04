/* Eric Zorn: July 31, 2017 / AJAX and Voting for the President, Module 6: Homework 1 JS */


//HTTP Requests and Sends
var xmlHTTP = new XMLHttpRequest(); //Set up Request

xmlHTTP.onreadystatechange = function () {
    "use strict";
    if (xmlHTTP.readyState === 4 && xmlHTTP.status === 200) {
        var dataJSON = xmlHTTP.responseText;
        console.log(dataJSON); //Console Logging the JSON File

        var tableInfoParse = JSON.parse(dataJSON);

        console.log(tableInfoParse);

        //How to Query Data from AJAX JSON File
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

        //Create Table Rows
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

            /*var header = table.createTHead();
            row = header.insertRow(0);
            var cell = row.insertCell(0);
            var cell2 = row.insertCell(0);
            var cell3 = row.insertCell(0);
            var cell4 = row.insertCell(0);
            var cell5 = row.insertCell(0);

            cell3.innerHTML = "<b>Birthday</b>";
            cell2.innerHTML = "<b>Name</b>";
            cell.innerHTML = "<b>Number</b>";
            cell4.innerHTML = "<b>Entered Office</b>";
            cell5.innerHTML = "<b>Left Office</b>"; */

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

        //Clear Form Properly
        function clearForm() {
            "use strict";
            var table = document.getElementById("presidentTable");
            table.innerHTML = " ";
        }


        document.onload = createRows();
        document.getElementById("searchButton").addEventListener('click', createRows);
        document.getElementById("clearButton").addEventListener('click', clearForm);


        //Adding Styles
        function addStyles() {
            "use strict";
            var tableLength = document.getElementById("presidentTable").rows.length;
            var tableData = document.getElementsByTagName("td");
            console.log(tableLength);


            for (var i = 0; i < tableData.length; i += 1) {
                tableData[i].className += "tableData";
                tableData[i].style.borderColor += "green";
            }

        }

        document.body.onload = addStyles();

    }

};




// Set up the request
xmlHTTP.open("GET", "http://schwartzcomputer.com/ICT4570/Resources/USPresidents.json");
// Perform the request
xmlHTTP.send();
