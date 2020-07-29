var questionArr = [{Q: "hi", A: ["", "", "", ""]}];

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