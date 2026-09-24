const board = document.querySelector('#game-board');

const snake = [
    { x: 10, y: 5 },
    { x: 9, y: 5 },
    { x: 8, y: 5 }
];

const createBoard = () => {
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 20; x++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.x = x;
            cell.dataset.y = y;
            board.appendChild(cell);
        }
    }
};

const renderSnake = () => {
    snake.forEach((segment, index) => {
        const cell = board.querySelector(
            `[data-x="${segment.x}"][data-y="${segment.y}"]`
        );

        cell.classList.add('snake');

        if (index === 0) {
            cell.classList.add('head');
        }
    });
};

createBoard();
renderSnake();
