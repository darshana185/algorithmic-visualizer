import React from 'react';
import logo from './logo.svg';


function Header(){
    return(
        <header className="App-header">
        <div className="header">
          <img src={logo} className="App-logo" alt="logo" />
          <svg xmlns="http://www.w3.org/2000/svg" class="curve-container__curve curve-three" viewBox="0 0 1440 68" enable-background="new 0 0 1440 68"><path d="m1622.3 1937.7c0 0-410.7 169.1-913.4 75.5-502.7-93.6-977.7 56.3-977.7 56.3v440h1891.1v-571.8" fill="#282c34" transform="translate(0-1977)"></path></svg>
        </div>
        <br/>
        <br/>
        <p>
          Learn with <code>Algorithmic Visualizer</code> and see how algortihms work.
        </p> 
      </header>
    );
}

export default Header;