import React, { Component } from "react";
import Board from "./board";
import "./game.scss";
import TicSvg from "../../../content/assets/play/tic-tac-toe.svg";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xIsNext: true,
      stepNumber: 0,
      history: [{ squares: Array(9).fill(null) }]
    };
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);
    if (winner || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat({
        squares: squares
      }),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? (
        "Go to #" + move
      ) : (
        <h4 style={{ margin: "1rem", color: "white" }}>
          <b>{"Start the Game"}</b>
        </h4>
      );
      return (
        <li key={move}>
          <a
            className="links"
            onClick={() => {
              this.jumpTo(move);
            }}
          >
            {desc}
          </a>
        </li>
      );
    });
    let status;
    if (winner) {
      status = "Winner is " + winner;
    } else {
      status = "Next Player is " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <section className="TTTwrapper">
        <div style={{ margin: "0 auto" }}>
          <h3>tic-tac-toe</h3>
          <div style={{ filter: "invert(1)", paddingBottom: "2rem" }}>
            <TicSvg width="15%" height="auto" />
          </div>
        </div>
        <div className="instructions">
          <pre style={{ padding: ".5rem" }}>
            <code>
              you can go back to a move by clicking on the history on the right
              {"\n"}
              click away{"\n"}
            </code>
          </pre>
        </div>

        <div className="game">
          <div className="game-board">
            <Board
              onClick={i => this.handleClick(i)}
              squares={current.squares}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ul>{moves}</ul>
          </div>
        </div>
      </section>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
