'use strict';

// selecting elements
let score0El = document.querySelector("#score--0");
let score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const namePlayer0= document.getElementById("name--0");
const namePlayer1= document.getElementById("name--1");


// manipulate or change vales to zero or starting point
score0El.textContent=0;
score1El.textContent=0;

diceEl.classList.add("hidden");

// roll dice functionality
let scores=[0,0]
let currentScore=0;
let activePlayer=0;


btnRoll.addEventListener("click",function(){
// 1.  generating random dice roll
    let dice =Math.trunc(Math.random()*6)+1;
  
// 2. display dice using image src attribute
     diceEl.classList.remove("hidden");
      diceEl.src=`dice-${dice}.png`
     
// 3.check if its equal to 1
if (dice!==1){
  // Add dice value to current score
currentScore+=dice;
document.getElementById(`current--${activePlayer}`).textContent=currentScore;
}
// else switch active player
else{
  document.getElementById(`current--${activePlayer}`).textContent=0;
  // document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
activePlayer = activePlayer=== 0 ? 1 : 0
currentScore=0;
  // document.querySelector(`.player--${activePlayer}`).classList.add("player--active");

  // use the toggle to activate the light
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
}
})

btnHold.addEventListener("click", function(){
//  add current score to active player score
scores[activePlayer]+=currentScore;
document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer]
// check if score is hundred
if (scores[activePlayer]>=100){
  // declare winner
  document.getElementById(`name--${activePlayer}`).textContent=`Player ${activePlayer+1} wins`
  document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
  player1.classList.toggle("player--active");

  // reset
  score0El.textContent=0;
}
// switch 
else  {

   document.getElementById(`current--${activePlayer}`).textContent=0;
  // document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
activePlayer = activePlayer=== 0 ? 1 : 0
currentScore=0;
  // document.querySelector(`.player--${activePlayer}`).classList.add("player--active");

  // use the toggle to activate the light
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
}


})


