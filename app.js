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
let gameLive = true;

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
const resetButtonArea = document.querySelector('.restart-button')
const gameStart = document.querySelector('.gameStart')




function playerOneScor(){
    header.innerHTML = "Player 1 Wins!"

}
function playerTwoScor(){
    header.innerHTML = "Player 2 Wins!"

}
function createResetButton(){
    gameLive = false;
    

    resetButton = document.createElement('button')
    let innerText = document.createTextNode("Restart")
    resetButton.className += "resetbutton";
    resetButton.appendChild(innerText)
    resetButtonArea.appendChild(resetButton)
    resetButton.addEventListener('click', ()=>{
        
        resetBoard()
        resetButtonArea.removeChild(resetButton)
        header.innerHTML = "Tic Tac Toe"
        totalGameTurns = 0;
    })
}
function resetBoard(){
    for(i = 0; i < 9 ; i ++){
        gameBoard[i] = i + 1
    }
        squareOne.innerHTML = ""
        squareTwo.innerHTML = ""
        squareThree.innerHTML = ""
        squareFour.innerHTML = ""
        squareFive.innerHTML = ""
        squareSix.innerHTML = ""
        squareSeven.innerHTML = ""
        squareEight.innerHTML = ""
        squareNine.innerHTML = ""
        openSpots = [
            false, false, false,
            false, false, false,
            false, false, false
        ]
        gameLive = true;
}
function checkIfSquareIsOpen(x){
    if(openSpots[x-1] === true){
        totalGameTurns -= 1
        header.innerHTML = "Square is full"
    }else{
        header.innerHTML = "Tic Tac Toe"
    }
}
function incrementTotalGameTurns(){
    totalGameTurns++
}
function drawCheck(){
    if(typeof gameBoard[0] === 'string' && typeof gameBoard[1] === 'string'  && typeof gameBoard[2] === 'string' && typeof gameBoard[3] === 'string' && typeof gameBoard[4] === 'string' && typeof gameBoard[5] === 'string' && typeof gameBoard[6] === 'string' && typeof gameBoard[7] === 'string' && typeof gameBoard[8] === 'string'){
        if(header.innerHTML === "Player 1 Wins!" || header.innerHTML === "Player 2 Wins!"){
            return
        }else{
            header.innerHTML = 'Draw!'
            createResetButton()
        }
        
    }
}
function horizontalWinCheck(){
    if(gameBoard[0] === 'x' && gameBoard[1] === 'x' && gameBoard[2] === 'x'){
        gameLive = false;
        playerOneScor()
        createResetButton()

    }else if(gameBoard[3] === 'x' && gameBoard[4] === 'x' && gameBoard[5] === 'x'){
        gameLive = false;
        playerOneScor()
        createResetButton()

    }else if(gameBoard[6] === 'x' && gameBoard[7] === 'x' && gameBoard[8] === 'x'){
        gameLive = false;
        playerOneScor()
        createResetButton()

    }else if(gameBoard[0] === 'o' && gameBoard[1] === 'o' && gameBoard[2] === 'o'){
        gameLive = false;
        playerTwoScor()
        createResetButton()

    }else if(gameBoard[3] === 'o' && gameBoard[4] === 'o' && gameBoard[5] === 'o'){
        gameLive = false;
        playerTwoScor()
        createResetButton()

    }else if(gameBoard[6] === 'o' && gameBoard[7] === 'o' && gameBoard[8] === 'o'){
        gameLive = false;
        playerTwoScor()
        createResetButton()

    }
}
function verticalWinCheck(){
    if(gameBoard[0] === 'x' && gameBoard[3] === 'x' && gameBoard[6] === 'x'){
        gameLive = false;
        playerOneScor()
        createResetButton()


    }else if(gameBoard[1] === 'x' && gameBoard[4] === 'x' && gameBoard[7] === 'x'){
        gameLive = false;
        playerOneScor()
        createResetButton()


    }else if(gameBoard[2] === 'x' && gameBoard[5] === 'x' && gameBoard[8] === 'x'){
        gameLive = false;
        playerOneScor()
        createResetButton()


    }else if(gameBoard[0] === 'o' && gameBoard[3] === 'o' && gameBoard[6] === 'o'){
        gameLive = false;
        playerTwoScor()
        createResetButton()

    }else if(gameBoard[1] === 'o' && gameBoard[4] === 'o' && gameBoard[7] === 'o'){
        gameLive = false;
        playerTwoScor()
        createResetButton()

    }else if(gameBoard[2] === 'o' && gameBoard[5] === 'o' && gameBoard[8] === 'o'){
        gameLive = false;
        playerTwoScor()
        createResetButton()

}

}
function diagonalWinCheck(){
    if(gameBoard[0] === 'x' && gameBoard[4] === 'x' && gameBoard[8] === 'x'){
        gameLive = false;
        playerOneScor()
        createResetButton()
        
    } else if(gameBoard[2] === 'x' && gameBoard[4] === 'x' && gameBoard[6] === 'x'){
        gameLive = false;
        playerOneScor()
        createResetButton()
        
    } else if(gameBoard[0] === 'o' && gameBoard[4] === 'o' && gameBoard[8] === 'o'){
        gameLive = false;
        playerTwoScor()
        createResetButton()
        
    } else if(gameBoard[2] === 'o' && gameBoard[4] === 'o' && gameBoard[6] === 'o'){
        gameLive = false;
        playerTwoScor()
        createResetButton()

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



    squareOne.addEventListener('click', ()=>{
        checkIfSquareIsOpen(1)
        gameBoardEditor(1)
        if(gameLive === false){
            squareOne.innerHTML = squareOne.innerHTML
            resetButtonArea.removeChild(resetButton)
        }
        if(gameLive === true){ 
            if(gameBoard[0] === 'x'){
                squareOne.innerHTML = "X"
            }else{
                squareOne.innerHTML = "O"
            }
        }
        horizontalWinCheck()
        verticalWinCheck()
        diagonalWinCheck()
        drawCheck()
        incrementTotalGameTurns()

    })
    squareTwo.addEventListener('click', ()=>{
        checkIfSquareIsOpen(2)
        gameBoardEditor(2)
        
        if(gameLive === false){
            squareTwo.innerHTML = squareTwo.innerHTML
            resetButtonArea.removeChild(resetButton)
        }
        if(gameLive === true){  
            if(gameBoard[1] === 'x'){
                squareTwo.innerHTML = "X"
            }else{
                squareTwo.innerHTML = "O"
            }
        }
        horizontalWinCheck()
        verticalWinCheck()
        diagonalWinCheck()
        drawCheck()
        incrementTotalGameTurns()

    })
    squareThree.addEventListener('click', ()=>{
        checkIfSquareIsOpen(3)
        gameBoardEditor(3)

        if(gameLive === false){
            squareThree.innerHTML = squareThree.innerHTML
            resetButtonArea.removeChild(resetButton)
        }
        if(gameLive === true){ 
            if(gameBoard[2] === 'x'){
                squareThree.innerHTML = "X"
            }else{
                squareThree.innerHTML = "O"
            }
        }
        horizontalWinCheck()
        verticalWinCheck()
        diagonalWinCheck()
        drawCheck()
        incrementTotalGameTurns()

    })
    squareFour.addEventListener('click', ()=>{
        checkIfSquareIsOpen(4)
        gameBoardEditor(4)

        
        if(gameLive === false){
            squareFour.innerHTML = squareFour.innerHTML
            resetButtonArea.removeChild(resetButton)
        }
        if(gameLive === true){ 
            if(gameBoard[3] === 'x'){
                squareFour.innerHTML = "X"
            }else{
                squareFour.innerHTML = "O"
            }
        }
        horizontalWinCheck()
        verticalWinCheck()
        diagonalWinCheck()
        drawCheck()
        incrementTotalGameTurns()

    })
    squareFive.addEventListener('click', ()=>{
        checkIfSquareIsOpen(5)
        gameBoardEditor(5)

        
        if(gameLive === false){
            squareFive.innerHTML = squareFive.innerHTML
            resetButtonArea.removeChild(resetButton)
        }
        if(gameLive === true){ 
            if(gameBoard[4] === 'x'){
                squareFive.innerHTML = "X"
            }else{
                squareFive.innerHTML = "O"
            }
        }
        horizontalWinCheck()
        verticalWinCheck()
        diagonalWinCheck()
        drawCheck()
        incrementTotalGameTurns()

    })
    squareSix.addEventListener('click', ()=>{
        checkIfSquareIsOpen(6)
        gameBoardEditor(6)

        
        if(gameLive === false){
            squareSix.innerHTML = squareSix.innerHTML
            resetButtonArea.removeChild(resetButton)
        }
        if(gameLive === true){ 
            if(gameBoard[5] === 'x'){
                squareSix.innerHTML = "X"
            }else{
                squareSix.innerHTML = "O"
            }
        }
        horizontalWinCheck()
        verticalWinCheck()
        diagonalWinCheck()
        drawCheck()
        incrementTotalGameTurns()

    })
    squareSeven.addEventListener('click', ()=>{
        checkIfSquareIsOpen(7)
        gameBoardEditor(7)

        
        if(gameLive === false){
            squareSeven.innerHTML = squareSeven.innerHTML
            resetButtonArea.removeChild(resetButton)
        }
        if(gameLive === true){ 
            if(gameBoard[6] === 'x'){
                squareSeven.innerHTML = "X"
            }else{
                squareSeven.innerHTML = "O"
            }
        }
        horizontalWinCheck()
        verticalWinCheck()
        diagonalWinCheck()
        drawCheck()
        incrementTotalGameTurns()

    })
    squareEight.addEventListener('click', ()=>{
        checkIfSquareIsOpen(8)
        gameBoardEditor(8)

        
        if(gameLive === false){
            squareEight.innerHTML = squareEight.innerHTML
            resetButtonArea.removeChild(resetButton)
        }
        if(gameLive === true){ 
            if(gameBoard[7] === 'x'){
                squareEight.innerHTML = "X"
            }else{
                squareEight.innerHTML = "O"
            }
        }
        horizontalWinCheck()
        verticalWinCheck()
        diagonalWinCheck()
        drawCheck()
        incrementTotalGameTurns()
    })
    squareNine.addEventListener('click', ()=>{
        checkIfSquareIsOpen(9)
        gameBoardEditor(9)

        
        if(gameLive === false){
            squareNine.innerHTML = squareNine.innerHTML
            resetButtonArea.removeChild(resetButton)
        }
        if(gameLive === true){ 
            if(gameBoard[8] === 'x'){
                squareNine.innerHTML = "X"
            }else{
                squareNine.innerHTML = "O"
            }
        }
        horizontalWinCheck()
        verticalWinCheck()
        diagonalWinCheck()
        drawCheck()
        incrementTotalGameTurns()
    })





// squareOne.addEventListener('click', checkIfGameIsLive())
// squareTwo.addEventListener('click', checkIfGameIsLive())
// squareThree.addEventListener('click', checkIfGameIsLive())
// squareFour.addEventListener('click', checkIfGameIsLive())
// squareFive.addEventListener('click', checkIfGameIsLive())
// squareSix.addEventListener('click', checkIfGameIsLive())
// squareSeven.addEventListener('click', checkIfGameIsLive())
// squareEight.addEventListener('click', checkIfGameIsLive())
// squareNine.addEventListener('click', checkIfGameIsLive())
