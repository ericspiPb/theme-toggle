import React, { useState } from 'react';

import './theme.css';

export default function ThemeSwitch() {
  const [toggle, setToggle] = useState(false);

  return (
    <label className="switch">
      <input type="checkbox"/>
      <span className="slider"></span>
    </label>
  )
}
