let player = ['X', 'O'];

let position = [];
let positionParent = document.getElementById('board');
for(let i = 0; i < positionParent.children.length; i++){
    cell = positionParent.children[i];
    cell.addEventListener('click', takePosition);
    position.push(cell.id);
}

console.log(position);

let counter = 1;

function counterPlus(){
    counter += 1;
    checkWinner();
    playerTurn();
}

function playerTurn(){
    if(counter%2 == 1){
        document.getElementById("instructions").innerHTML = `Player 1's turn`;
    }else{
        document.getElementById("instructions").innerHTML = `Player 2's turn`;
    }
}

winner = '';

function checkWinner(){
    if((pos1.innerHTML == 'X' && pos2.innerHTML == 'X' && pos3.innerHTML == 'X')
    || (pos4.innerHTML == 'X' && pos5.innerHTML == 'X' && pos6.innerHTML == 'X')
    || (pos7.innerHTML == 'X' && pos8.innerHTML == 'X' && pos9.innerHTML == 'X')
    || (pos1.innerHTML == 'X' && pos4.innerHTML == 'X' && pos7.innerHTML == 'X')
    || (pos2.innerHTML == 'X' && pos5.innerHTML == 'X' && pos8.innerHTML == 'X')
    || (pos3.innerHTML == 'X' && pos6.innerHTML == 'X' && pos9.innerHTML == 'X')
    || (pos1.innerHTML == 'X' && pos5.innerHTML == 'X' && pos9.innerHTML == 'X')
    || (pos3.innerHTML == 'X' && pos5.innerHTML == 'X' && pos7.innerHTML == 'X')
    ){
        alert('player 1 win!');
        winner = 'X';
        location.reload();
    }

    if((pos1.innerHTML == 'O' && pos2.innerHTML == 'O' && pos3.innerHTML == 'O')
    || (pos4.innerHTML == 'O' && pos5.innerHTML == 'O' && pos6.innerHTML == 'O')
    || (pos7.innerHTML == 'O' && pos8.innerHTML == 'O' && pos9.innerHTML == 'O')
    || (pos1.innerHTML == 'O' && pos4.innerHTML == 'O' && pos7.innerHTML == 'O')
    || (pos2.innerHTML == 'O' && pos5.innerHTML == 'O' && pos8.innerHTML == 'O')
    || (pos3.innerHTML == 'O' && pos6.innerHTML == 'O' && pos9.innerHTML == 'O')
    || (pos1.innerHTML == 'O' && pos5.innerHTML == 'O' && pos9.innerHTML == 'O')
    || (pos3.innerHTML == 'O' && pos5.innerHTML == 'O' && pos7.innerHTML == 'O')
    ){
        alert('Player 2 win!');
        winner = 'O';
        location.reload();
    }
}

function takePosition(){
    let pos = document.getElementById(this.id);
    
    if(pos.innerHTML == '' ){
        if(counter < 10){
            
            if(counter%2 == 1){
                pos.innerHTML = player[0];
            }else{
                pos.innerHTML = player[1];
            }
            
            counterPlus();
        }
        if(counter >= 10 && winner === ''){
            
            alert('Tie! No winner!');
            location.reload();
        }
        
    }else{
        alert('choose a free cell!');
        playerTurn();
    }
}

playerTurn();