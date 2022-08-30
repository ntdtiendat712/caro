import React from "react";
import { STATUS } from "../ultils/constant";

class Square extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.status !== this.props.status;
  }

  render() {
    const { status, index, handleCheck } = this.props;
    return (
      <div
        className={`square square${
          status === STATUS.player_1
            ? "-check"
            : status === STATUS.player_2
            ? "-cross"
            : "-blank"
        }`}
        onClick={() => (status === STATUS.none ? handleCheck(index) : null)}
      >
        {status === STATUS.player_1
          ? "O"
          : status === STATUS.player_2
          ? "X"
          : null}
      </div>
    );
  }
}

export default Square;
