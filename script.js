console.log("Welcome To Tic Toc Toe")

let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let Turn = "X"
let gameover1 = false

// Function to change the turn
const changeTurn = () => {
    return Turn === "X" ? "0" : "X"
}

// Function to check for win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

        wins.forEach(e => {
            if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
                (boxtext[e[0]].innerText !== "")) {
                document.querySelector('.info').innerText = boxtext[e[0]].innerText + "won"
                gameover1 = true
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200"
            }
        })
}

// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = Turn;
            Turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!gameover1){
                document.getElementsByClassName("info")[0].innerText = "Turn for" + Turn;
            }
        }
    })
})

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    Turn = "X";
    gameover1 = false
    document.getElementsByClassName("info")[0].innerText = "Turn for" + Turn;
    
})