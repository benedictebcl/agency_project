import React from "react";
import ThemeChoice from './ThemeChoice';
import { Link } from 'react-router-dom';


function ToolBar(props) {
    return (
      <div>
          <nav>
                <Link to="/" className="mr-3"> Home</Link>
                <Link to="/about" className="mr-3">About</Link>
                <Link to="/works">Works</Link>
            </nav>


          <h1>Agency website</h1>
        <ThemeChoice />
        
      </div>
    );
  }

export default ToolBar;