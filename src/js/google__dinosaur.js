class GoogleDinosaur {
  constructor() {
    document.querySelector(
      '.google-dinosaur'
    ).innerHTML = `<div class="game__container--dino">
        <div class="dino"></div>
        </div>
        `;
    this.dino = document.querySelector('.dino');
    this.gameArea = document.querySelector('.game__container--dino');
    this.gameContainer = document.querySelector('.google-dinosaur__container');
    this.gameOver = false;
    this.isJumping = false;
    this.renderTitle();
    this.gameModalStart();
  }

  gameModalStart() {
    const modalHtml = `
    <div class="dinosaur__modal show">
      <p class="dinosaur__lose">Гугл динозаврик!</p>
      <button class="dinosaur__restart button">Почати гру!</button>
    </div>
    `;
    this.gameArea.insertAdjacentHTML('beforeend', modalHtml);

    const modal = this.gameArea.querySelector('.dinosaur__modal');

    const retryButton = this.gameArea.querySelector('.dinosaur__restart');
    retryButton.addEventListener('click', () => {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.remove();
      }, 250);
      this.init();
    });
  }

  init() {
    document.addEventListener('keydown', event => {
      if (event.code === 'Space' && !this.isJumping && !this.gameOver) {
        this.jump();
      }
    });
    document.addEventListener('mousedown', event => {
      if (!this.isJumping && !this.gameOver) {
        this.jump();
      }
    });
    this.renderObstacles();
    this.checkCollision();
  }

  renderTitle() {
    const gameTitle = document.createElement('h2');
    gameTitle.classList.add('title');
    gameTitle.textContent = 'Google динозавр';
    this.gameContainer.prepend(gameTitle);
  }

  jump() {
    this.isJumping = true;
    this.dino.classList.add('jump');

    setTimeout(() => {
      this.isJumping = false;
      this.dino.classList.remove('jump');
    }, 500);
  }

  checkCollision() {
    const gameProcess = () => {
      if (this.gameOver === true) return;
      const obstacle = this.gameArea.querySelector('.cactus');
      const obstacleRect = obstacle.getBoundingClientRect();
      const dinoRect = this.dino.getBoundingClientRect();
      if (
        dinoRect.right > obstacleRect.left &&
        dinoRect.left < obstacleRect.right &&
        dinoRect.bottom > obstacleRect.top
      ) {
        this.endGame(obstacle);
        return;
      }

      requestAnimationFrame(gameProcess);
    };
    requestAnimationFrame(gameProcess);
  }

  renderObstacles() {
    const obstacle = document.createElement('div');
    obstacle.classList.add('cactus');
    obstacle.style.height = this.randomHeight();
    this.gameArea.appendChild(obstacle);

    const animationHandler = () => {
      obstacle.removeEventListener('animationiteration', animationHandler);
      this.gameArea.removeChild(obstacle);
      if (!this.gameOver) {
        this.renderObstacles();
      }
    };
    obstacle.addEventListener('animationiteration', animationHandler);
  }

  randomHeight() {
    return `${Math.random() * (70 - 40) + 40}px`;
  }

  endGame(obstacle) {
    obstacle.style.animationPlayState = 'paused';
    this.gameOver = true;
    this.gameOverModal();
  }

  gameOverModal() {
    const modalHtml = `
    <div class="dinosaur__modal">
      <p class="dinosaur__lose">Ви програли!</p>
      <button class="dinosaur__restart button">Спробувати знову</button>
    </div>
    `;
    this.gameArea.insertAdjacentHTML('beforeend', modalHtml);

    const modal = this.gameArea.querySelector('.dinosaur__modal');
    setTimeout(() => {
      modal.classList.add('show');
    }, 10);

    const retryButton = this.gameArea.querySelector('.dinosaur__restart');
    retryButton.addEventListener('click', () => this.restartGame());
  }

  restartGame() {
    this.gameArea.querySelector('.dinosaur__modal').remove();
    this.gameArea.querySelector('.cactus').remove();
    this.gameOver = false;
    this.renderObstacles();
    this.checkCollision();
  }
}

export const dinosaurInit = () => {
  new GoogleDinosaur();
};
