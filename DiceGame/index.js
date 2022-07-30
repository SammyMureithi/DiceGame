let player1Scores = 0
let player2Scores = 0
let player1Turn = true
const player1Dice = document.getElementById( "player1Dice" )
const player2Dice = document.getElementById( "player2Dice" )
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById( "player2Scoreboard" )
const message = document.getElementById( "message" )
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById( "resetBtn" )

rollBtn.addEventListener( "click", function () {
    const randomNumber = Math.floor( Math.random() * 6 )
    if ( player1Turn ) {
        player1Scores += randomNumber
        player1Scoreboard.textContent=player1Scores
        player1Dice.textContent = randomNumber
        player1Turn = false
        if ( player1Scores >= 20 && player2Scores<20 ) {
            message.textContent = "Player 1 won😏"
            rollBtn.style.display = "none"
            resetBtn.style.display="block"
        }
        else if ( player1Scores < 20 && player2Scores < 20 ) {
            message.textContent="Gaming ..."
        }
        else {
            message.textContent="Game over"
        }
    }
    else {
        player2Scores += randomNumber
        player2Scoreboard.textContent=player2Scores
        player2Dice.textContent = randomNumber
        player1Turn = true
        if ( player2Scores >= 20  && player1Scores<20) {
            message.textContent = "Player 2 won😏"
            rollBtn.style.display = "none"
            resetBtn.style.display="block"
        }
        else if ( player1Scores < 20 && player2Scores < 20 ) {
            message.textContent="Gaming ..."
        }
        else {
            message.textContent="Game over"
        }
    }
} )
resetBtn.addEventListener( "click", function () {
    player1Scores = 0
    player2Scores=0
    message.textContent = "Start Playing"
    player1Scoreboard.textContent = "0"
    player2Scoreboard.textContent ="0"
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    rollBtn.style.display = "block"
    resetBtn.style.display = "none"
    
    
})
