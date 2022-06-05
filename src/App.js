import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Views from './views';


function App(){
  return (
    <div className="App">
      <Router>
        <Views />
      </Router>
    </div>
  )
}

export default App;
