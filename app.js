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

function gameBoardEditor(x){
    if(playerOneTurn === true){
        gameBoard[x-1] = 'x'
        playerTwoTurn = true;
        playerOneTurn = false;
    }else if(playerTwoTurn === true){
        gameBoard[x-1] = 'o'
        playerOneTurn = true;
        playerTwoTurn = false;
    }
}
squareOne.addEventListener('click', ()=>{
    gameStart()
})
squareTwo.addEventListener('click', ()=>{
    gameStart()
})
squareThree.addEventListener('click', ()=>{
    gameStart()
})
squareFour.addEventListener('click', ()=>{
    gameStart()
})
squareFive.addEventListener('click', ()=>{
    gameStart()
})
squareSix.addEventListener('click', ()=>{
    gameStart()
})
squareSeven.addEventListener('click', ()=>{
    gameStart()
})
squareEight.addEventListener('click', ()=>{
    gameStart()
})
squareNine.addEventListener('click', ()=>{
    gameStart()
})

function gameStart(){

    gameLive = true;
    playerOneTurn = true;
    squareOne.addEventListener('click', ()=>{
        gameBoardEditor(1)
        if(gameBoard[0] === 'x'){
            squareOne.innerHTML = "X"
        }else{
            squareOne.innerHTML = "O"
        }
    })
    squareTwo.addEventListener('click', ()=>{
        gameBoardEditor(2)
        if(gameBoard[1] === 'x'){
            squareTwo.innerHTML = "X"
        }else{
            squareTwo.innerHTML = "O"
        }
    })
    squareThree.addEventListener('click', ()=>{
        gameBoardEditor(3)
        if(gameBoard[2] === 'x'){
            squareThree.innerHTML = "X"
        }else{
            squareThree.innerHTML = "O"
        }
    })
    squareFour.addEventListener('click', ()=>{
        gameBoardEditor(4)
        if(gameBoard[3] === 'x'){
            squareFour.innerHTML = "X"
        }else{
            squareFour.innerHTML = "O"
        }
    })
    squareFive.addEventListener('click', ()=>{
        gameBoardEditor(5)
        if(gameBoard[4] === 'x'){
            squareFive.innerHTML = "X"
        }else{
            squareFive.innerHTML = "O"
        }
    })
    squareSix.addEventListener('click', ()=>{
        gameBoardEditor(6)
        if(gameBoard[5] === 'x'){
            squareSix.innerHTML = "X"
        }else{
            squareSix.innerHTML = "O"
        }
    })
    squareSeven.addEventListener('click', ()=>{
        gameBoardEditor(7)
        if(gameBoard[6] === 'x'){
            squareSeven.innerHTML = "X"
        }else{
            squareSeven.innerHTML = "O"
        }
    })
    squareEight.addEventListener('click', ()=>{
        gameBoardEditor(8)
        if(gameBoard[7] === 'x'){
            squareEight.innerHTML = "X"
        }else{
            squareEight.innerHTML = "O"
        }
    })
    squareNine.addEventListener('click', ()=>{
        gameBoardEditor(9)
        if(gameBoard[8] === 'x'){
            squareNine.innerHTML = "X"
        }else{
            squareNine.innerHTML = "O"
        }
    })
    

}
