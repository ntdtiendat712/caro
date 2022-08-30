import React from "react";
import { BigHead } from "@bigheads/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
const data = {
  accessory: ["none", "roundGlasses", "tinyGlasses", "shades"],
  body: ["chest", "breasts"],
  circleColor: ["blue"],
  clothing: ["naked", "shirt", "dressShirt", "vneck", "tankTop", "dress"],
  clothingColor: ["white", "blue", "black", "green", "red"],
  eyebrows: ["raised", "leftLowered", "serious", "angry", "concerned"],
  eyes: [
    "normal",
    "leftTwitch",
    "happy",
    "content",
    "squint",
    "simple",
    "dizzy",
    "wink",
    "heart",
  ],
  facialHair: ["none", "none2", "none3", "stubble", "mediumBeard"],
  graphic: ["none", "redwood", "gatsby", "vue", "react", "graphQL"],
  hair: [
    "none",
    "long",
    "bun",
    "short",
    "pixie",
    "balding",
    "buzz",
    "afro",
    "bob",
  ],
  hairColor: ["blonde", "orange", "black", "white", "brown", "blue", "pink"],
  hat: ["none", "none2", "none3", "none4", "none5", "beanie", "turban"],
  hatColor: ["white", "blue", "black", "green", "red"],
  lashes: ["true", "false"],
  lipColor: ["red", "purple", "pink", "turqoise", "green"],
  mask: [0, 1],
  faceMask: [0, 1],
  mouth: ["grin", "sad", "openSmile", "lips", "open", "serious", "tongue"],
  skinTone: ["light", "yellow", "brown", "dark", "red", "black"],
};
const getRandomValue = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};
const getRandomAvatarProps = () => {
  const avatarProps = {};
  Object.keys(data).forEach((key) => {
    avatarProps[key] = getRandomValue(data[key]);
  });
  return avatarProps;
};

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarProps: getRandomAvatarProps(),
    };
  }
  render() {
    const { name, index } = this.props;
    return (
      <div className="player-info">
        <div className="avatar">
          <BigHead {...this.state.avatarProps} faceMask={false} />
          <div
            className="avatar-button"
            onClick={() =>
              this.setState({
                avatarProps: getRandomAvatarProps(),
              })
            }
          >
            <FontAwesomeIcon size="1x" icon={faShuffle} />
          </div>
        </div>
        <div className="player-name">{name}</div>
      </div>
    );
  }
}

export default Player;
