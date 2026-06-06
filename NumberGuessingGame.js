const targetNumber = Math.floor(Math.random()*100)+1;
let lives = 5;

const input = document.querySelector("input")
const box = document.querySelector(".box")
const livescount = document.querySelector("#Lives-Count")

box.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {
        input.value += e.target.innerText;
    }
})

const clr = document.querySelector("#clear")

 clr.addEventListener('click', () =>{
    input.value = "";
 })

 const submit = document.getElementById("submit")

 submit.addEventListener('click',() => {
    const guess = Number(input.value);
    input.value = "";
    
    if (guess === targetNumber) {
        alert("Correct! You Won!")
        location.reload();
    }else{
        lives--;
        livescount.innerText = lives;
        
        if (lives > 0) {
            const hint = guess > targetNumber ? "Too High!" : "Too Low!";
            alert(hint)
        }else{
            alert(`💀 Game Over! The number was ${targetNumber}`);
            location.reload();
        }
    }

    
 });

