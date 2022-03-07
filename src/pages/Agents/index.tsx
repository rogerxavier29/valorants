import React, { useState, useEffect } from 'react';
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

import ModalAgents from './modalAddAgent';
import ModalSkill from './modalSkillAgents';

import { getAgents } from '../../services/Agents';

const Agents: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalSkill, setOpenModalSkill] = React.useState<string>('');

  const [agents, setAgents] = React.useState([]);

  useEffect(() => {
    getAgents()
      .then((response: any) => {
        setAgents(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Content>
      <ModalAgents open={openModal} closeModal={() => setOpenModal(false)} />
      {openModalSkill ? (
        <ModalSkill
          open={true}
          closeModal={() => setOpenModalSkill('')}
          agentSkill={openModalSkill}
        />
      ) : (
        ''
      )}

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
        {agents?.map((data) => (
          <Persona>
            <div onClick={() => setOpenModalSkill(data)}>
              {data?.name === 'Jett' ? (
                <img src={Jett} alt='Agente Jett' />
              ) : data.name === 'Raze' ? (
                <img src={Raze} alt='Agente Jett' />
              ) : data.name === 'Breach' ? (
                <img src={Breach} alt='Agente Jett' />
              ) : data.name === 'Omen' ? (
                <img src={Omen} alt='Agente Jett' />
              ) : data.name === 'Brimstone' ? (
                <img src={Brimstone} alt='Agente Jett' />
              ) : data.name === 'Phoenix' ? (
                <img src={Phoenix} alt='Agente Jett' />
              ) : data.name === 'Sage' ? (
                <img src={Sage} alt='Agente Jett' />
              ) : data.name === 'Sova' ? (
                <img src={Sova} alt='Agente Jett' />
              ) : data.name === 'Viper' ? (
                <img src={Viper} alt='Agente Jett' />
              ) : data.name === 'Cypher' ? (
                <img src={Cypher} alt='Agente Jett' />
              ) : data.name === 'Reyna' ? (
                <img src={Reyna} alt='Agente Jett' />
              ) : null}
              <p>{data?.name}</p>
            </div>
          </Persona>
        ))}
      </Agent>
    </Content>
  );
};

export default Agents;
