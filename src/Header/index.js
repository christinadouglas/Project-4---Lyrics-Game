import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'


const Header = () => {
  return (
    <header>
        <Menu>
            <Menu.Item header>
            <Link to='/'>Lyric's Play</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/songs'>Songs</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/game'>Play Game</Link>
            </Menu.Item>
        </Menu>
    </header>
    )
}


export default Header;
