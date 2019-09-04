import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
        <Link to='/songs'>Songs</Link>
        <Link to='/game'>Game</Link>
    </header>
    )
}


export default Header;
