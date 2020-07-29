var questionArr = [
{Q: "Which spell gave Harry his scar?", A: ["Avada Kedavra", "Crucio", "Imperio", "Expelliarmus"]},
{Q: "Which Weasley brother is the oldest?", A: ["Bill", "Charlie", "Percy", "Ron"]},
{Q: "Which house does Harry get sorted into?", A: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]},
{Q: "Which creature is found in the Chamber of Secrets?", A: ["Basilisk", "Hippogriff", "Dragon", "Acromantula"]},
{Q: "Which potion allows the drink to take the form of someone else?", A: ["Polyjuice Potion", "Felix Felicis", "Skele-Gro", "Veritaserum"]},
{Q: "Who is Harry's godfather?", A: ["Sirius Black", "Peter Pettigrew", "Remus Lupin", "Severus Snape"]},
{Q: "What is the name of Albus Dumbledore's brother?", A: ["Aberforth", "Fenrir", "Gellert", "Kingsley"]},
{Q: "What does Dolores Umbridge make Harry write in detention?", A: ["I must not tell lies.", "I must not use spells.", "I must obey the rules.", "I must respect my elders."]},
{Q: "What helps someone after being attacked by a dementor?", A: ["Chocolate", "Lemon Drops", "Honey", "Gillyweed"]},
{Q: "Which character is fascinated by muggle goods and machinery?", A: ["Arthur Weasley", "Cornelius Fudge", "Horace Slughorn", "Gilderoy Lockhart"]},
];

$("quiz-screen").hide();

$("#start-button").on("click", function(){
    $("#start-screen").hide();

    $("#question").text(questionArr[0].Q);

    $("#quiz-screen").show();
});

$(".answerBtn").on("click", function(){

});

var Arr = [0, 1, 2, 3];
function randomIndex(indexArr){
    var tempArr = [];
    for(var i = 0; i < 4; i++){
        var temp = Math.floor(Math.random() * indexArr.length);
        tempArr.push(indexArr[temp]);
        indexArr.splice(temp, 1);
    }
    return tempArr;
}

function randomAnswer(ansArr){
    var tempArr = randomIndex(Arr);
    var isCorrect = false;
    for(var i = 0; i < 4; i++)
    {
        if(tempArr[i] === 0){
            isCorrect = true;
        }
        var newButton = $("#answerRow").html("<button>");
        (ansArr[tempArr[i]]);
    }
}