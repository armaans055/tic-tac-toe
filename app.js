let gameBoard = [
    1 , 2 , 3,
    4 , 5 , 6,
    7 , 8 , 9
]
let gameLive = false;
let playerOneTurn = false;
let playerTwoTurn = false;
let playerOneScor = 0;
let playerTwoScor = 0;
const squareOne = document.querySelector('.one')
const squareTwo = document.querySelector('.two') 
const squareThree = document.querySelector('.three') 
const squareFour = document.querySelector('.four') 
const squareFive = document.querySelector('.five') 
const squareSix = document.querySelector('.six') 
const squareSeven = document.querySelector('.seven') 
const squareEight = document.querySelector('.eight') 
const squareNine = document.querySelector('.nine') 
const playerOneScore = document.querySelector('.player-1-score')
const playerTwoScore = document.querySelector('.player-2-score')

squareOne.addEventListener("click", ()=>{
    if(playerOneTurn === true){
        gameBoard[0] = 'x'
    }else if(playerTwoTurn === true){
        gameBoard[0] = 'o'
    }
})
squareTwo.addEventListener("click", ()=>{
    if(playerOneTurn === true){
        gameBoard[1] = 'x'
    }else if(playerTwoTurn === true){
        gameBoard[1] = 'o'
    }
})
squareThree.addEventListener("click", ()=>{
    if(playerOneTurn === true){
        gameBoard[2] = 'x'
    }else if(playerTwoTurn === true){
        gameBoard[2] = 'o'
    }
})
squareFour.addEventListener("click", ()=>{
    if(playerOneTurn === true){
        gameBoard[3] = 'x'
    }else if(playerTwoTurn === true){
        gameBoard[3] = 'o'
    }
})
squareFive.addEventListener("click", ()=>{
    if(playerOneTurn === true){
        gameBoard[4] = 'x'
    }else if(playerTwoTurn === true){
        gameBoard[4] = 'o'
    }
})
squareSix.addEventListener("click", ()=>{
    if(playerOneTurn === true){
        gameBoard[5] = 'x'
    }else if(playerTwoTurn === true){
        gameBoard[5] = 'o'
    }
})
squareSeven.addEventListener("click", ()=>{
    if(playerOneTurn === true){
        gameBoard[6] = 'x'
    }else if(playerTwoTurn === true){
        gameBoard[6] = 'o'
    }
})
squareEight.addEventListener("click", ()=>{
    if(playerOneTurn === true){
        gameBoard[7] = 'x'
    }else if(playerTwoTurn === true){
        gameBoard[7] = 'o'
    }
})
squareNine.addEventListener("click", ()=>{
    if(playerOneTurn === true){
        gameBoard[8] = 'x'
    }else if(playerTwoTurn === true){
        gameBoard[8] = 'o'
    }
})

function gameStart(){
    gameBoard = [
        1 , 2 , 3,
        4 , 5 , 6,
        7 , 8 , 9
    ]
    gameLive = true;
}