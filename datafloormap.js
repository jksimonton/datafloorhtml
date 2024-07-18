
document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    sessionStorage.setItem('Last Selected Item', "")

    document.getElementById("info-status").innerHTML = "Select a Rack...";


})

function selectRack (element) {
    
    let lastSelected = sessionStorage.getItem('Last Selected Item');

    if (lastSelected === "") {}
    else {
        lastSelected = document.getElementById(lastSelected);
        lastSelected.classList.toggle('selected');
    }

    element.classList.toggle('selected');
    sessionStorage.setItem('Last Selected Item', element.id);

    document.getElementById("info-status").innerHTML = "Select a Unit...";

    fetchURL = "http://localhost:8080/racks/"+element.id+".json";

    fetch(fetchURL)
    .then(response => response.json())
    .then(rack => {
        rack.rack.forEach(unit => {
            unitElement = document.getElementById(unit.id);
            unitElement.style.removeProperty("background-color");
            if (unit.itemNumber == "empty") {
                if (unitElement.className !== "rackunit empty") {
                    unitElement.classList.toggle('empty');
                }
            } else if (unit.itemNumber == "") {
                if (unitElement.className !== "rackunit empty") {
                    unitElement.classList.toggle('empty');
                }
            } else {
                if (unit.color == "") {}
                else {
                    unitElement.style.backgroundColor = unit.color;
                }
            }
        });
    });


}

function selectUnit (element) {


}