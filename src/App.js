import React from "react";
import Board from "./components/Board";
import "./App.css";
import SelectSizeBoard from "./components/SelectSizeBoard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizeBoard: 10,
    };
    this.handleChangeBoardSize = this.handleChangeBoardSize.bind(this);
  }

  handleChangeBoardSize(size) {
    console.log(
      "🚀 ~ file: App.js ~ line 16 ~ App ~ handleChangeBoardSize ~ size",
      size
    );
    if (size.toString() !== this.state.sizeBoard.toString()) {
      this.setState({
        sizeBoard: parseInt(size),
      });
    }
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="container">
        <SelectSizeBoard
          sizeBoard={this.state.sizeBoard}
          handleChangeBoardSize={this.handleChangeBoardSize}
        />
        <Board sizeBoard={this.state.sizeBoard} />
      </div>
    );
  }
}

export default App;
