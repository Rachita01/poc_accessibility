import React, { useState } from 'react';
import './ToggleSwitch.scss'; // Import CSS for custom styling

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div className='toggleclass'>
        <label className='labelclass'>Safe Mode</label>
    <div className={`custom-toggle-switch-container ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
      <div className="circle"></div>
      <div className="text-left">ON</div>
      <div className="text-right">OFF</div>
    </div>
    </div>
  );
};

export default ToggleSwitch;
