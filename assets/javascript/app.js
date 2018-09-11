// .ready funciton to load
$(document).ready(function(){
    // on click funciton to start the game
    $('#start-button').on('click', game.gameStart)
});
var game = {

    // set timer to 60 seconds
    timeRemaining : 60,

    // start the game
    gameStart : function() {
        $('#timer').text('Time: ' + game.timeRemaining);
        setInterval(game.countDown, 1000);
        $('#start-game').hide();
        trivia.displayQuestions();
    
    },
    // decrease time and update #timer, will also stop counter at 0
    countDown : function() {
        game.timeRemaining--;
        $('#timer').text('Time: ' + game.timeRemaining);
        if (game.timeRemaining === 0) {
            game.stopTimer();
            $('#timer').empty();
        }
    },

    // stop the timer, check answers
    stopTimer : function() {
        clearInterval();
        trivia.checkAnswers();
    },

    // hide the questions until end of game
    endGame : function(numberRight, numberWrong, numberUnanswered) {
        //display our hidden results div
        $('#results').show();
        //hide our questions div
        $('#questions').empty();
        //stop our timer and hide it
        $('#timer').empty();
        $('#timer').hide();
        //display our right, wrong, and unanswered
        $('#right').text('[1UP] Answers correct: ' + numberRight);
        $('#wrong').text('[Bombed] Answers incorrect: ' + numberWrong);
        $('#unanswered').text('[*] Unanswered: ' + numberUnanswered);
    }
}

  // trivia function for questions and scoring
  var trivia = {
  
    // pull questions from the array of questions, loop them, and append to new div
    displayQuestions: function() {
      var divContainer = $("#questions");
      var answerGroup = $(".form-check form-check-inline");
      divContainer.append('<h2>Answer the following questions:</h2>');
              
      for (var i = 0; i < questionBank.length; i++) {
  
        divContainer.append('<div id="question">' + questionBank[i].question + '</div>');
        // var for our answers to appear 
        var answer1 = questionBank[i].answers[0];
        var answer2 = questionBank[i].answers[1];
        var answer3 = questionBank[i].answers[2];
        var answer4 = questionBank[i].answers[3];
        // append our divs with bootstrap style plus info[i] from our questionBank
        divContainer.append('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions'+i+'" id="inlineRadio1'+i+'"><label class="form-check-label" id="radio'+i+'label" for="inlineRadio1'+i+'">' + answer1 + '</label></div>');
        divContainer.append('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions'+i+'" id="inlineRadio1'+i+'"><label class="form-check-label" id="radio'+i+'label" for="inlineRadio1'+i+'">' + answer2 + '</label></div>');
        divContainer.append('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions'+i+'" id="inlineRadio1'+i+'"><label class="form-check-label" id="radio'+i+'label" for="inlineRadio1'+i+'">' + answer3 + '</label></div>');
        divContainer.append('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions'+i+'" id="inlineRadio1'+i+'"><label class="form-check-label" id="radio'+i+'label" for="inlineRadio1'+i+'">' + answer4 + '</label></div>');
      }
  
      // Done button
      var doneButton = '<button class="btn btn-primary" id="done-button" type="submit">Done</button>';
      divContainer.append(doneButton);
      $("#done-button").on("click", game.stopTimer);
    },
  
    // check for users wrong, right, and unanswered
    checkAnswers: function() {
      var correctAnswer;
      var userAnswer;
      var numberRight = 0;
      var numberWrong = 0;
      var numberUnanswered = 0;
  
      // loop through our answers, tally up our answers
      for (var i = 0; i < questionBank.length; i++) {
        correctAnswer = questionBank[i].correct;
        userAnswer = $('input[id=inlineRadio1'+i+']:checked + label').text();
  
        if (userAnswer === correctAnswer) {
          numberRight++;
        } else if (userAnswer === "") {
          numberUnanswered++;
        } else if (userAnswer !== correctAnswer) {
          {
            numberWrong++;
          }
        }
      }
  
      // show engGame div that we originally hide with the score tally
      game.endGame(numberRight, numberWrong, numberUnanswered);
    },
  }
  
  // array of objects with the questions, possible answers, and the correct answers
  var questionBank =
  [
    {
      question: "Mario's original name was?",
      answers: ["The Plumber", "Runningman", "Jumpman", "Crushman"],
      correct: "Jumpman"
    },
  
    {
      question: "What game did Mario make his debut in?",
      answers: ["Donkey Kong: Arcade", "Super Mario Bros", "Tetris", "Mario Bros: Arcade"],
      correct: "Donkey Kong: Arcade"
    },
    {
      question: "Bowser was originally supposed to be this type of animal.",
      answers: ["Turtle", "Dragon", "Ox", "Lizard"],
      correct: "Ox"
    },
    {
      question: "What game did Mario offically appear in a sports-like setting?",
      answers: ["Golf", "NES Open Tournament Golf", "Punch-Out", "Excitebike"],
      correct: "NES Open Tournament Golf"
    },
    {
      question: "This person has voiced Mario since 1995.",
      answers: ["Charles Martinet", "James Murphy", "Brian Hoskins", "Dennis Hopper"],
      correct: "Charles Martinet"
    },
    {
      question: "Mario (the character) has appeared in over _____ video game titles.",
      answers: ["500", "300", "400", "200"],
      correct: "200"
    },
    {
      question: "Mario and Luigi are twin brothers born where?",
      answers: ["New York", "New Jersey", "Mushroom Kingdom", "Yoshi Island"],
      correct: "Mushroom Kingdom"
    },
    {
      question: "The Warp Whistle appeared in Super Mario 3, but what game did it originally appear in?",
      answers: ["Super Mario Bros. 2", "Mega Man 2", "Legend of Zelda", "Contra"],
      correct: "Legend of Zelda"
    },
    {
      question: "What item did Mario have to touch at the end to send Bowser to a fiery death in Super Mario Bros?",
      answers: ["Switch", "Axe", "Hammer", "Knife"],
      correct: "Axe"
    },
    {
      question: "What character in the Mario Galaxy was designed after Takeshi Tezuka's wife?",
      answers: ["Goomba", "Boo","Peach", "Toad"],
      correct: "Boo"
    }
  ]