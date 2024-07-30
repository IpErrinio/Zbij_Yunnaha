document.addEventListener("DOMContentLoaded", () => {
  const holes = document.querySelectorAll(".hole");
  const scoreBoard = document.getElementById("score");
  const startButton = document.getElementById("startButton");
  const endButton = document.getElementById("endButton");

  let score = 0;
  let currentHole;
  let gameInterval;
  let YunnahTimeout;

  // Start
  function startGame() {
    score = 0;
    scoreBoard.textContent = `Wynik: ${score}`;
    startButton.disabled = true;
    endButton.disabled = false;
    gameInterval = setInterval(popYunnah, 1000);
  }

  // Pop up
  function popYunnah() {
    if (currentHole) {
      currentHole.classList.remove("active");
    }
    const randomHole = Math.floor(Math.random() * holes.length);
    currentHole = holes[randomHole];
    currentHole.classList.add("active");

    // Remove Yunnah
    YunnahTimeout = setTimeout(() => {
      currentHole.classList.remove("active");
    }, 750);
  }

  // Klikniecie
  function hitYunnah(event) {
    if (!event.target.classList.contains("active")) return;
    score++;
    scoreBoard.textContent = `Wynik: ${score}`;
    event.target.classList.remove("active");
  }

  //Koniec
  function endGame() {
    clearInterval(gameInterval);
    clearTimeout(YunnahTimeout);
    if (currentHole) currentHole.classList.remove("active");
    startButton.disabled = false;
    endButton.disabled = true;
    alert(`Koniec gry! Twój wynik to: ${score}`);
  }

  // Smieci
  startButton.addEventListener("click", startGame);
  endButton.addEventListener("click", endGame);
  holes.forEach((hole) => hole.addEventListener("click", hitYunnah));
});
