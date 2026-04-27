let arr = ["Rock", "Paper", "Scissor"]; 

let userScore = 0; 
let computerScore = 0; 

let tag = document.querySelectorAll(".samevalue"); 

const looseSound = new Audio("C:/Users/Rohil/RockPaperScissorGame/assets/looseSound.aac"); 
const winSound = new Audio("C:/Users/Rohil/RockPaperScissorGame/assets/winSound.aac")
tag.forEach((button) => {
    button.addEventListener("click", (e) => {
    let val; 
    if(e.target.classList.contains("samevalue")){
        val = e.target.innerText; 
        document.getElementById("rightbox").innerText = val; 
    }

    let computerChoice
    let value = Math.floor(Math.random() * 2); 
    let value1 = Math.floor(Math.random() * 2) + 1;
    let value2 = Math.floor(Math.random() * 2) + 1;

    if(value2 % value1 == value){
        computerChoice = arr[value2]; 
        document.getElementById("leftbox").innerText = computerChoice
    }else if((value2 === 1 || value2 === 2) && (value1 === 2 || value1 === 1) && (value === 0 || value === 1)){
        computerChoice = arr[0];
        document.getElementById("leftbox").innerText = computerChoice;  
    }

    if(val === "Rock" && computerChoice === "Scissor"){
        document.getElementById("demo").innerText = "You Win"; 
        winSound.currentTime = 0; 
        winSound.play(); 
        document.getElementById("userScore").innerText = userScore += 1; 
    }else if (val === "Scissor" && computerChoice === "Paper"){
        document.getElementById("demo").innerText = ""; 
        winSound.play(); 
        document.getElementById("demo").innerText = "You Win";
        document.getElementById("userScore").innerText = userScore += 1; 
    }else if(val === "Paper" && computerChoice === "Rock"){
        document.getElementById("demo").innerText = "";    
        winSound.play();           
        document.getElementById("demo").innerText = "You Win";
        document.getElementById("demo").style.backgroundColor = "rgb(5, 5, 18)";
        document.getElementById("demo").style.color = "green"; 
        document.getElementById("userScore").innerText = userScore += 1; 
    }else if(val !== computerChoice){
        document.getElementById("demo").innerText = ""; 
        looseSound.play();
        document.getElementById("demo").innerText =  "You Loose"; 
        document.getElementById("demo").style.backgroundColor = "rgba(235, 92, 92, 0.89)";
        document.getElementById("demo").style.color = "red";
        document.getElementById("computerScore").innerText = computerScore += 1; 
    }else if(val === computerChoice){
        document.getElementById("demo").innerText = ""; 
        document.getElementById("demo").innerText = "Match Draw"; 
    }else{
        document.getElementById("demo").innerText = ""; 
        document.getElementById("demo").innerText = "You Loose"; 
        document.getElementById("computerScore").innerText = computerScore += 1; 
        }
    })
});

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", () => {
    location.reload();
})