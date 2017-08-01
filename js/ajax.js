/* Eric Zorn: July 31, 2017 / AJAX and Voting for the President, Module 6: Homework 1 JS */

//HTTP Requests and Sends
var xmlHTTP = new XMLHttpRequest();
xmlHTTP.open("GET", "http://schwartzcomputer.com/ICT4570/Resources/USPresidents.json");
xmlHTTP.send();
xmlHTTP.addEventListener('load', reqListener);



function getId(id) {
    return document.getElementById(id);
}

function getTagName(tag) {
    return document.getElementsByTagName(tag);
}

function reqListener() {
    console.log(this.responseText);
}
