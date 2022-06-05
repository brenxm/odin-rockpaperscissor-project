
//global variables

let playerScore = 0;
let computerScore = 0;

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSOR = 'scissor';

function computerPlay() {

    let rng = Math.random();

    console.log(rng);
    if (rng <= 0.33) {
        return 'rock';
    }

    else if (rng > 0.33 && rng < 0.66) {
        return 'paper';
    }

    return 'scissor'
}

const playerSelection = (str = prompt('Choose your weapon, Rock Paper or Scissor')) => {
    switch(str.toLowerCase()){
        case ROCK :
        return ROCK;

        case PAPER :
        return  PAPER;

        case SCISSOR :
        return SCISSOR ;

        default:
        const input = prompt('I said choose your weapon wisely, my dood')
        return playerSelection(input);
    }
};


//singleplay will accept the playerselection weapon and computer weapon
    //will return a winner

function singlePlay(playerSelection, computerSelection){

    let battleField = `${playerSelection} vs ${computerSelection}`;

    switch(battleField){
        case `${ROCK} vs ${PAPER}` :
        case `${PAPER} vs ${ROCK}` :
        playerSelection === ROCK ? playResult('player'): playResult('computer');
        break;

        case `${SCISSOR} vs ${PAPER}`  :
        case `${PAPER} vs ${SCISSOR}` :
        playerSelection === SCISSOR ? playResult('player'): playResult('computer');
        break;

        case `${ROCK} vs ${SCISSOR}` :
        case `${SCISSOR} vs ${ROCK}` :
        playerSelection === ROCK ? playResult('player'): playResult('computer');
        break;

        default:
        alert('Izza tie! lets play again!!')
        break;
    }
    game(playerScore, computerScore);
}

function playResult(winner){
    if(winner == 'player'){
        playerScore++;
    }

    else if(winner == 'computer'){
        computerScore++
    }

    alert(`${winner} won this match. \b The current score is ${playerScore} - ${computerScore}`);
}


function game(pScore, cScore){
    if(pScore == 3){
        console.log(pScore);
        return alert('our player has won the GAME!! (CROWDS bang their heads and loses their shit!!)');
    }

    else if(cScore == 3){
        return alert('AI won (CROWDS boooo loudly)');
    }

    else{
        singlePlay(playerSelection(), computerPlay());
    }

}

//this will initiate the game
game();