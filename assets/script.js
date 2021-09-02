//An array of objects! ex questions[0].title probably returns the first title
let questions = [
      {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
      },
      {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
      },
      {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
      },
      {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
      },
      {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
      }
    ];

let count = 0;
let startBtn = $("#startQuiz");
let timeEl = $("#timer");
let paraEl = $("#directions");
let questionNum = 0;
//As question answered correctly count++;?

startBtn.on('click', function(){
    count = 0;
    startBtn.prop('disabled', true);
    paraEl.hide();
    startBtn.hide();
    displayQuestions();
    startTimer();
})

let timeLeft = 75;

function startTimer() {
    

    let timer = setInterval(function(){
        timeLeft--;
        //updates timer text
        timeEl.text("Time: " + timeLeft);
        if (timeLeft === 0){
            clearInterval(timer);
        } else if (count === 4) {
            clearInterval(timer);
        }    
    }, 1000);
}

let titleEl = $("#title");
let containerEl = $("#choiceContainer");
let ans1 = $("<button>");
let ans2 = $("<button>");
let ans3 = $("<button>");
let ans4 = $("<button>");

function displayQuestions() {
    //Populating the web page with the questions and titles
    titleEl.text(questions[count].title);

    containerEl.append(ans1.text(questions[count].choices[0]));
    containerEl.append(ans2.text(questions[count].choices[1]));
    containerEl.append(ans3.text(questions[count].choices[2]));
    containerEl.append(ans4.text(questions[count].choices[3]));
}
console.log(questions[count].answer);

let choice = "";
let score = 0;
let textBox = $("<input>");
let submitBtn = $("<button>");
//textBox.setAttribute("type", "text");

function checkAnswer(choice){

    //dock time if answer is wrong
    //while (count < 4){
        if (choice === questions[count].answer){
            console.log("correct!");
            score += 5;
        } else {
            console.log("Wrong!");
            timeLeft -= 10;
        }
        count++;
        if (count !== 4){
            displayQuestions();
        } else {
            console.log(count);
            //REMOVING LEFTOVER BUTTONS
            ans1.remove();
            ans2.remove();
            ans3.remove();
            ans4.remove();
            //Displays final screen with score, txtBox, submit btn
            titleEl.text("You scored " + score + " points!");
            paraEl.show();
            paraEl.text("Please Enter Your Initials:");
            submitBtn.text("Submit");
            containerEl.append(textBox);
            containerEl.append(submitBtn);
           // window.location.href = "highscores.html";
        }
    //}
    //if (choice === questions[4].answer) {
     //   window.location.href = "highscores.html";
    //}
}
submitBtn.on('click', function(){
    //send score and initials to local storage so it can populate on the highscores page
    console.log("yup");
})
ans1.on('click', function(){
    choice = ans1.text();
    checkAnswer(choice);
})
ans2.on('click', function(){
    choice = ans2.text();
    checkAnswer(choice);
})
ans3.on('click', function(){
    choice = ans3.text();
    checkAnswer(choice);
})
ans4.on('click', function(){
    choice = ans4.text();
    checkAnswer(choice);
})
//funct display question and answers from objects
//funct determine correct answer
//display next question
//funct penalty
//timer
//once all questions are done displays input box for initials and score updates local storage and 
//^places data on the highscores.html page

//maybe make a separate .js file for highscores? it will have access to local files