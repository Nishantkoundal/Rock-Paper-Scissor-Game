let choice = document.querySelectorAll('.choices');
let msg = document.querySelector('.msg');
let countcomp = document.querySelector('#count-comp');
let usercomp = document.querySelector('#count-user');

let userscore = 0;
let comscore = 0;

let compchoose = ()=>{
    let options =  ['rock' ,'paper' , 'scissor'];
    let randomnum = Math.floor(Math.random() * 3);
    return options[randomnum];
}
let drawGame = ()=> {
     msg.style.background = "linear-gradient(135deg, #2c3e50, #4ca1af)";
msg.style.color = "#ffeb3b"; 
    msg.style.boxShadow = "0 0 40px #00ffe7";
    msg.innerHTML = "game is draw";
    
}
let showWinner = (userwin , userchoice , comchoice) => {
    if (userwin) {
        userscore++;
        usercomp.innerHTML = userscore;
        msg.innerHTML = `You win! ${userchoice} beats ${comchoice}`;
        msg.style.color = "green";
        msg.style.background = "linear-gradient(180deg, #1f4037, #99f2c8)";
        msg.style.boxShadow = "0 0 20px #00ff9f";


        
    }else {
        comscore++;
        countcomp.innerHTML = comscore;
                msg.innerHTML = `you lose! ${comchoice} beats ${userchoice}`;
                msg.style.color = "red"; 
        msg.style.background = "linear-gradient(180deg, #3a1c71, #d76d77, #ffaf7b)";
        msg.style.boxShadow = "0 0 20px #ff5c8d";

        
    }
 
}
let playgame = (userchoice)=>{
  let comchoice = compchoose();
       let userwin = true;

  if ( userchoice === comchoice){
    drawGame();
    return;
  }else{
    if (userchoice === "rock") {
  
      userwin = comchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
 
      userwin = comchoice === "scissor" ? false : true;
    } else {
     
      userwin = comchoice === "rock" ? false : true;
    }
  }
  showWinner(userwin , userchoice , comchoice);
  
};
choice.forEach ((choices)=> {
    choices.addEventListener("click" , () =>{
       let userchoice = choices.getAttribute('id');
        
        playgame(userchoice);
    })
})