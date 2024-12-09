let userScore=0;
let compScore=0;

// let userScore=0;
// let compScore=0;
const choices =document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScoree=document.querySelector("#user-score");
const compScoree=document.querySelector("#comp-score");


const generatecompChoice=()=>{
      const options=["rock","paper","scissors"];
    const randindx=Math.floor( Math.random()*3);
    return options[randindx];
    //rock ,paper,scissor
}

const drawgame= ()=>{
    console.log("The game Was draw");
    msg.innerText ="Game was Draw!! Play Again..!!";
    msg.style.backgroundColor ="Yellow";
}

const showWinner = (userwin,userchoice,compchoice)=>{
    if(userwin){
        userScore++;
        userScoree.innerText=userScore;
        console.log("You Win!!");
        msg.innerText =`You Win!! your ${userchoice} Beats ${compchoice}`;
        msg.style.backgroundColor ="Green";
        
    }
    else{
        compScore++;
        compScoree.innerText=compScore;
        console.log("You Lose!! && computer win!!");
        msg.innerText=`You Lose!! ${compchoice} Beats Your${userchoice} `;
        msg.style.backgroundColor ="Red";
        compScore++;
    }
};

const playgame=(userchoice)=>{
console.log("User Choice=",userchoice);
//Generate computer Choice
const compchoice=generatecompChoice();
console.log("Comp Choice=",compchoice);
if(userchoice === compchoice){
    //draw
    drawgame();
}
else{
    let userwin=true;
    if(userchoice==="rock"){
        //paper and scissor
        userwin=compchoice=== "paper" ? false:true;//1st for paper and second for scissor
    }else if(userchoice==="paper"){
        //rock,scissor
          userwin=compchoice=== "rock"?true:false;
    }
    else{//scissor
        //paper,rock
        userwin=compchoice=== "paper"?true:false;
    }
     showWinner(userwin,userchoice,compchoice);
}

};



choices.forEach((choice)=>{
    //console.log(choice)
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playgame(userchoice);
    });
});

