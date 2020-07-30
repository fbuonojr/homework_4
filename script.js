var questionArr = [
{Q: "Which spell gave Harry his scar?", A: ["Avada Kedavra", "Crucio", "Imperio", "Expelliarmus"], correct: "Avada Kedavra"},
{Q: "Which Weasley brother is the oldest?", A: ["Bill", "Charlie", "Percy", "Ron"], correct: "Bill"},
{Q: "Which house does Harry get sorted into?", A: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"], correct: "Gryffindor"},
{Q: "Which creature is found in the Chamber of Secrets?", A: ["Basilisk", "Hippogriff", "Dragon", "Acromantula"], correct: "Basilisk"},
{Q: "Which potion allows the drink to take the form of someone else?", A: ["Polyjuice Potion", "Felix Felicis", "Skele-Gro", "Veritaserum"], correct: "Polyjuice Potion"},
{Q: "Who is Harry's godfather?", A: ["Sirius Black", "Peter Pettigrew", "Remus Lupin", "Severus Snape"], correct: "Sirius Black"},
{Q: "What is the name of Albus Dumbledore's brother?", A: ["Aberforth", "Fenrir", "Gellert", "Kingsley"], correct: "Aberforth"},
{Q: "What does Dolores Umbridge make Harry write in detention?", A: ["I must not tell lies.", "I must not use spells.", "I must obey the rules.", "I must respect my elders."], correct: "I must not tell lies."},
{Q: "What helps someone after being attacked by a dementor?", A: ["Chocolate", "Lemon Drops", "Honey", "Gillyweed"], correct: "Chocolate"},
{Q: "Which character is fascinated by muggle goods and machinery?", A: ["Arthur Weasley", "Cornelius Fudge", "Horace Slughorn", "Gilderoy Lockhart"], correct: "Arthur Weasley"},
];

var questionIndex = 0;
var correctAnswers = 0;

var randomIndexArr = [
    [0, 1, 2, 3],
    [0, 1, 2, 3],
    [0, 1, 2, 3],
    [0, 1, 2, 3],
    [0, 1, 2, 3],
    [0, 1, 2, 3],
    [0, 1, 2, 3],
    [0, 1, 2, 3],
    [0, 1, 2, 3],
    [0, 1, 2, 3],
];

function randomIndex(indexArr){
    var tempArr = [];
    for(var i = 0; i < 4; i++){
        var temp = Math.floor(Math.random() * indexArr.length);
        tempArr.push(indexArr[temp]);
        indexArr.splice(temp, 1);
    }
    return tempArr;
}

var timer = 60;
function startTimer(){
    var gameTimer = setInterval(function(){
        if(timer >= 0){
            $("#timer").text("You have " + timer + " seconds to finish the quiz");
            timer--;
        }
        else{
            $("#quiz-screen").hide();
            $("#score-alert").text("Times up! You got " + correctAnswers + " questions right out of 10!");
            $("#score-alert").addClass("alert-danger");
            $("#score-screen").show();
            clearInterval(gameTimer);
        }
    }, 1000)
}

$("#quiz-screen").hide();
$("#score-screen").hide();

var randomAnswerArr = ["", "", "", ""];

$("#start-button").on("click", function(){
    startTimer();
    $("#start-screen").hide();

    var tempNumberArr = randomIndex(randomIndexArr[questionIndex]);

    for(var i = 0; i < 4; i++){
        randomAnswerArr[i] = questionArr[questionIndex].A[tempNumberArr[i]];
    }

    $("#question").text(questionArr[questionIndex].Q);

    $("#answer-1").text(randomAnswerArr[0]);
    $("#answer-1").val(randomAnswerArr[0]);

    $("#answer-2").text(randomAnswerArr[1]);
    $("#answer-2").val(randomAnswerArr[1]);

    $("#answer-3").text(randomAnswerArr[2]);
    $("#answer-3").val(randomAnswerArr[2]);

    $("#answer-4").text(randomAnswerArr[3]);
    $("#answer-4").val(randomAnswerArr[3]);

    $("#quiz-screen").show();
});

$(".answerBtn").on("click", function(){
    
    if($(this).val() === questionArr[questionIndex].correct){
        correctAnswers++;
    }
    else{
        timer = timer - 5;
    }

    questionIndex++;

    if(questionIndex != 10){
        var tempNumberArr2 = randomIndex(randomIndexArr[questionIndex]);

        for(var i = 0; i < 4; i++){
            randomAnswerArr[i] = questionArr[questionIndex].A[tempNumberArr2[i]];
        }

        $("#question").empty();
        $("#answer-1").empty();
        $("#answer-2").empty();
        $("#answer-3").empty();
        $("#answer-4").empty();
       
        $("#question").text(questionArr[questionIndex].Q);
 
        $("#answer-1").text(randomAnswerArr[0]);
        $("#answer-1").val(randomAnswerArr[0]);
    
        $("#answer-2").text(randomAnswerArr[1]);
        $("#answer-2").val(randomAnswerArr[1]);
    
        $("#answer-3").text(randomAnswerArr[2]);
        $("#answer-3").val(randomAnswerArr[2]);
    
        $("#answer-4").text(randomAnswerArr[3]);
        $("#answer-4").val(randomAnswerArr[3]);
    }
    else
    {
        $("#quiz-screen").hide();
        if(correctAnswers >= 6){
            $("#score-alert").addClass("alert-success");
        }
        else{
            $("#score-alert").addClass("alert-danger");
        }
        $("#score-alert").text("You got " + correctAnswers + " questions right out of 10!");
        $("#score-screen").show();
    }
});

$("#submitBtn").on("click", function(){
    var highscores =
        JSON.parse(window.localStorage.getItem("highscores")) || []

    var highscoreUser = document.getElementById("inputName").value;
    var scores = {
        score: correctAnswers,
        initials: highscoreUser
    };

    highscores.push(scores)
    window.localStorage.setItem("Highscores", JSON.stringify(highscores));
});