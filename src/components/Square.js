import React from "react";

class Square extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { check, handleCheck } = this.props;
    return (
      <div className={`square ${check ? "check" : "cross"}`}>
        {check ? "X" : "O"}
      </div>
    );
  }
}

export default Square;
