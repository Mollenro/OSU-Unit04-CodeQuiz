let highscoreEl = $("#highscores");
let listEl = $("<li>");
let initials = ""
let score = 0;

function getStorage() {
    initials = localStorage.getItem("Initials");
    score = localStorage.getItem("Score");
}

getStorage();

listEl.text(initials + " - " + score);

highscoreEl.append(listEl);