let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-button");
let newgame = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerY;    
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],    
];

const resetgame = () => {
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");    
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = 'O';
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        count++;
        box.disabled = true;
        checkWinner();
    });
});

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const gamedraw = () => {
    msg.innerText = `It's a draw game, Play Again`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const showWinner = (Winner) => {
    msg.innerText = `Congratulations, Winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }

        if(count === 9 && pos1 !== pos2 && pos2 !== pos3){
            gamedraw();
        }
    }
};

newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);