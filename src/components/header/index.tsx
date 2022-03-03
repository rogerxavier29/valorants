import React from 'react';
import { Content, Links, Btnjogue, Imglogo } from './styles';
import Logo from '../../assets/Logo.svg';

const Header: React.FC = () => {
  return (
    <Content>
      <Imglogo>
        <img src={Logo} alt='logo-valorant' />
      </Imglogo>

      <Links>
        <a href='http:/agents'>
          <li>AGENTES</li>
        </a>

        <a href='#maps'>
          {' '}
          <li>MAPAS</li>
        </a>

        <a href='http:/arsenal'>
          <li>ARSENAL</li>
        </a>

        <a href='http:/download'>
          <li>DOWNLOAD</li>
        </a>

        <a href='http:/support'>
          <li>SUPORTE</li>
        </a>
      </Links>

      <Btnjogue>
        <button>JOGUE AGORA</button>
      </Btnjogue>
    </Content>
  );
};

export default Header;
