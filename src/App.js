import React from 'react';
import './App.css';
import ReorderIcon from '@material-ui/icons/Reorder';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
            <div className="logo">DevChallenge</div>
           <div className="menu">
             <a href='#'>Home</a>
             <a href='#' >Features</a>
             <a href='#' >Contact</a>
            </div>   
            <div className="menu-mobile">
              <ReorderIcon style={{ fontSize: 40 }}/></div>     
        </div>
        <div className="content">
          <div className="left">
            <h1 className="title">
              Create amazing graphics
            </h1>
              <span className="subtitle">
                  Colaborate and create beautiful grapichs with your team
              </span>
                  <span className="btn">Start now</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
