import React from "react";
import { STATUS } from "../ultils/constant";
import Square from "./Square";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      boardSize: this.props.sizeBoard,
      boardData: new Array(this.props.sizeBoard * this.props.sizeBoard).fill(0),
      currentTurn: STATUS.player_1,
    };
    this.handleCheck = this.handleCheck.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.sizeBoard !== this.props.sizeBoard) {
      this.setState({
        boardSize: this.props.sizeBoard,
        boardData: new Array(this.props.sizeBoard * this.props.sizeBoard).fill(
          0
        ),
      });
    }
  }

  handleCheck(index) {
    console.log("🚀 ~ file: Board.js ~ line 20 ~ Board ~ tick ~ index", index);
    const { boardData, currentTurn } = this.state;
    const newBoardData = [...boardData];
    newBoardData[index] = currentTurn;

    this.setState({
      boardData: newBoardData,
      currentTurn: this.switchTurns(currentTurn),
    });
  }

  switchTurns(currentTurn) {
    return 3 - currentTurn;
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { sizeBoard, children } = this.props;
    return (
      <div className="container-board">
        <div className="board">
          {[...Array(sizeBoard).keys()].map((index1) => (
            <div className="board-row">
              {[...Array(sizeBoard).keys()].map((index2) => {
                const index = index1 * sizeBoard + index2;
                return (
                  <Square
                    key={index}
                    index={index}
                    handleCheck={this.handleCheck}
                    status={this.state.boardData[index]}
                    size={sizeBoard <= 10 ? 300 / sizeBoard : 600 / sizeBoard}
                  />
                );
              })}
            </div>
          ))}
          {children}
        </div>
        <div className="text-winner">Player 1 win!</div>
      </div>
    );
  }
}

export default Board;
