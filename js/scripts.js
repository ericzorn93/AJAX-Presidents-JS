/* Eric Zorn: July 31, 2017 / AJAX and Voting for the President, Module 6: Homework 1 JS */

function getId(id) {
    return document.getElementById(id);
}

function getTagName(tag) {
    return document.getElementsByTagName(tag);
}

function tableCreate() {
    "use strict";
    var body, table, tableBody, c; //(cells)

    body = getTagName("body");
    table = document.createElement("table");
    tableBody = document.createElement("tbody");

    //Creates the cells
    for ( c = 0; c <=2; c += 1) {
        var row = document.createElement("tr");

        for (var i = 0; i < 2; i += 1) {
            var call = document
        }
    }
}