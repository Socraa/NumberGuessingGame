const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * max) + min;
console.log(answer);

let attempt = 10;

function heart(){
    const hearts = document.querySelector('#hearts');
    hearts.innerHTML ='';
    for (let i = 0; i < attempt; i++){
        hearts.innerHTML += '<span class="heartss">♡</span>';
    }
}
heart();

const guessBtn = document.querySelector('#guessBtn');

guessBtn.onclick = function(){

    const guessInput = document.querySelector('#guessInput').value; //You need to put this inside for it to work
    const modalBg = document.querySelector('#modalBg');
    const modalH1 = document.querySelector('#modalH1');
    const playAgain = document.querySelector('#playAgain');
    const closee = document.querySelector('#closee');


    if(attempt >0){
        if(guessInput == answer){
            modalH1.textContent = "You Are Correct!!";
            playAgain.style.display = 'inline';
            closee.style.display = 'none';
            modalBg.style.display = 'block';
        }else if (answer > guessInput && guessInput > 0){
            attempt--;
            modalH1.textContent = "Too Low!!";
            modalBg.style.display = 'block';
        }else if(answer < guessInput){
            attempt--;
            modalH1.textContent = "Too High!!";
            modalBg.style.display = 'block';
        }else{
            modalH1.textContent = "Pick a Number :)";
            modalBg.style.display = 'block';
        }
        heart();
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

const closee = document.querySelector('#closee');
const modalBg = document.querySelector('#modalBg');

closee.onclick = function(){
    modalBg.style.display = 'none';
}