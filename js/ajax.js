/* Eric Zorn: July 31, 2017 / AJAX and Voting for the President, Module 6: Homework 1 JS */


//HTTP Requests and Sends
var xmlHTTP = new XMLHttpRequest(); //Set up Request

xmlHTTP.onreadystatechange = function() {
    if (xmlHTTP.readyState === 4 && xmlHTTP.status === 200) {
        // console.log(xmlHTTP.responseText);
        var tableInfo = JSON.parse(xmlHTTP.responseText);
        var tableHeading  = tableInfo.tableHeading;
        var tablePresidents   = tableInfo.tableCellsPres;
        var tableCellsBirth   = tableInfo.tableCellsBirthday;

    }
};

// Set up the request
xmlHTTP.open("GET", "http://schwartzcomputer.com/ICT4570/Resources/USPresidents.json");
// Perform the request
xmlHTTP.send();









