import React from "react";
import Board from "./components/Board";
import "./App.css";
import SelectSizeBoard from "./components/SelectSizeBoard";
import Player from "./components/Player";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizeBoard: 10,
      namePlayers: ["Player 1", "Player 2"],
    };
    this.handleChangeBoardSize = this.handleChangeBoardSize.bind(this);
  }

  handleChangeBoardSize(size) {
    if (size.toString() !== this.state.sizeBoard.toString()) {
      this.setState({
        sizeBoard: parseInt(size),
      });
    }
  }

  componentDidMount() {}

  componentWillUnmount() {}

  changeNamePlayer(name, index) {
    const newNamePlayers = [...this.state.namePlayers];
    newNamePlayers[index] = name;
  }

  render() {
    const { namePlayers } = this.state;
    return (
      <div className="fullpage">
        <h1 className="title">Basic Caro</h1>
        <SelectSizeBoard
          sizeBoard={this.state.sizeBoard}
          handleChangeBoardSize={this.handleChangeBoardSize}
        />
        <Board sizeBoard={this.state.sizeBoard}>
          {namePlayers.map((name, index) => (
            <Player
              name={name}
              index={index}
              onChange={(name) => this.changeNamePlayer(name, index)}
            />
          ))}
        </Board>
      </div>
    );
  }
}

export default App;
