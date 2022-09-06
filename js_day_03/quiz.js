var qn = 0;
function getQuestions(){
    obj = document.getElementById("question");
    obj.firstChild.nodeValue = ("please wait");
    ajaxCallback = nextQuestion;
    ajaxRequest("questions.xml");
}

function nextQuestion(){
    questions = ajaxreq.responseXML.getElementByTagName("q");
    obj = document.getElementById("question");
    if (qn < questions.length){
        q = questions[qn].firstChild.nodeValue;
        obj.firstChild.nodeValue = q;
    }
    else{
        obj.firstChild.nodeValue = "no more questions";
    }
}

function checkAnswer(){
    answers = ajaxreq.responseXML.getElementByTagName("a");
    a = answers[qn].firstChild.nodeValue;
    answerfield = document.getElementById("answer");
    if (a == answerfield.value){
        alert("Correct!");
    }
    else{
        alert("Incorrect. The correct answer is: " + a);
    }
    qn++;
    answerfield.value = "";
    nextQuestion();
}

obj = document.getElementById("startq");
obj.onclick = getQuestions();
ans = document.getElementById("submit");
ans.onclick = checkAnswer;