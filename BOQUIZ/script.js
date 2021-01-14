const delayTime = 2000; // wachttijd voor de volgende vraag
const myQuestion = document.getElementById('myQuestion');
const myAnswer = document.getElementById('myAnswer');
const quizWrapper = document.getElementById('quizWrapper');
const questionBox = document.getElementById('questionBox');
const resultBox = document.getElementById('resultBox');
const quizTitle = document.getElementById('quizTitle');

let counter = 0; // aantal mutliple choice vragen
let quiz; // object met quiz vragen
let playerData = {}; // object, hierin worden de game gegevens opgeslagen

function init(){
    quiz = quiz1; // kies de quiz
    //quiz = quiz2; // kies de quiz
    initQuiz(); // start de quiz
}

function initQuiz(){
  playerData.goodAnswers = 0; // reset alle player game variabelen
  playerData.wrongAnswers = 0; // reset alle player game variabelen
  playerName = ""; // toekomstige uitbreiding naam speler opvragen
  resultBox.style.display = "none"; // verberg de resultbox
  quizTitle.innerHTML=quiz.quizMetaData.title; // laat titel van quiz zien
  prepareQuestions(); // start de quiz
}

function show_image(src, width, height) {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;

  // This next line will just add it to the <body> tag
  document.body.appendChild(img);
}

function prepareQuestions() {
  questionBox.className = "questionBox-new"; // voorbereiden animatie
  let quizImage = quiz.quizMetaData.imageURI; // image laden
  quizWrapper.style.backgroundImage = "url("+ quizImage + ")"; // image laden
  quizWrapper.style.backgroundRepeat = "no-repeat"; // image positioneren
  quizWrapper.style.backgroundPosition = "right"; // image positioneren
  quizWrapper.style.backgroundSize = "25%"; // image positioneren
  quiz.answerClicked = false; // voorkom dubbel klikken op antwoord


  if (counter < quiz.quizContent.length) { // test op aantal vragen
    myQuestion.innerHTML = quiz.quizContent[counter].question; // laat vraag zien
    myAnswer.innerHTML = ""; 
    // zet de multiple choice antwoorden neer
    for (let i = 0; i < quiz.quizContent[counter].answers.length; i++) {
      let answer = document.createElement('li');
      answer.className = "answer";
      answer.score = quiz.quizContent[counter].answers[i].feedback;
      answer.innerHTML = quiz.quizContent[counter].answers[i].answer;
      myAnswer.appendChild(answer);
      answer.addEventListener('click', evaluate, true)
    }

  } 
  else 
  {
    finishQuiz(); // sluit de quiz af
  }
}

function evaluate(evt) {
 // console.log(evt.target); // debug
  if(!quiz.answerClicked){
    if (evt.target.score) {
      evt.target.className = "right";
      playerData.goodAnswers += 1; // increase good score
      console.log("correct answer");
    }/* else {
      evt.target.className = "wrong";
      playerData.wrongAnswers += 1; // increase wrong score
      console.log("wrong answer");
    }*/
    quiz.answerClicked=true; // prevent double click
  }
  counter++;
  questionBox.className = "questionBox";  // voorbereiden animatie
  setTimeout(prepareQuestions, delayTime); // wacht 2 seconden voor nieuwe vraag
}

function finishQuiz() {
  // afsluiting quiz geef feedback
  if(playerData.goodAnswers == 1 || playerData.goodAnswers == 2){
    resultBox.innerHTML = "<h2>Gefeliciteerd <br>U bent: </br></h2>"
    resultBox.innerHTML +="<img src=\"https://cdn.discordapp.com/attachments/780422159972827177/796700836608081931/Jim_van_der_Want_Folkert_de_Jong.jpg\" width=\"600px\" height=\"400px\">";
  }
    else if(playerData.goodAnswers == 3 || playerData.goodAnswers == 4){
    resultBox.innerHTML = "<h2>Gefeliciteerd <br>U bent: </br></h2>"
    resultBox.innerHTML +="<img src=\"https://cdn.discordapp.com/attachments/780422159972827177/796700827939110922/9CE526DB-B762-4886-B3A4-CE7735FB4FD4.JPG\" width=\"600px\" height=\"800px\">";
  }
      else{
      resultBox.innerHTML = "<h2>Gefeliciteerd <br>U bent: </br></h2>"
      resultBox.innerHTML +="<img src=\"https://cdn.discordapp.com/attachments/780422159972827177/796700827565162516/Folkert_de_Jong_portret.jpg\" width=\"auto\" height=\"auto\">";
  }
  questionBox.style.display = "none";
  resultBox.style.display = "block";
  quizWrapper.style.background = "silver";
  /*resultBox.innerHTML = "<h2>Jouw resultaat <br>goede antwoorden " + playerData.goodAnswers + "<br>foute antwoorden " + playerData.wrongAnswers + "</h2>";*/
}

init(); // start it
