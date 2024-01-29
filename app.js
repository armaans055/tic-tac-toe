let gameBoard = [
    1 , 2 , 3,
    4 , 5 , 6,
    7 , 8 , 9
]
let openSpots = [
    false, false, false,
    false, false, false,
    false, false, false
]
let totalGameTurns = 0;
let gameLive = false;
// let playerOneTurn = true;
// let playerTwoTurn = false;
let playerOneScor = 0;
let playerTwoScor = 0;
const header = document.querySelector('h1')
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
// function gameOverCheck(){
//     if(gameLive = false){
//         clearBoard
//     }
// }
// function clearBoard(){
//     gameBoard = [
//         1 , 2 , 3,
//         4 , 5 , 6,
//         7 , 8 , 9
//     ]
//     squareOne.innerHTML = ""
//     squareTwo.innerHTML = ""
//     squareThree.innerHTML = ""
//     squareFour.innerHTML = ""
//     squareFive.innerHTML = ""
//     squareSix.innerHTML = ""
//     squareSeven.innerHTML = ""
//     squareEight.innerHTML = ""
//     squareNine.innerHTML = ""
    
// }
function checkIfSquareIsOpen(x){
    if(openSpots[x-1] === true){
        totalGameTurns -= 1
        header.innerHTML = "error square is full"
    }else{
        header.innerHTML = "Tic Tac Toe"
    }
}
function incrementTotalGameTurns(){
    totalGameTurns++
}
function horizontalWinCheck(){
    if(gameBoard[0] === 'x' && gameBoard[1] === 'x' && gameBoard[2] === 'x'){
        gameLive = false;
        console.log('Horizontal Win Player One')
    }else if(gameBoard[3] === 'x' && gameBoard[4] === 'x' && gameBoard[5] === 'x'){
        gameLive = false;
        console.log('Horizontal Win Player One')
    }else if(gameBoard[6] === 'x' && gameBoard[7] === 'x' && gameBoard[8] === 'x'){
        gameLive = false;
        console.log('Horizontal Win Player One')
    }else if(gameBoard[0] === 'o' && gameBoard[1] === 'o' && gameBoard[2] === 'o'){
        gameLive = false;
        console.log('Horizontal Win Player Two')
    }else if(gameBoard[3] === 'o' && gameBoard[4] === 'o' && gameBoard[5] === 'o'){
        gameLive = false;
        console.log('Horizontal Win Player Two')
    }else if(gameBoard[6] === 'o' && gameBoard[7] === 'o' && gameBoard[8] === 'o'){
        gameLive = false;
        console.log('Horizontal Win Player Two')
    }
}
function verticalWinCheck(){
    if(gameBoard[0] === 'x' && gameBoard[3] === 'x' && gameBoard[6] === 'x'){
        gameLive = false;
        console.log('Vertical Win Player One')

    }else if(gameBoard[1] === 'x' && gameBoard[4] === 'x' && gameBoard[7] === 'x'){
        gameLive = false;
        console.log('Vertical Win Player One')

    }else if(gameBoard[2] === 'x' && gameBoard[5] === 'x' && gameBoard[8] === 'x'){
        gameLive = false;
        console.log('Vertical Win Player One')

    }else if(gameBoard[0] === 'o' && gameBoard[3] === 'o' && gameBoard[6] === 'o'){
        gameLive = false;
        console.log('Vertical Win Player Two')
    }else if(gameBoard[1] === 'o' && gameBoard[4] === 'o' && gameBoard[7] === 'o'){
        gameLive = false;
        console.log('Vertical Win Player Two')
    }else if(gameBoard[2] === 'o' && gameBoard[5] === 'o' && gameBoard[8] === 'o'){
        gameLive = false;
        console.log('Vertical Win Player Two')
}

}
function diagonalWinCheck(){
    if(gameBoard[0] === 'x' && gameBoard[4] === 'x' && gameBoard[8] === 'x'){
        gameLive = false;
        console.log('diag Win Player One')
    } else if(gameBoard[2] === 'x' && gameBoard[4] === 'x' && gameBoard[6] === 'x'){
        gameLive = false;
        console.log('diag Win Player One')
    } else if(gameBoard[0] === 'o' && gameBoard[4] === 'o' && gameBoard[8] === 'o'){
        gameLive = false;
        console.log('diagnol Win Player two')
    } else if(gameBoard[2] === 'o' && gameBoard[4] === 'o' && gameBoard[6] === 'o'){
        gameLive = false;
        console.log('diagnol Win Player two')
    } 
}
function gameBoardEditor(x){
    if(totalGameTurns === 0 || totalGameTurns === 2 || totalGameTurns === 4 || totalGameTurns === 6 || totalGameTurns === 8){
        gameBoard[x-1] = 'x'
        openSpots[x-1] = true;
        return
    }
    if(totalGameTurns === 1 || totalGameTurns === 3 || totalGameTurns === 5 || totalGameTurns === 7 || totalGameTurns === 9){
        gameBoard[x-1] = 'o'
        openSpots[x-1] = true;
        return
    }

}
// squareOne.addEventListener('click', ()=>{
//     gameStart()
// })
// squareTwo.addEventListener('click', ()=>{
//     gameStart()
// })
// squareThree.addEventListener('click', ()=>{
//     gameStart()
// })
// squareFour.addEventListener('click', ()=>{
//     gameStart()
// })
// squareFive.addEventListener('click', ()=>{
//     gameStart()
// })
// squareSix.addEventListener('click', ()=>{
//     gameStart()
// })
// squareSeven.addEventListener('click', ()=>{
//     gameStart()
// })
// squareEight.addEventListener('click', ()=>{
//     gameStart()
// })
// squareNine.addEventListener('click', ()=>{
//     gameStart()
// })

