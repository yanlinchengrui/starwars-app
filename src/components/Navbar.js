import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const navbar = () => (
  <Menu inverted>
    <Link to={{ pathname: '/' }}>
      <Menu.Item name='Starwars App' />
    </Link>
  </Menu>
);

export default navbar;