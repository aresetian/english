/**
 * Created by carlosandres on 3/15/15.
 */


var answerdValid = "";

$(document).ready(function () {
    $("#btn_Seeq").click(function(){
        //alert(answerdValid);
        var value = document.getElementById('inputEmail3').value;

        document.getElementById('lbltipAddedCommentanswer').innerHTML = answerdValid + " Correct answer"
        document.getElementById('lbltipAddedCommentckeck').innerHTML = value + " Your answer"
    });
});
$(document).ready(function () {
    $("#btn_Nextq").click(function(){
        nextQuestion()
    });




});

$(document).ready(function () {
    $("#btn_Checkq").click(function(){
        clear();
        var value = document.getElementById('inputEmail3').value;
        if(value.trim().toLowerCase() === answerdValid){
            document.getElementById('lbltipAddedCommentckeck').innerHTML = "Correct"
        }else{
            document.getElementById('lbltipAddedCommentckeck').innerHTML = "Wrong"
        }

    });




});
function clear()
{
    document.getElementById('lbltipAddedCommentckeck').innerHTML = ""
    document.getElementById('lbltipAddedCommentanswer').innerHTML = ""
}


function nextQuestion()
{

    var value = Math.floor((Math.random() * employees.length) + 1)
    document.getElementById('lbltipAddedComment').innerHTML = employees[value].question;
    answerdValid =employees[value].answer
    clear()
    document.getElementById("inputEmail3").value = '';
}
