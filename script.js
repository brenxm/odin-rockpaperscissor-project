
//global variables

let playerScore = 0;
let computerScore = 0;

const ROCK = 'fa-solid fa-hand-back-fist';
const PAPER = 'fa-solid fa-hand';
const SCISSOR = 'fa-solid fa-hand-scissors';
let playing = false;

const announcer = document.querySelector('.announcer');
const scoreBoard = document.querySelector('.score-board');
const aiSquare = document.querySelector('#ai-square');

function computerPlay() {

    let rng = Math.random();

    console.log(rng);
    if (rng <= 0.33) {
        aiSquare.classList.value = ROCK;
        return ROCK;
    }

    else if (rng > 0.33 && rng < 0.66) {
        aiSquare.classList.value = PAPER;
        return PAPER;
    }

    aiSquare.classList.value = SCISSOR;
    return SCISSOR
}
const cards = document.querySelectorAll('#card');

cards.forEach(card => card.addEventListener('click', game))

function test(){
    console.log(this.classList.value);
}


function singlePlay(playerSelection, computerSelection,clicked){


    let battleField = `${playerSelection} vs ${computerSelection}`;

    switch(battleField){
        case `${ROCK} vs ${PAPER}` :
        case `${PAPER} vs ${ROCK}` :
        playerSelection === ROCK ? playResult('computer',clicked): playResult('player',clicked);
        break;

        case `${SCISSOR} vs ${PAPER}`  :
        case `${PAPER} vs ${SCISSOR}` :
        playerSelection === SCISSOR ? playResult('player',clicked): playResult('computer',clicked);
        break;

        case `${ROCK} vs ${SCISSOR}` :
        case `${SCISSOR} vs ${ROCK}` :
        playerSelection === ROCK ? playResult('player',clicked): playResult('computer',clicked);
        break;

        default:
        announcer.textContent = 'Izza tie! lets play again!!';cards.forEach(x => x.setAttribute('style','background-color: none;'));
    aiSquare.setAttribute('style','background-color: none;')
        break;
    }
}

function playResult(winner,clicked){
    cards.forEach(x => x.setAttribute('style','background-color: none;'));
    aiSquare.setAttribute('style','background-color: none;')

    if(winner == 'player'){
        clicked.setAttribute('style','background-color: lightgreen;');
        aiSquare.setAttribute('style','background-color: red;');
        playerScore++;
    }

    else if (winner == 'computer') {
        clicked.setAttribute('style', 'background-color: red;');
        aiSquare.setAttribute('style', 'background-color: lightgreen;');
        computerScore++
    }

    scoreBoard.textContent = `Player score:${playerScore} Computer score:${computerScore}`

    if(playerScore == 5 || computerScore == 5){
        announcer.classList.value = 'announcer-won';
        announcer.textContent = `${winner} won the Series!`
        playing = false;
        return;
    }

    announcer.textContent = `${winner} won this match!`;
}


function game(e){
    if(!playing){
        announcer.classList.value = 'announcer';
        playing = true;
        playerScore = 0;
        computerScore = 0;
        scoreBoard.textContent = `Player score:${playerScore} Computer score:${computerScore}`
        singlePlay(this.classList.value,computerPlay(),e.target)
        return;
    }

    singlePlay(this.classList.value,computerPlay(),e.target);
    
}

