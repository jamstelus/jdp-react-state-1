import React, { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [boardSize, setBoardSize] = useState(3);
  const [board, setBoard] = useState(
    Array(boardSize)
      .fill(null)
      .map(() => Array(boardSize).fill(null))
  );
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const renderBoard = () => {
    return (
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className="cell"
                onClick={() => handleCellClick(rowIndex, cellIndex)}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const handleCellClick = (rowIndex, cellIndex) => {
    if (winner || board[rowIndex][cellIndex]) {
      return;
    }

    const newBoard = board.map((row) => [...row]);
    newBoard[rowIndex][cellIndex] = player;
    setBoard(newBoard);

    const newPlayer = player === "X" ? "O" : "X";
    setPlayer(newPlayer);

    const newWinner = calculateWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    }
  };

  const calculateWinner = (board) => {
    const lines = getWinningLines(board);

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        board[a[0]][a[1]] &&
        board[a[0]][a[1]] === board[b[0]][b[1]] &&
        board[a[0]][a[1]] === board[c[0]][c[1]]
      ) {
        return board[a[0]][a[1]];
      }
    }

    return null;
  };

  const getWinningLines = (board) => {
    const lines = [];

    // horizontal lines
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize - 2; j++) {
        lines.push([
          [i, j],
          [i, j + 1],
          [i, j + 2],
        ]);
      }
    }

    // vertical lines
    for (let i = 0; i < boardSize - 2; i++) {
      for (let j = 0; j < boardSize; j++) {
        lines.push([
          [i, j],
          [i + 1, j],
          [i + 2, j],
        ]);
      }
    }

    // diagonal lines (top-left to bottom-right)
    for (let i = 0; i < boardSize - 2; i++) {
      for (let j = 0; j < boardSize - 2; j++) {
        lines.push([
          [i, j],
          [i + 1, j + 1],
          [i + 2, j + 2],
        ]);
      }
    }

    // diagonal lines (bottom-left to top-right)
    for (let i = 2; i < boardSize; i++) {
      for (let j = 0; j < boardSize - 2; j++) {
        lines.push([
          [i, j],
          [i - 1, j + 1],
          [i - 2, j + 2],
        ]);
      }
    }

    return lines;
  };

  const handleSizeChange = (event) => {
    const newSize = parseInt(event.target.value);
    setBoardSize(newSize);
    setBoard(
      Array(newSize)
        .fill(null)
        .map(() => Array(newSize).fill(null))
    );
    setWinner(null);
    setPlayer("X");
  };

  return (
    <div className="tic-tac-toe">
      <div className="game-header">
        <h1>Tic Tac Toe</h1>
        <label>
          Board Size:
          <input
            type="number"
            min="3"
            max="100"
            value={boardSize}
            onChange={handleSizeChange}
          />
        </label>
      </div>
      {winner ? (
        <div className="winner-message">{winner} wins!</div>
      ) : (
        <div className="player-message">{player}'s turn</div>
      )}
      {renderBoard()}
    </div>
  );
};

export default TicTacToe;
