import React from "react";
import { LIST_BOARD_SIZE } from "../ultils/constant";

class SelectSizeBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { sizeBoard, handleChangeBoardSize } = this.props;
    return (
      <div className="container">
        <select
          defaultValue={sizeBoard}
          onChange={(e) => {
            handleChangeBoardSize(e.currentTarget.value);
          }}
        >
          {LIST_BOARD_SIZE.map((size) => (
            <option key={size} value={size}>{`${size}x${size}`}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default SelectSizeBoard;
