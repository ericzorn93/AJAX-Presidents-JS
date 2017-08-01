/* Eric Zorn: July 31, 2017 / AJAX and Voting for the President, Module 6: Homework 1 JS */

var xmlHTTP = new xmlHTTPRequest(); //Establish Request
var openHTTP = xmlHTTP.open("GET", "http://schwartzcomputer.com/ICT4570/Resources/USPresidents.json");


function getId(id) {
    return document.getElementById(id);
}

function getTagName(tag) {
    return document.getElementsByTagName(tag);
}

/*function tableCreate() {
    "use strict";
    var body, table, tableBody, c; //(cells)

    body = getTagName("body");
    table = document.createElement("table");
    tableBody = document.createElement("tbody");

    //Creates the cells
    for ( c = 0; c <=2; c += 1) {
        var row = document.createElement("tr");
    }
}

tableCreate();


function newTable() {
    "use strict";
    var table = '';
    var rows = 2;
    var cols = 3;
    
    for (var r = 0; r < rows; r += 1) {
        table += '<tr>';
            for (var c = 0; c < cols; c +=1) {
                table += '<td>' + c + '</td>';
            }
        table += '</tr>';
    }
    
    document.write('<table>' + table + '</table>');
}

newTable();
*/


