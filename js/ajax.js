/* Eric Zorn: July 31, 2017 / AJAX and Voting for the President, Module 8: Homework 1 JS */


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
            var vicePresidents = tableInfoParse.presidents.term;
            var input;
            input = document.getElementById('input');
            var regex = new RegExp(input.value, "i");


            return presidents.filter(function (president) {
                console.log("President", president);
                for (var trait in president) {
                    const presidentialTrait = president[trait];

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
            var input = document.getElementById('input');
            var table = document.getElementById("presidentTable");
            table.innerHTML = " ";
            //input.value = "";
        }

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

        function init() {
            "use strict";
            document.onload = createRows();
            document.getElementById("searchButton").addEventListener('click', createRows);
            document.addEventListener('keypress', function (event) {
                if (event.keyCode === 13 || event.which === 13 || event.key === 'Enter') {
                    createRows();
                    event.preventDefault();
                }
            });
            document.getElementById("clearButton").addEventListener('click', clearForm);
            document.body.onload = addStyles();
            document.getElementById("dateAsOf").value = tableInfoParse.presidents.date;
        }

        window.onload = init();
    }
};


// Set up the request
xmlHTTP.open("GET", "http://schwartzcomputer.com/ICT4570/Resources/USPresidents.json");
// Perform the request
xmlHTTP.send();