//computer will have a random generated input that picks rock paper or scissor
//a player will be able to input a string (using promp()) that inputs a value os rock paper or scissor, it is case-insensitive
//the game consist of game of 5 rounds (meaning if player win up to 3, they are the winnder. yay)
//declare winner at the end using alert


//computer randomly chooses his weapon
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

const playerSelection = () => {
    const input = prompt('Select Rock Paper or Scissor');
    //will process input here so it will accept any case of string
    //if input is invalid, will return an alert and order them to prompt again.
};

