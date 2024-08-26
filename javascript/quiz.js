function check1(){
    const quiz = document.getElementById("SELECT1");

    if(quiz.children[0].value == "Choose1"){
        quiz.removeChild(quiz.firstElementChild);
    }

    var x = document.getElementById("SELECT1");

    if(x.value == "English"){
        document.getElementById("LangStart").setAttribute("href", "english_quiz.html");
    }
    if(x.value == "French"){
        document.getElementById("LangStart").setAttribute("href", "french_quiz.html");
    }
    if(x.value == "German"){
        document.getElementById("LangStart").setAttribute("href", "german_quiz.html");
    }
    if(x.value == "Spanish"){
        document.getElementById("LangStart").setAttribute("href", "spanish_quiz.html");
    }
}