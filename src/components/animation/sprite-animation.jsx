import React from 'react';
import './SpriteAnimation.css'; 

const SpriteAnimation = () => {
  return (
    <div className="sprite-container">
      <div className="sprite" style={{ backgroundImage: `url('/assets/sprite-sheet.png')` }}></div>
    </div>
  );
};

export default SpriteAnimation;
