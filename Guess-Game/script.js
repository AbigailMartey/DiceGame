'use strict';

let number=Math.trunc(Math.random()*20)+1;
document.querySelector(".number").textContent= number;
document.querySelector(".number").textContent="?"

let score=20;

let highscore=0;
let guess = Number(document.querySelector(".guess").value)

document.querySelector(".check").addEventListener("click",function()
{
const guess = Number(document.querySelector(".guess").value)
// if no number  is entered
if (!guess)
{
    document.querySelector(".message").textContent ="Please guess..."
}

// if guess is equal to random number

else if (guess===number){
// change the style when game is won
    document.querySelector(".message").textContent= "You win !!!"
    document.querySelector("body").style.backgroundColor="#abdbe3"
    document.querySelector(".number").style.width="30rem";
    document.querySelector(".number").textContent=guess;

   if(score>highscore) {
highscore=score;
document.querySelector(".highscore").textContent=highscore

   }
}

//code refactoring DRY code
else if(guess!==number){
    if (score > 1)

   {document.querySelector(".message").textContent = guess > number ? "Your number is higher": "Your number is lower"}
 
   score--;

 document.querySelector(".score").textContent=score;

    }
       
   else {
    document.querySelector(".message").textContent="You have lost the game "
    document.querySelector(".score").textContent=0;
    }
});

//     // if guessed number is higer than the random number
// else if ( guess > number){
//     if(score>1){
// document.querySelector(".message").textContent="Your number is higher"
//    score--;

//  document.querySelector(".score").textContent=score;

//     }
       
//    else {
//     document.querySelector(".message").textContent="You have lost the game "
//     document.querySelector(".score").textContent=0;
//     }
//    }


// // if guessed number is lower than the random number
// else if ( guess < number){
//  if(score > 1)   {
//        document.querySelector(".message").textContent="Your number is lower";
//     score--;

//  document.querySelector(".score").textContent=score;
//  }

// else{
//     document.querySelector(".message").textContent="You have lost the game "
//     document.querySelector(".score").textContent=0
//     }
// }
// });




document.querySelector(".again").addEventListener("click",function(){

    score=20;
    number=Math.trunc(Math.random()*20)+1;

    document.querySelector(".score").textContent=score;
    document.querySelector(".message").textContent="Start guessing..."
    document.querySelector(".number").textContent="?"
    document.querySelector("body").style.backgroundColor="black"
    document.querySelector(".number").style.width="15rem"
    document.querySelector(".guess").value=""

})
