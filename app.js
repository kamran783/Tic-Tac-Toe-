let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector(".new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let playerO = true; //player X ,player O

const WinningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () =>{
  playerO = true;
  enabledButton();
  msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (playerO) {
      box.innerHTML = "O";
      playerO = false;
    } else {
      box.innerHTML = "x";
      playerO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disabledButton = () => {
  for(box of boxes){
    box.disabled=true;
  }
}

const enabledButton = () => {
  for(box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}

const showWinner = (winner) => {
  msg.innerText = `Congratulations, winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledButton();
}

const checkWinner = () => {
  for (let patterns of WinningPatterns) {
    let pos1val = boxes[patterns[0]].innerText;
    let pos2val = boxes[patterns[1]].innerText;
    let pos3val = boxes[patterns[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner (pos1val);
      }
    }
  }
};
resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);
