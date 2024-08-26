//Language dropdown function
function check1(){
    const quiz = document.getElementById("SELECT1");

    if(quiz.children[0].value == "Choose1"){
        quiz.removeChild(quiz.firstElementChild);
    }

    var choice = document.getElementById("SELECT1").options[document.getElementById("SELECT1").selectedIndex].text;


    if(choice == "English"){
        document.getElementById("LangStart").setAttribute("href", "english_quiz.html");
    }
    if(choice == "French"){
        document.getElementById("LangStart").setAttribute("href", "french_quiz.html");
    }
    if(choice == "German"){
        document.getElementById("LangStart").setAttribute("href", "german_quiz.html");
    }
    if(choice == "Spanish"){
        document.getElementById("LangStart").setAttribute("href", "spanish_quiz.html");
    }
}

//Flag dropdown function
function check2(){
    const quiz = document.getElementById("SELECT2");

    if(quiz.children[0].value == "Choose2"){
        quiz.removeChild(quiz.firstElementChild);
    }

    var choice = document.getElementById("SELECT2").options[document.getElementById("SELECT2").selectedIndex].text;


    if(choice == "Europe"){
        document.getElementById("FlagStart").setAttribute("href", "europe_quiz.html");
    }
    if(choice == "Asia"){
        document.getElementById("FlagStart").setAttribute("href", "asia_quiz.html");
    }
    if(choice == "South America"){
        document.getElementById("FlagStart").setAttribute("href", "s_america_quiz.html");
    }
    if(choice == "Africa"){
        document.getElementById("FlagStart").setAttribute("href", "africa_quiz.html");
    }
}

//Math dropdown function
function check3(){
    const quiz = document.getElementById("SELECT3");

    if(quiz.children[0].value == "Choose3"){
        quiz.removeChild(quiz.firstElementChild);
    }

    var choice = document.getElementById("SELECT3").options[document.getElementById("SELECT3").selectedIndex].text;


    if(choice == "Addition"){
        document.getElementById("MathStart").setAttribute("href", "addition_quiz.html");
    }
    if(choice == "Subtraction"){
        document.getElementById("MathStart").setAttribute("href", "subtraction_quiz.html");
    }
    if(choice == "Multiplication"){
        document.getElementById("MathStart").setAttribute("href", "multiplication_quiz.html");
    }
    if(choice == "Division"){
        document.getElementById("MathStart").setAttribute("href", "division_quiz.html");
    }
}

//Quiz submission function
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