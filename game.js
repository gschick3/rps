function getComputerChoice() {
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random()*3)];
}

function compareHands(player, computer) {
    player = player.toLowerCase();
    console.log(player, computer);
    options = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'            
    }
    if (player === computer) console.log("It's a tie");
    else if (options[player] === computer) console.log("Player wins!");
    else console.log("Player loses :(");
}
