import React from 'react';
import { Content, Imgtitle } from './styles';

import Background from '../../assets/Background.png';
import Title from '../../assets/Title.png';

const Main: React.FC = () => {
  return (
    <Content>
      <img src={Background} alt='' />

      <div></div>

      <Imgtitle>
        <img src={Title} alt='' />
      </Imgtitle>
    </Content>
  );
};

export default Main;
