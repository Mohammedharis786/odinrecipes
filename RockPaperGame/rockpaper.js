const Computertext = document.querySelector('#computer');
const Playertext = document.querySelector('#player');
const Resulttext = document.querySelector('#result');
const choisetext = document.querySelectorAll('.choise')

let computer;
let player;
let result;
choisetext.forEach(button => button.addEventListener('click', () => {
    player = button.textContent
    computermashine();
    Playertext.textContent = `Player: ${player}`;
    Computertext.textContent = `computer: ${computer}`;
    Resulttext.textContent = checkWinner();


}));



function computermashine() {
    const com_value = Math.floor(Math.random() * 3 )+ 1;


    switch (com_value) {
        case 1:
            computer = 'Rock';
            break;
        case 2:
            computer = 'Paper';
            break;
        case 3:
            computer = 'Scissor';
            break;
    }


}

function checkWinner() {
    if (player == computer) {
        return 'This game is Tie!';
    }

  else  if (computer == 'Rock') {
        return (player == 'Paper') ? 'youwin' : 'you lose!';
    }
   else if (computer == 'Paper'){
        return (player == 'Scissor') ? 'youwin' : 'you lose!';
    }
   else if(computer == 'Scissor'){
        return (player == 'Rock') ? 'youwin' : 'you lose!';
    }


}




