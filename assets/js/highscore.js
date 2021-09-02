let backBtn = $("#back");
let clearBtn = $("#clear");
let highscoreEl = $("#highscores");
let listEl = $("<li>");
let initials = ""
let score = 0;

function getStorage() {
    initials = localStorage.getItem("Initials");
    score = localStorage.getItem("Score");
}

getStorage();

if (initials !== null && score !== null){
    listEl.text(initials + " - " + score);
    highscoreEl.append(listEl);
}


backBtn.on('click', function(){
    window.location.href = "index.html";
})

clearBtn.on('click', function(){
    listEl.remove();
    localStorage.clear();  
})