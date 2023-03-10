import React, { useEffect, useRef, useState } from 'react';
import AppleLogo from '../assets/applePixels.png';
import useInterval from '../hooks/useInterval';
import Feed from '../assets/Feed.svg';
import Arrow from './icons/Arrow';
import LeftArrow from './icons/LeftArrow';
import RightArrow from './icons/RightArrow';

const canvasX = 1000;
const canvasY = 1000;
const initialSnake = [
  [4, 10],
  [4, 10],
];
const initialApple = [14, 10];
const scale = 50;
const timeDelay = 100;

const SnakeGame = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [snake, setSnake] = useState(initialSnake);
  const [apple, setApple] = useState(initialApple);
  const [direction, setDirection] = useState([0, -1]);
  const [delay, setDelay] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useInterval(() => runGame(), delay);

  useEffect(() => {
    let fruit = document.getElementById('fruit') as HTMLCanvasElement;
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.setTransform(scale, 0, 0, scale, 0, 0);
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.fillStyle = '#a3d001';
        snake.forEach(([x, y]) => ctx.fillRect(x, y, 1, 1));
        ctx.drawImage(fruit, apple[0], apple[1], 1, 1);
      }
    }
  }, [snake, apple, gameOver]);

  function handleSetScore() {
    if (score > Number(localStorage.getItem('snakeScore'))) {
      localStorage.setItem('snakeScore', JSON.stringify(score));
    }
  }

  function play() {
    setSnake(initialSnake);
    setApple(initialApple);
    setDirection([1, 0]);
    setDelay(timeDelay);
    setScore(0);
    setGameOver(false);
  }
  function checkCollision(head: number[]) {
    for (let i = 0; i < snake.length; i++) {
      if (head[i] < 0 || head[i] * scale >= canvasX) return true;
    }
    for (const s of snake) {
      if (head[0] === s[0] && head[1] === s[1]) return true;
    }
    return false;
  }
  function appleAte(newSnake: number[][]) {
    let coord = apple.map(() => Math.floor((Math.random() * canvasX) / scale));
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = coord;
      setScore(score + 1);
      setApple(newApple);
      return true;
    }
    return false;
  }

  function runGame() {
    const newSnake = [...snake];
    const newSnakeHead = [
      newSnake[0][0] + direction[0],
      newSnake[0][1] + direction[1],
    ];
    newSnake.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) {
      setDelay(null);
      setGameOver(true);
      handleSetScore();
    }
    if (!appleAte(newSnake)) {
      newSnake.pop();
    }
    setSnake(newSnake);
  }
  function changeDirection(e: React.KeyboardEvent<HTMLDivElement>) {
    switch (e.key) {
      case 'ArrowLeft':
        setDirection([-1, 0]);
        break;
      case 'ArrowUp':
        setDirection([0, -1]);
        break;
      case 'ArrowRight':
        setDirection([1, 0]);
        break;
      case 'ArrowDown':
        setDirection([0, 1]);
        break;
    }
  }

  return (
    <>
      <div
        className="game-container game-container-bg absolute w-[500px] h-[500px] p-5 border border-border-main grid grid-cols-2"
        onKeyDown={(e) => changeDirection(e)}
      >
        <div className="bg-fade-top"></div>
        <div className="bg-fade-bottom"></div>
        <div>
          <div>
            <img id="fruit" src={Feed} alt="fruit" width="30" />
            <canvas
              className="playArea"
              ref={canvasRef}
              width={`${canvasX}px`}
              height={`${canvasY}px`}
            />
            {gameOver && (
              <div className="gameOver absolute top-1/2 left-6 bg-[#011627D6] w-[39.5%] text-cyan-green">
                Game Over
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-between z-20">
          <div className="border border-border-main p-4 rounded-lg text-white bg-[#01142330]">
            <h2>
              // use keyboard <br /> // arrows to play
            </h2>
            <div className="flex flex-col justify-center items-center gap-2">
              <span>
                <Arrow className="rotate-0" />
              </span>
              <div className="flex">
                <LeftArrow />
                <Arrow className="rotate-180" />
                <RightArrow />
                {/* <Arrow className="rotate-90" /> */}
              </div>
            </div>
          </div>
          <div className="scoreBox text-text-main">
            <h2>Score: {score}</h2>
            <h2>High Score: {localStorage.getItem('snakeScore')}</h2>
          </div>

          <button
            onClick={play}
            className={`p-3 bg-yellow rounded-lg font-semibold`}
          >
            Play
          </button>
        </div>
      </div>
    </>
  );
};

export default SnakeGame;
