var p1 = document.querySelectorAll("button")[0];
var p2 = document.querySelectorAll("button")[1];
var numInput = document.querySelector("input");
var resetButton = document.getElementById("reset");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var p = document.querySelector("p span");
p1score = 0;
p2score = 0;
gameOver = false;
winningScore = 5;



p1.addEventListener("click", function () {
    if (!gameOver) {
        p1score++;

        if (p1score === winningScore) {
            gameOver = true;
            p1Display.classList.add("winner");
        }
        p1Display.textContent = p1score;
    }

});

p2.addEventListener("click", function () {
    if (!gameOver) {
        p2score++;

        if (p2score === winningScore) {
            gameOver = true;
            p2Display.classList.add("winner");
        }
        p2Display.textContent = p2score;
    }
});


resetButton.addEventListener("click", function () {
    reset();
});

function reset() {
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1score = 0;
    p2score = 0;
    gameOver = false;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");

}

numInput.addEventListener("change", function () {
    p.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
});
