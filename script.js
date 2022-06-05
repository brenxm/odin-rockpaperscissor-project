//computer will have a random generated input that picks rock paper or scissor
//a player will be able to input a string (using promp()) that inputs a value os rock paper or scissor, it is case-insensitive
//the game consist of game of 5 rounds (meaning if player win up to 3, they are the winnder. yay)
//declare winner at the end using alert


//computer randomly chooses his weapon


//global variables

let playerScore = 0;
let computerScore = 0;

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
        case 'rock' :
        return 'rock';

        case 'paper' :
        return  'paper';

        case 'scissor' :
        return 'scissor';

        default:
        const input = prompt('I said choose your weapon wisely, my dood')
        return playerSelection(input);
    }
};


//singleplay will accept the playerselection weapon and computer weapon
    //will return a winner

function singlePlay(playerSelection, computerSelection){

    //annoucner
    console.log(`AI contender chooses ${computerSelection}`);
    console.log(`and our very own player chooses ${playerSelection}`);

    let battleField = `${playerSelection} vs ${computerSelection}`;
    //rock - paper
        //2 wins
    //scissor - paper
        //1 wins
    //rock - scissor
        //1 wins

    //choose the weapon that won
        //take the variable name of that weapon and return as winner
    switch(battleField){
        case 'rock vs paper' || 'paper vs rock':
        playerSelection === 'paper' ? playerScore++ : computerScore++;
        playerSelection === 'paper' ? alert('Our player won! (CROWD loses their shit)') : alert('computer won! (CROWDS boo)');

        break;

        case 'scissor vs paper' || 'paper vs scissor' :
        playerSelection === 'scissor' ? playerScore++ : computerScore++;
        playerSelection === 'scissor' ? alert('Our player won! (CROWD loses their shit)') : alert('computer won! (CROWDS boo)');
        break;

        case 'rock vs scissor' || 'scissor vs rock':
        playerSelection === 'rock' ? playerScore++ : computerScore++;
        playerSelection === 'rock' ? alert('Our player won! (CROWD loses their shit)') : alert('computer won! (CROWDS boo)');
        break;

        default:
        alert('Izza tie! lets play again!!')
    }
    game(playerScore, computerScore);
}


function game(pScore, cScore){
    if(pScore = 3){
        console.log(pScore);
        return alert('our player has won the GAME!! (CROWDS bang their heads and loses their shit!!)');
    }

    else if(cScore = 3){
        return alert('AI won (CROWDS boooo loudly)');
    }

    singlePlay(playerSelection(), computerPlay());
}

//make game decider flash card

singlePlay(playerSelection(), computerPlay());