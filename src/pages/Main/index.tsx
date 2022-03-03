import React from 'react';
import { Content, Imgtitle, Maps } from './styles';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import Background from '../../assets/Background.png';
import Title from '../../assets/Title.png';

const Main: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Content>
      <img className='background' src={Background} alt='' />

      <Imgtitle>
        <img src={Title} alt='' />
      </Imgtitle>
      <div className='linha'></div>
      <Maps id='maps'>
        <p>MAPAS</p>
        <div>
          aqui
          <img src='' alt='' />
        </div>
        <Box sx={{ maxWidth: 480 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant='scrollable'
            scrollButtons
            allowScrollButtonsMobile
            aria-label='scrollable force tabs example'
          >
            <Tab label='Item One' />
            <Tab label='Item Two' />
            <Tab label='Item Three' />
            <Tab label='Item Four' />
            <Tab label='Item Five' />
            <Tab label='Item Six' />
            <Tab label='Item Seven' />
          </Tabs>
        </Box>
      </Maps>
    </Content>
  );
};

export default Main;
