const adviceNumber = document.getElementById('advId');
const adviceText = document.getElementById('advText');
const button = document.getElementById('btn');

button.addEventListener('click', function() {
    haveAdvice();   
});

async function haveAdvice() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();

        adviceNumber.textContent = data.slip.id;
        adviceText.textContent = data.slip.advice;
    } catch (error) {
        alert(`Error ${error}`);
    }
}
