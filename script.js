'use strict';
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const player1Name = document.querySelector('#name--0');
const player2Name = document.querySelector('#name--1');

const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const current1 = document.querySelector('#current--0');
const current2 = document.querySelector('#current--1');
const rulesBtn = document.querySelector('.btn--rules');
const rules = document.querySelector('.game_rules');
const rulesBackBtn = document.querySelector('.game_rules_hide_btn');

let diceNumber = 0;
let player1Score = 0;
let player2Score = 0;
let current1Score = 0;
let current2Score = 0;
dice.style.display = 'none';

const switchUser = function () {
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

const rollDice = function () {
  dice.style.display = 'block';

  diceNumber = Math.trunc(Math.random() * 6 + 1);
  dice.setAttribute('src', `./img/dice-${diceNumber}.png`);
};

rollBtn.addEventListener('click', () => {
  rollDice();
  if (player1.classList.contains('player--active')) {
    if (diceNumber === 1) {
      switchUser();
      current1.textContent = 0;
      current1Score = 0;
    } else {
      player1Score += diceNumber;
      current1Score += diceNumber;
      current1.textContent = current1Score;
    }
  } else if (player2.classList.contains('player--active')) {
    if (diceNumber === 1) {
      switchUser();
      current2.textContent = 0;
      current2Score = 0;
    } else {
      player2Score += diceNumber;
      current2Score += diceNumber;

      current2.textContent = current2Score;
    }
  }
});

holdBtn.addEventListener('click', () => {
  if (player1.classList.contains('player--active')) {
    if (player1Score >= 100) {
      player1Name.textContent = 'PLAYER 1 WINS!';
      player1.classList.add('player--winner');
      player1.classList.remove('player--active');

      dice.style.display = 'none';
      rollBtn.style.display = 'none';
      holdBtn.style.display = 'none';
    }
    score1.textContent = player1Score;
    current1.textContent = 0;
    current1Score = 0;
  }
  if (player2.classList.contains('player--active')) {
    if (player2Score >= 100) {
      player2Name.textContent = 'PLAYER 2 WINS!';
      player2.classList.add('player--winner');
      player2.classList.remove('player--active');

      dice.style.display = 'none';
      rollBtn.style.display = 'none';
      holdBtn.style.display = 'none';
    }
    current2Score = 0;
    score2.textContent = player2Score;
    current2.textContent = 0;
  }
  switchUser();
});

newBtn.addEventListener('click', () => {
  diceNumber = 5;
  player1Score = 0;
  player2Score = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
  player1Name.textContent = 'PLAYER 1';
  player2Name.textContent = 'PLAYER 2';
  rollBtn.style.display = 'block';
  holdBtn.style.display = 'block';
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
});

//Rules
rulesBtn.addEventListener('click', () => {
  console.log('clicked');
  if (rules.classList.contains('game_rules')) {
    rules.classList.remove('game_rules');
    rules.classList.add('show');
    rulesBtn.style.display = 'none';
  }
});
rulesBackBtn.addEventListener('click', () => {
  if (rules.classList.contains('show')) {
    rules.classList.remove('show');
    rules.classList.add('game_rules');
    rulesBtn.style.display = 'block';
  }
});
