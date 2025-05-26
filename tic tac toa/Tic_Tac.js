let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; // player 0
let count = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let resetGame = () =>
{
    count = 0;
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) =>{
    box.addEventListener("click",()=>
    {
        count++;
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
}
);

const disableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}
const enableBoxes = () =>
{
    for(let box of boxes)
    {
        
        box.innerText="";
        box.disabled = false;
    }
};

const showWinner =(winner) =>
{
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

};

let flag = true;
const checkWinner = () =>
{
    for( let pattern of winPatterns)
    { 
         let posVal1 = boxes[pattern[0]].innerText; 
         let posVal2 =boxes[pattern[1]].innerText
         let posVal3 =boxes[pattern[2]].innerText;

         if(posVal1!=""&&posVal2 != "" && posVal3 != "")
         {
            if(posVal1 === posVal2 && posVal2 === posVal3)
            {
                flag = false;
                showWinner(posVal1);
            }
         }
         if(count === 9 && flag === true)
         {
            msg.innerText = "No any Player Winner Play again";
            msgContainer.classList.remove("hide");
         }
        
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);