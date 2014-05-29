$(document).ready(main);

var numCorrect=0;
var numIncorrect=0;
function main(){

    var res =$(".answer");
    res.draggable();
    $(".preg").droppable({drop:dropQuestion});

}

function dropQuestion(event,ui){
    var contQuestion =$(this);
    var answer = ui.draggable;

    var correcta = contQuestion.text().toLowerCase();
    correcta = correcta.trim();
    var pos = contQuestion.position();

    if(correcta==answer.attr("alt")){
        contQuestion.append("<img src='"+answer.attr("src")+"' class='rDrop' />" );
         numCorrect++;

    }else{
        contQuestion.append("<img src='"+answer.attr("src")+"' class='rDrop' />");
         numIncorrect++;
    }

    answer.draggable("destroy");
    contQuestion.droppable("destroy");
    checkFinal();
    answer.remove();
}
function checkResult(){
    $(".ok,.inco").fadeIn("slow");
    $("#resultados").html("Correct answers:     "+numCorrect+"<br />"+"Incorrect answers:    "+numIncorrect);

}

function checkFinal(){
    resul = numCorrect+numIncorrect;
    if(resul ==6){

        checkResult();
    }
}