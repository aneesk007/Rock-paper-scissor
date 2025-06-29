console.log("Hello world");
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
  
    if(choice=="rock" && computerChoice=="scissor")
    {
        console.log("You win : Rock beats Scissor")
        humanScore+=1;
    }
    else if(choice=="scissor" && computerChoice=="rock"){
         console.log("You Lose : Rock beats Scissor")
         computerScore+=1;
    }
    else if(choice=="scissor" && computerChoice=="paper"){
         console.log("You Win : Paper beats Scissor")
         humanScore+=1;
    }
    else if(choice=="paper" && computerChoice=="scissor"){
         console.log("You Lose : Scissor beats Paper")
         computerScore+=1;
    }
    else if(choice=="paper" && computerChoice=="rock"){
         console.log("You Win : Paper beats Rock")
         humanScore+=1;
    }
    else if(choice=="rock" && computerChoice=="paper"){
         console.log("You Lose : Paper beats Rock")
         computerScore+=1;
    }
    else{
        console.log("Draw");
    }
}

function playGame(){
    for(let i=1;i<=5;i++){
        console.log("Level : "+i)
        
        const humanSelection=getHumanChoice();
        const computerSelection=getComputerChoice();
        console.log("computer choice is "+computerSelection);
        playRound(humanSelection,computerSelection)

    }
    console.log("Rounds Completed");
    if(humanScore>computerScore)
        console.log("YOU WIN!")
    else if(computerScore>humanScore)
        console.log("YOU LOSE!")
    else
        console.log("DRAW!")

}

playGame()

