function getComputerChoice() {
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random()*3)];
}

function compareHands(player, computer) {
    player = player.toLowerCase();
    
    options = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'            
    }

    document.querySelector('.computer').textContent = `${player.toUpperCase()} vs ${computer.toUpperCase()}`;

    const result = document.querySelector('.result');
    if (player === computer) result.textContent = "It's a tie";
    else if (options[player] === computer) result.textContent = "You win!";
    else result.textContent = "You lose :(";
}


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => compareHands(button.id, getComputerChoice()))
});