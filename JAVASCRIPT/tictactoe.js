var boxs=document.querySelectorAll(".box");
let statusTxt=document.querySelector("#status");
let restart=document.querySelector("#restart");

let x="<img src='../Images/x.png' height='100%' width='100%'/>";
let o="<img src='../Images/o.png' height='100%' width='100%'/>";


let running = false;
let Player = 'X';
let currentPlayer = x;
let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

let options = ["","","","","","","","",""];

init();
function init(){
    console.log("hwll");
    boxs.forEach(box =>{
        box.addEventListener('click',boxclicked)
    });
    statusTxt.innerHTML = `${Player} Your Turn`;
    running = true;
    restart.addEventListener('click',restartGame);
}

function boxclicked(){
    let index = this.dataset.index;
    //     options[index]=Player; wrong ..
    if(options[index]!="" || !running){
        return;
    }
    updatebox(this,index);
}

function updatebox(box,index){
    options[index]=Player;
    box.innerHTML = currentPlayer;
    checkWinner();
}

function changePlayer(){
    console.log("sduifewu");
    Player = (Player=='X') ? "O" : "X";
    currentPlayer = (currentPlayer == x) ? o : x;
    statusTxt.textContent = `${Player} Your Turn`;
}

function checkWinner(){
    let isWon = false;
    for(let i=0; i<win.length;i++){
        let condition = win[i]; // [012]
        let box1 = options[condition[0]]; // x
        let box2 = options[condition[1]];
        let box3 = options[condition[2]];

        
        if(box1=="" || box2=="" || box3==""){
            continue;
        }

        if(box1==box2 && box2==box3){
            isWon = true;
            boxs[condition[0]].classList.add('active');
            boxs[condition[1]].classList.add('active');
            boxs[condition[2]].classList.add('active');
        }
    }
    if(isWon){
        statusTxt.textContent = `${Player} Won`;
        running = false;
    }else if(!options.includes("")){
        statusTxt.innerHTML = `Game Draw....`;
        running = false;
    }else{
        changePlayer();
    }
}

function restartGame(){
    Player = 'X';
    currentPlayer = x;
    options = ["","","","","","","","",""];
    running = true;
    boxs.forEach(box =>{
        box.innerHTML = "";
        box.classList.remove('active');
    });

}