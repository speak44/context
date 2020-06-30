import React from 'react';
import ContextPage from './pages/ContextPage'
import HocPage from './pages/HocPage'
import LiftCycelPage from './pages/LiftCycelPage'
function App() {
  return (
    <div className="App">
      <div>
        <ContextPage/>
        <HocPage/>
        <LiftCycelPage/>
      </div>
    </div>
  );
}

export default App;
