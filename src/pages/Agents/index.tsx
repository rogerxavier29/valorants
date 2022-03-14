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

  const onFinish = (data: any) => {
    setAgents(data);
    setOpenModal(false);
  };

  return (
    <Content>
      {openModalSkill ? (
        <ModalSkill
          open={true}
          closeModal={() => setOpenModalSkill('')}
          agentSkill={openModalSkill}
        />
      ) : (
        ''
      )}

      {openModal ? (
        <ModalAgents
          open={openModal}
          closeModal={() => setOpenModal(false)}
          agentValorant={agents}
          newAgent={onFinish}
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
        {agents?.map((data: any) => (
          <Persona>
            <div onClick={() => setOpenModalSkill(data)}>
              <img src={data.image} alt='' />
              <p>{data?.name}</p>
            </div>
          </Persona>
        ))}
      </Agent>
    </Content>
  );
};

export default Agents;
