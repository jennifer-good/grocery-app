import React from 'react';
import './SpriteAnimation.css'; 
import cootieSprite from '../assets/cootie-sprite.png';

const SpriteAnimation = () => {
  return (
    <div className="sprite-container">
      <div className="sprite" style={{ backgroundImage: `url(${cootieSprite})` }}></div>
    </div>
  );
};

export default SpriteAnimation;
