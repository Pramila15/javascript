/*
//score1 and score2 storing in scores array
//one round score at a time
//current player 0->0 , 0->1 in score

var scores, roundscore, activePlayer, gamePlaying;
 call init();

//event handler is roll button
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    //random number (var scope)
    var dice = Math.floor(Math.random() * 6) + 1;

    //display res
    //document.querySelector(".dice").style.display = "block";
    var diceDOM = document.querySelector(".dice");
    //dont have to select over and over again

    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";
    //img src attribute

    //update round score
    if (dice !== 1) {
      //add score
      roundscore += dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundscore;
    } else {
      //next player
      //activeplayer change , 0 means player 1 / 1 means player 2
      nextPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    //add cur score to global score
    scores[activePlayer] += roundscore;

    //scores store score both the players
    //access score using activeplayer variable
    //update in ui
    //score-0 and score-1

    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    //check winner
    if (scores[activePlayer] >= 20) {
      //change player-0 or player-1 to winner
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      //hide dice and active
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer - "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer - "-panel")
        .classList.remove("active");
      gamePlaying = false; - stop playing
    } else {
      //continue game
      nextPlayer();
    }
  }
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  //set roundscore back to zero
  roundscore = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  //make visible who is the active player
  //remove and add .active class
  //toggle option
  // document.querySelector(".player-1-panel").classList.remove("active");
  //document.querySelector(".player-0-panel").classList.add("active");

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundscore = 0;
  gamePlaying = true;
  //math obj js built-in obj rand()
  //floor() removes decimal part
  //0 - 6 numbers
  //Math.floor(Math.random()*6)+1
  //var dice = Math.floor(Math.random() * 6) + 1;
  //console.log(dice);

  //obj gives access to html - document
  //queryselector = selects the first ele that it finds , select thing like exactly the css way

  //document.querySelector("#current-" + activePlayer).textContent = dice; //setter , set values
  //select id in css we use #
  //currnt+activeplayer
  //textcontent set only simple text

  //document.querySelector('#current-'+activePlayer).innerHTML ='<em>'+dice+'</em>';
  //html content so innerhtml

  //var x=document.querySelector("score-0").textContent;
  //console.log(x);
  //getter , get value

  //queryselector to change css objs
  //hide content - display property to none
  //select css class - .
  document.querySelector(".dice").style.display = "none";
  //css = .style
  //property = .property
  //class = .classname
  //=value

  //getelebyid - for id's
  
}
------------------------------------------------------------------------
------------------------------------------------------------------------
*/

var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    //3. Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
      //Add score
      roundScore += dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      //Next player
      nextPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    // Check if player won the game
    if (scores[activePlayer] >= 100) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      //Next player
      nextPlayer();
    }
  }
});

function nextPlayer() {
  //Next player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //document.querySelector('.player-0-panel').classList.remove('active');
  //document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.querySelector(".dice").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;
