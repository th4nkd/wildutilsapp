import React, { useState, useEffect } from 'react';
import './App.css';
import Inventory from './components/Inventory';

function App() {
  return (
    <div className="App bg-primary text-textPrimary">
      <Inventory />
    </div>
  );
}

export default App;
