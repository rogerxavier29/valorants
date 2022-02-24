import React, { useState } from 'react';
import {
  Content,
  FilterAgents,
  SectionFilters,
  Filters,
  Agent,
  AddAgent,
  BtnFilter,
  Persona,
} from './styles';
import {
  FormControl,
  MenuItem,
  Select,
  TextField,
  InputLabel,
} from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import Adicionar from '../../assets/adicionar.svg';
import Jett from '../../assets/Jett.png';
import Raze from '../../assets/Raze.png';
import Breach from '../../assets/Breach.png';
import Omen from '../../assets/Omen.png';
import Brimstone from '../../assets/Brimstone.png';
import Phoenix from '../../assets/Phoenix.png';
import Sage from '../../assets/Sage.png';
import Sova from '../../assets/Sova.png';
import Viper from '../../assets/Viper.png';
import Cypher from '../../assets/Cypher.png';
import Reyna from '../../assets/Reyna.png';

import ModalAgents from '../Agents/modal';

const Agents: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Content>
      <ModalAgents open={openModal} closeModal={() => setOpenModal(false)} />
      <FilterAgents>
        <h1>AGENTES</h1>

        <FormControl className='select-agent'>
          <TextField
            variant='outlined'
            placeholder='Pesquisar agentes ...'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          ></TextField>
        </FormControl>
      </FilterAgents>
      <SectionFilters>
        <h2>Filtrar Agentes</h2>
        <Filters>
          {' '}
          <div>
            <FormControl className='select-agent'>
              <InputLabel id='demo-simple-select-helper-label'>
                Selecione uma habilidade
              </InputLabel>
              <Select
                labelId='demo-simple-select-helper-label'
                id='demo-simple-select-helper'
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            {' '}
            <FormControl className='select-agent'>
              <InputLabel id='demo-simple-select-helper-label'>
                Selecione uma habilidade
              </InputLabel>
              <Select
                labelId='demo-simple-select-helper-label'
                id='demo-simple-select-helper'
                displayEmpty
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <FormControl className='select-agent'>
              <TextField
                variant='outlined'
                placeholder='Informe o valor do dano'
              ></TextField>
            </FormControl>
          </div>
          <BtnFilter>
            <button>FILTRAR</button>
          </BtnFilter>
        </Filters>
      </SectionFilters>
      <Agent>
        <AddAgent onClick={() => setOpenModal(true)}>
          <img src={Adicionar} alt='sinal de adição' />
          <p>Adicionar</p>
        </AddAgent>
        <Persona>
          <img src={Jett} alt='Agente Jett' />
          <p>JETT</p>
        </Persona>
        <Persona>
          <img
            style={{ border: '1px solid #133052' }}
            src={Raze}
            alt='Agente Raze'
          />
          <p>RAZE</p>
        </Persona>
        <Persona>
          <img
            style={{ border: '1px solid #133052' }}
            src={Breach}
            alt='Agente Breach'
          />
          <p>BREACH</p>
        </Persona>
        <Persona>
          <img
            style={{ border: '1px solid #133052' }}
            src={Omen}
            alt='Agente Omen'
          />
          <p>OMEN</p>
        </Persona>
        <Persona>
          <img
            style={{ border: '1px solid #133052' }}
            src={Brimstone}
            alt='Agente Brimstone'
          />
          <p>BRIMSTONE</p>
        </Persona>
        <Persona>
          <img
            style={{ border: '1px solid #133052' }}
            src={Phoenix}
            alt='Agente Phoenix'
          />
          <p>PHOENIX</p>
        </Persona>
        <Persona>
          <img
            style={{ border: '1px solid #133052' }}
            src={Sage}
            alt='Agente Sage'
          />
          <p>SAGE</p>
        </Persona>
        <Persona style={{ marginTop: '24px' }}>
          <img
            style={{ border: '1px solid #133052' }}
            src={Sova}
            alt='Agente Sova'
          />
          <p>SOVA</p>
        </Persona>
        <Persona style={{ marginTop: '24px' }}>
          <img
            style={{ border: '1px solid #133052' }}
            src={Viper}
            alt='Agente Viper'
          />
          <p>VIPER</p>
        </Persona>
        <Persona style={{ marginTop: '24px' }}>
          <img
            style={{ border: '1px solid #133052' }}
            src={Cypher}
            alt='Agente Chyper'
          />
          <p>CYPER</p>
        </Persona>
        <Persona style={{ marginTop: '24px' }}>
          <img
            style={{ border: '1px solid #133052' }}
            src={Reyna}
            alt='Agente Reyna'
          />
          <p>REYNA</p>
        </Persona>
      </Agent>
    </Content>
  );
};

export default Agents;
