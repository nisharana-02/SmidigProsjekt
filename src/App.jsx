import React from 'react'
import './css/app.css';

const App = ({children}) =>{
  return (
    <div className="app">
      {children}
    </div>
  );
}

export default App;
