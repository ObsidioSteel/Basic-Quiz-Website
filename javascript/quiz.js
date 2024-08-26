//Homepage dropdown menu functions
function check1(){
    const quiz = document.getElementById("SELECT1");

    if(quiz.children[0].value == "Choose1"){
        quiz.removeChild(quiz.firstElementChild);
    }

    var choice = document.getElementById("SELECT1").options[document.getElementById("SELECT1").selectedIndex].text;


    if(choice == "English"){
        document.getElementById("LangStart1").setAttribute("href", "english_quiz.html");
    }
    if(choice == "French"){
        document.getElementById("LangStart1").setAttribute("href", "french_quiz.html");
    }
    if(choice == "German"){
        document.getElementById("LangStart1").setAttribute("href", "german_quiz.html");
    }
    if(choice == "Spanish"){
        document.getElementById("LangStart1").setAttribute("href", "spanish_quiz.html");
    }
}

function check2(){
    const quiz = document.getElementById("SELECT2");

    if(quiz.children[0].value == "Choose2"){
        quiz.removeChild(quiz.firstElementChild);
    }

    var choice = document.getElementById("SELECT2").options[document.getElementById("SELECT1").selectedIndex].text;


    if(choice == "English"){
        document.getElementById("LangStart2").setAttribute("href", "english_quiz.html");
    }
    if(choice == "French"){
        document.getElementById("LangStart2").setAttribute("href", "french_quiz.html");
    }
    if(choice == "German"){
        document.getElementById("LangStart2").setAttribute("href", "german_quiz.html");
    }
    if(choice == "Spanish"){
        document.getElementById("LangStart2").setAttribute("href", "spanish_quiz.html");
    }
}

function check3(){
    const quiz = document.getElementById("SELECT3");

    if(quiz.children[0].value == "Choose3"){
        quiz.removeChild(quiz.firstElementChild);
    }

    var choice = document.getElementById("SELECT3").options[document.getElementById("SELECT1").selectedIndex].text;


    if(choice == "English"){
        document.getElementById("LangStart3").setAttribute("href", "english_quiz.html");
    }
    if(choice == "French"){
        document.getElementById("LangStart3").setAttribute("href", "french_quiz.html");
    }
    if(choice == "German"){
        document.getElementById("LangStart3").setAttribute("href", "german_quiz.html");
    }
    if(choice == "Spanish"){
        document.getElementById("LangStart3").setAttribute("href", "spanish_quiz.html");
    }
}


//Language quiz functions
function submit_quiz() {
    var score = 0;
    if(document.getElementById("correct1").checked) {
        score++;
    }
    if(document.getElementById("correct2").checked) {
        score++;
    }
    if(document.getElementById("correct3").checked) {
        score++;
    }
    if(document.getElementById("correct4").checked) {
        score++;
    }
    if(document.getElementById("correct5").checked) {
        score++;
    }
    alert("You got: " + score + "/5! Your score is: " + (score/5)*100 + "%");
}