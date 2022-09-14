console.log("JS Loaded");
var start = new Date("Sep 13 2022 18:12:00 GMT+0100").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var t = now - start;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}, 1000);

function updateJokeOnUi(jokeText) {
    let jokeElem = document.getElementById("joke");
    jokeElem.innerHTML = jokeText;
}

function getRandomJoke() {
    const url = "https://v2.jokeapi.dev/joke/Any";

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            let jokeObj = JSON.parse(xmlHttp.responseText);
            // console.log(jokeObj);
            let jokeText = "";
            if (jokeObj.type == "single") {
                jokeText = jokeObj.joke;
            } else {
                jokeText = "Q. " + jokeObj.setup + "<br> A. " + jokeObj.delivery;
            }
            updateJokeOnUi(jokeText);
        }
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

// Add event listener for the new joke button
var button = document.getElementById("newJokeBtn");
button.addEventListener("click", function (event) {
    getRandomJoke();
});

getRandomJoke();
