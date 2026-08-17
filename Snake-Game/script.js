const board = document.querySelector(".board");
const startBtn = document.querySelector(".btn-start");
const modal = document.querySelector(".modal");
const startModal = document.querySelector(".start-game");
const gameOverModal = document.querySelector(".game-over");
const restartButton = document.querySelector(".btn-restart");

const highScoreElem = document.querySelector("#high-score");
const scoreElem = document.querySelector("#score");
const timeElem = document.querySelector("#time");

const blockHeight = 30;
const blockWidth = 30;

let highScore = localStorage.getItem("highScore") || 0;
let score = 0;
let elapsedTime = 0;

highScoreElem.innerText = highScore;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

let intervalId = null;
let timerIntervalId = null;
let food = {
  x: 0,
  y: 0,
};
const blocks = [];
let snake = [
  {
    x: 1,
    y: 3,
  },
];
generateFood();

let direction = "down";

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    blocks[`${row}-${col}`] = block;
  }
}

function generateFood() {
  do {
    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    };
  } while (
    snake.some((segment) => segment.x === food.x && segment.y === food.y)
  );
}

function render() {
  let head = null;
  let ateFood = false;
  blocks[`${food.x}-${food.y}`].classList.add("food");
  if (direction === "left") {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  } else if (direction === "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  } else if (direction === "down") {
    head = { x: snake[0].x + 1, y: snake[0].y };
  } else if (direction === "up") {
    head = { x: snake[0].x - 1, y: snake[0].y };
  }

  //End collision logic
  if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
    clearInterval(intervalId);
    clearInterval(timerIntervalId);

    intervalId = null;
    timerIntervalId = null;

    modal.style.display = "flex";
    startModal.style.display = "none";
    gameOverModal.style.display = "flex";
    return;
  }
  //self collision logic
  const hitSelf = snake.some(
    (segment) => segment.x === head.x && segment.y === head.y,
  );
  if (hitSelf) {
    clearInterval(intervalId);
    clearInterval(timerIntervalId);

    intervalId = null;
    timerIntervalId = null;

    modal.style.display = "flex";
    startModal.style.display = "none";
    gameOverModal.style.display = "flex";
    return;
  }
  //Food consume logic
  if (head.x === food.x && head.y === food.y) {
    blocks[`${food.x}-${food.y}`].classList.remove("food");
    generateFood();
    blocks[`${food.x}-${food.y}`].classList.add("food");
    ateFood = true;
    score += 10;
    scoreElem.innerText = score;

    if (score > highScore) {
      highScore = score;
      localStorage.setItem("highScore", highScore.toString());
    }
  }

  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
  });

  snake.unshift(head);
  if (!ateFood) {
    snake.pop();
  }

  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.add("fill");
  });
}

startBtn.addEventListener("click", () => {
  modal.style.display = "none";
  startGame();
});

restartButton.addEventListener("click", restartGame);

function restartGame() {
  clearInterval(intervalId);
  clearInterval(timerIntervalId);

  intervalId = null;
  timerIntervalId = null;

  blocks[`${food.x}-${food.y}`].classList.remove("food");
  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
  });

  score = 0;
  elapsedTime = 0;
  timeElem.innerText = "00:00";
  highScoreElem.innerText = highScore;
  scoreElem.innerText = score;
  modal.style.display = "none";
  direction = "down";
  snake = [{ x: 1, y: 3 }];
  generateFood();
  startGame();
}

function startGame() {
  if (intervalId !== null) {
    return;
  }
  intervalId = setInterval(() => {
    render();
  }, 300);
  timerIntervalId = setInterval(() => {
    elapsedTime++;
    const min = Math.floor(elapsedTime / 60);
    const sec = elapsedTime % 60;
    timeElem.innerText = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }, 1000);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" && direction !== "down") {
    direction = "up";
  } else if (event.key === "ArrowDown" && direction !== "up") {
    direction = "down";
  } else if (event.key === "ArrowRight" && direction !== "left") {
    direction = "right";
  } else if (event.key === "ArrowLeft" && direction !== "right") {
    direction = "left";
  }
});
