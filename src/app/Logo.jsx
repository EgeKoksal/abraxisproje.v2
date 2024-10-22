import React from 'react';
import logo from './pictures/Abraxis-ai-dash.png'; // Logonun dosya yolu

function Brand() {
  return (
    <div className="brand">
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
}

export default Brand;