// function gameStart(){
// while(gameLive === true){
    
    squareOne.addEventListener('click', ()=>{
        checkIfSquareIsOpen(1)
        gameBoardEditor(1)
        // gameOverCheck()
        if(gameBoard[0] === 'x'){
            squareOne.innerHTML = "X"
        }else{
            squareOne.innerHTML = "O"
        }
        horizontalWinCheck()
        verticalWinCheck()
        diagonalWinCheck()
        incrementTotalGameTurns()

    })
    squareTwo.addEventListener('click', ()=>{
        checkIfSquareIsOpen(2)
        gameBoardEditor(2)
        
        // gameOverCheck()
        if(gameBoard[1] === 'x'){
            squareTwo.innerHTML = "X"
        }else{
            squareTwo.innerHTML = "O"
        }
        horizontalWinCheck()
        verticalWinCheck()
        diagonalWinCheck()
        incrementTotalGameTurns()

    })
    squareThree.addEventListener('click', ()=>{
        checkIfSquareIsOpen(3)
        gameBoardEditor(3)

        // gameOverCheck()
        if(gameBoard[2] === 'x'){
            squareThree.innerHTML = "X"
        }else{
            squareThree.innerHTML = "O"
        }
        horizontalWinCheck()
        verticalWinCheck()
        diagonalWinCheck()
        incrementTotalGameTurns()

    })
    squareFour.addEventListener('click', ()=>{
        checkIfSquareIsOpen(4)
        gameBoardEditor(4)

        // gameOverCheck()
        if(gameBoard[3] === 'x'){
            squareFour.innerHTML = "X"
        }else{
            squareFour.innerHTML = "O"
        }
        horizontalWinCheck()
        verticalWinCheck()
        diagonalWinCheck()
        incrementTotalGameTurns()

    })
    squareFive.addEventListener('click', ()=>{
        checkIfSquareIsOpen(5)
        gameBoardEditor(5)

        // gameOverCheck()
        if(gameBoard[4] === 'x'){
            squareFive.innerHTML = "X"
        }else{
            squareFive.innerHTML = "O"
        }
        horizontalWinCheck()
        verticalWinCheck()
        diagonalWinCheck()
        incrementTotalGameTurns()

    })
    squareSix.addEventListener('click', ()=>{
        checkIfSquareIsOpen(6)
        gameBoardEditor(6)

        // gameOverCheck()
        if(gameBoard[5] === 'x'){
            squareSix.innerHTML = "X"
        }else{
            squareSix.innerHTML = "O"
        }
        horizontalWinCheck()
        verticalWinCheck()
        diagonalWinCheck()
        incrementTotalGameTurns()

    })
    squareSeven.addEventListener('click', ()=>{
        checkIfSquareIsOpen(7)
        gameBoardEditor(7)

        // gameOverCheck()
        if(gameBoard[6] === 'x'){
            squareSeven.innerHTML = "X"
        }else{
            squareSeven.innerHTML = "O"
        }
        horizontalWinCheck()
        verticalWinCheck()
        diagonalWinCheck()
        incrementTotalGameTurns()

    })
    squareEight.addEventListener('click', ()=>{
        checkIfSquareIsOpen(8)
        gameBoardEditor(8)

        // gameOverCheck()
        if(gameBoard[7] === 'x'){
            squareEight.innerHTML = "X"
        }else{
            squareEight.innerHTML = "O"
        }
        horizontalWinCheck()
        verticalWinCheck()
        diagonalWinCheck()
        incrementTotalGameTurns()
    })
    squareNine.addEventListener('click', ()=>{
        checkIfSquareIsOpen(9)
        gameBoardEditor(9)

        // gameOverCheck()
        if(gameBoard[8] === 'x'){
            squareNine.innerHTML = "X"
        }else{
            squareNine.innerHTML = "O"
        }
        horizontalWinCheck()
        verticalWinCheck()
        diagonalWinCheck()
        incrementTotalGameTurns()
    })
// }
    

// }
