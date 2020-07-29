var questionArr = [{Q: "hi", A: ["", "", "", ""]}];

$("quiz-screen").hide();

$("#start-button").on("click", function(){
    $("#start-screen").hide();

    $("#question").text(questionArr[0].Q);
    $("#quiz-screen").show();
});