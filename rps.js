let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const  userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const gencompchoice = () =>  {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options [randIdx];
    // rock , paper , scissors

}
const drawGame = () => {
    console.log("game was draw.")
    msg.innerText = "Draw game. play again!"
};
const showWinner = (userWin, userchoice , compchoice) => {
    if(userWin) {
        userscore++;
        userScorePara.innerText = userscore;
        console.log("you win!");
        msg.innerText = `you Win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "Green";
    }
    else{
        compscore++;
        compScorePara.innerText = compscore;
        console.log("you lose");
        msg.innerText = `you lost! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};
const playgame = (userchoice) =>{
    console.log("user choice =", userchoice);
    // Genrate computer choice --> modular
    const compchoice = gencompchoice();
    console.log("comp choice =", compchoice);


if (userchoice === compchoice){
    //Drawgame
    drawGame();
}
else{
    let userWin = true;
    if(userchoice === "rock"){
        //scissors , paper
        userWin = compchoice === "paper" ? false : true;
    }
    else if (userchoice === "paper") {
        //rock , scissor
        userWin = compchoice === "scissors" ? false : true ;
    }
    else{
        // rock , paper
        userWin = compchoice === "rock" ? false : true;
    }
    showWinner(userWin);
}
};
choices.forEach((choice) => {
    choice.addEventListener("click" , () =>{
        const userchoice = choice.getAttribute("id");
        playgame(choice);
    });
});

/* in java script ,genrating random number we use a function like 
math.random()  is used to genrate random number in java script, it will only genrate only number between 0 to 1 decimal number
if we multiply   Math.random()*n then number genrate from 0 to (n-1)
for example Math.random()*3   it will genrate number between o to 2 decimal number
if you want only integer number
     Math.floor(Math.random()*3)
 */