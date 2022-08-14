import React from "react";
import Square from "./Square";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
    };
  }

  tick() {}

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { sizeBoard } = this.props;
    return (
      <div className="container">
        <h1>{sizeBoard}</h1>
        <div className="board">
          {[...Array(sizeBoard).keys()].map((index) => (
            <div className="board-row">
              {[...Array(sizeBoard).keys()].map(() => (
                <Square key={index} />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Board;
