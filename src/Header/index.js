import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'


const Header = () => {
  return (
    <header>
        <Menu>
            <Menu.Item>
            <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/songs'>Songs</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/game'>Game</Link>
            </Menu.Item>
        </Menu>
    </header>
    )
}


export default Header;
