const div=document.querySelector('#container')
const subdiv=document.querySelector('#subcontainer')
const result=document.querySelector('#score')
const counter=document.querySelector('#counter')
let value=0

let humanScore=0,computerScore=0;

function getComputerChoice(){
    const values=["rock","paper","scissor"]
    const random=Math.random()*100;
    if(random<=33)
        return values[0]
    else if(random<=66)
        return values[1]
    else
        return values[2]
}


function getHumanChoice(){
    const value=prompt("Which one ? Rock || Paper || Scissor")
    return value;
}




function playRound(humanChoice,computerChoice){
    const choice=humanChoice.toLowerCase();
    counter.textContent=++value;

  
    if(choice=="rock" && computerChoice=="scissor")
    {
        console.log("You win : Rock beats Scissor")
        humanScore+=1;
        div.textContent="You win : Rock beats Scissor";
    }
    else if(choice=="scissor" && computerChoice=="rock"){
         console.log("You Lose : Rock beats Scissor")
          div.textContent="You Lose : Rock beats Scissor";
         computerScore+=1;
    }
    else if(choice=="scissor" && computerChoice=="paper"){
         console.log("You Win : Scissor beats paper")
          div.textContent="You Win : Scissor beats Paper";
         humanScore+=1;
    }
    else if(choice=="paper" && computerChoice=="scissor"){
         console.log("You Lose : Scissor beats Paper")
          div.textContent="You Lose : Scissor beats Paper";
         computerScore+=1;
    }
    else if(choice=="paper" && computerChoice=="rock"){
         console.log("You Win : Paper beats Rock")
          div.textContent="You Win : Paper beats Rock";
         humanScore+=1;
    }
    else if(choice=="rock" && computerChoice=="paper"){
         console.log("You Lose : Paper beats Rock")
          div.textContent="You Lose : Paper beats Rock";
         computerScore+=1;
    }
    else{
        console.log("Draw");
        div.textContent="Draw";
    }

    result.textContent=`Your score : ${humanScore}
    Opponent score : ${computerScore} `
}

const playGame=(value)=>{
        console.log(value.target.textContent)

        const computerSelection=getComputerChoice();
       
        playRound(value.target.textContent,computerSelection)

        if(humanScore==5)
        {
            subdiv.textContent="You win the match"
        


            humanScore=computerScore=0;
            value=0
        }
        if(computerScore==5){
            subdiv.textContent="computer won the match"
           
            humanScore=computerScore=0;
            value=0
        }

    
    
}



const button1=document.querySelector('#button1');
const button2=document.querySelector('#button2');
const button3=document.querySelector('#button3');



button1.addEventListener('click',playGame)
button2.addEventListener('click',playGame)
button3.addEventListener('click',playGame)

//done 2 steps 


