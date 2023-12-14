import React from "react";

const Player = ({ position }) => {
  const playerStyle = {
    width: '100px',
    height: '30px',
    // backgroundColor: 'blue',
    position: 'absolute',
    bottom: '10px',
    left: `${position}px`
  };

  return <img src="game-3/keranjang.png" style={playerStyle} />;
};

export default Player;