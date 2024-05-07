import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/chat">聊天</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;