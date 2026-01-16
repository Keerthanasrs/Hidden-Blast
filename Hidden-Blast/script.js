let one =document.querySelector('.one');
let two =document.querySelector('.two');
let three =document.querySelector('.three');
let four =document.querySelector('.four');
let five =document.querySelector('.five');
let six =document.querySelector(".six");
let seven =document.querySelector(".seven");
let eight =document.querySelector(".eight");
let nine =document.querySelector(".nine");
    
let p=document.querySelector('p');
let sav=document.querySelector('.sav');
let res=document.querySelector('.res');
let play=document.querySelector('.play');
let h3=document.querySelector('h3');
let h6=document.querySelector('h4');
let compBomb =document.querySelector('.compBomb');
let userBomb =document.querySelector('.userBomb');
let game=document.querySelector('.game');
let restart = document.querySelector('.restart');



let user_sel=0;
let comp_sel=0;

let user_stat=1;
let comp_stat=1;

let user_opt=[1,2,3,4,5,6,7,8,9];
let comp_opt=[1,2,3,4,5,6,7,8,9];

let comp_bomb=0;
let user_bomb=0;


let turn =1;
let maxTurn=3;

compBomb.addEventListener("click",()=>{
comp_bomb = Math.floor(Math.random()*9)+1;
console.log(`comp's bomb: ${comp_bomb}`);
compBomb.innerText=`Bomb selected`;

});


userBomb.addEventListener("click",()=>{
user_bomb = Number(prompt("Enter your bomb number: "));
console.log(`user's bomb : ${user_bomb}`);
userBomb.innerText=`Bomb selected`;

});

user_opt=user_opt.filter(el=>el!=user_bomb);
comp_opt=comp_opt.filter(el=>el!=comp_bomb);

game.addEventListener("click",()=>{
    if (user_bomb === 0 || comp_bomb === 0)
        return alert("Bombs are not selected!");
    p.innerText="Game started";
    h3.innerText="Turn : 1 ";
    h6.innerText="User Turn";

    h6.style.color="#2c163f";
    game.style.display="none";
    compBomb.innerText="";
    userBomb.innerText="";
    
    if((p.innerText=="Draw" )|| (p.innerText=="Game Over")){
        return;
    }
user_opt=user_opt.filter(el=>el!=user_bomb);
comp_opt=comp_opt.filter(el=>el!=comp_bomb);

    one.addEventListener("click", () => userTurn(1));
    two.addEventListener("click", () => userTurn(2));
    three.addEventListener("click", () => userTurn(3));
    four.addEventListener("click", () => userTurn(4));
    five.addEventListener("click", () => userTurn(5));
    six.addEventListener("click", () => userTurn(6));
    seven.addEventListener("click",() => userTurn(7));
    eight.addEventListener("click", () => userTurn(8));
    nine.addEventListener("click", () =>userTurn(9));

    
    let user_color=[one,two,three,four,five,six,seven,eight,nine];
     function userTurn(user_sel) {
        user_color[user_sel-1].style.backgroundColor="#914d80b8";
        if(user_opt==null && comp_opt==null){
        p.innerHTML="";
        res.innerHTML ="<h1>Draw</h1>";
        restart.style.display = "block";
        res.style.color="#555";
        sav.innerText="";
        h6.innertext="";
        h3.innerText="";
        disableAllButtons();
            return;
        }
        console.log(`user selected:${user_sel}`);
    if ( !user_stat || !comp_stat) return;
    
    user_opt = user_opt.filter(n => n !== user_sel);
    comp_opt = comp_opt.filter(n => n !== user_sel);
    // Check bomb
    if (user_sel === comp_bomb) {
        user_color[user_sel-1].style.backgroundColor="rgba(221, 39, 39, 1)";
        user_stat = 0;
        p.innerHTML="<h2>Game Over</h2>";
        restart.style.display = "block";
        p.style.color="rgba(221, 39, 39, 1)";
        res.innerText = "Winner : COMPUTER";
        h3.innerText="";
        h6.innerText="";
        sav.innerText = "";
        res.style.color="green";
        disableAllButtons();
        return;
    }

    sav.innerText ="You are SAFE";
    h6.innerText="Computer Turn";
    h6.style.color="#0f254ccd";
    setTimeout(compTurn,2000);
    
}
let comp_color=[one,two,three,four,five,six,seven,eight,nine];
function compTurn() {
    // COMPUTER TURN

    comp_sel = comp_opt[Math.floor(Math.random() * comp_opt.length)];
    
    comp_color[comp_sel-1].style.backgroundColor="#c4acc2d6";
    comp_opt = comp_opt.filter(el => el !== comp_sel );
    user_opt = user_opt.filter(n => n !== comp_sel);
    
console.log(`comp selected:${comp_sel}`);
    if (comp_sel == user_bomb) {
        comp_color[comp_sel-1].style.backgroundColor="#D90429";
        comp_stat = 0;
        p.innerHTML="<h2>Game Over</h2>";
        restart.style.display = "block";
        p.style.color="#D90429";
        sav.innerText = "";
        res.innerText = "Winner : YOU";
        h6.innerText="";
        h3.innerText="";
        res.style.color="green";
        disableAllButtons();
        return;
    } 
    sav.innerText = "Computer is SAFE!";

    turn++;
    if(turn>maxTurn){
        res.innerHTML="<h2>Draw</h2>";
        restart.style.display = "block";
        p.innerText ="";
        res.style.color="#181212";
        sav.innerText="";
        h6.innerText="";
        h3.innerText="";
        disableAllButtons();
        return;
    }else{
    sav.innerText = "Computer is SAFE";
    h6.innerText="User Turn";
    h6.style.color="#491240b5";
    h3.innerText=`Turn : ${turn}`; 

}}
});
function disableAllButtons() {
    let buttons = [one, two, three, four, five, six, seven, eight, nine];
    buttons.forEach(btn => {
        btn.style.pointerEvents = "none";   // disable clicking
        btn.style.opacity = "0.8";          // optional visual
    });
}
restart.addEventListener("click", () => {
    location.reload();
});