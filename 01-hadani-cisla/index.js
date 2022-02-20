const randomNumber = Math.floor(Math.random()*100);
let guessCounter = 1;

document.addEventListener('DOMContentLoaded', () => {
   const tipInput = document.getElementById('tipInput');
   tipInput.addEventListener('change', evalInput);
});

const evalInput = () => {
    const tipInput = document.getElementById('tipInput');

    const answerSelect = document.getElementById('answerSelect');
    answerSelect.classList.remove('hidden');

    const counter = document.getElementById('counter');

    const value = tipInput.value;

    if(value > randomNumber){
        answerSelect.value = 'down';
        answerSelect.classList.remove('correct');
        guessCounter++;
    } else if(value < randomNumber){
        answerSelect.value = 'up'
        answerSelect.classList.remove('correct');
        guessCounter++;
    } else {
        answerSelect.value = 'correct';
        answerSelect.classList.add('correct');
        const reloadButton = document.getElementById('reloadButton');
        reloadButton.classList.remove('hidden');
    }
    counter.innerText = guessCounter.toString();
}