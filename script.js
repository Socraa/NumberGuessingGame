const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * max) + min;
console.log(answer);

let attempt = 10;



const guessBtn = document.querySelector('#guessBtn');

guessBtn.onclick = function(){

    const guessInput = document.querySelector('#guessInput').value; //You need to put this inside for it to work

    if(attempt >0){
        if(guessInput == answer){
            alert('You Are Correct');
            
        }else if (answer > guessInput && guessInput > 0){
            attempt--;
            alert('Too Low');
        }else if(answer < guessInput){
            attempt--;
            alert('Too High');
        }else{
            alert('Pick a Number!!');
        }
    }else{
        alert('Game Over');
    }
}



function howToPlay(){
    const modal = document.querySelector('#modal');

    modal.style.display = 'block';
}

const closeBtn = document.querySelector('#closeBtn');
const modal = document.querySelector('#modal');

closeBtn.onclick = function(){
    modal.style.display = 'none';
}