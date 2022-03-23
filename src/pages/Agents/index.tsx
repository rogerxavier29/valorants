import React, { useState, useEffect, useMemo } from 'react';
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
import { Form, Field, FieldArray } from 'formik';
import { useFormik } from 'formik';
import Adicionar from '../../assets/adicionar.svg';

import ModalAgents from './modalAddAgent';
import ModalSkill from './modalSkillAgents';
import * as Yup from 'yup';

import { getAgents } from '../../services/Agents';
import { data } from './modalAddAgent/List';
import { validationSchema } from './modalAddAgent/validation';

const Agents: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalSkill, setOpenModalSkill] = React.useState<string>('');

  const [agents, setAgents] = React.useState([]);
  const [valueDamage, setValueDamage] = React.useState('');
  const [skillType, setSkillType] = React.useState('');
  const [filterDamage, setFilterDamage] = React.useState('');
  const [erro, setErro] = React.useState('');

  // const filterName = (event: any) => {
  //   const result = agents.filter((data: any) =>
  //     data.name.toLowerCase().includes(event.target.value.toLowerCase()),
  //   );
  //   setAgents(result);
  // };

  // console.log(
  //   agents.filter((agent: any) => agent.skills.map((tipo: any) => tipo.type)),
  // );

  const filterDamage3 = () => {
    if (valueDamage === null) {
      setErro('Preencha o valor do Dano');
    } else {
      const filterAgents: any = agents.filter((agent: any) => {
        return agent.skills.find((data: any) => {
          if (filterDamage === 'maior') {
            return data.type === skillType && data.damage > valueDamage;
          } else {
            if (filterDamage === 'menor') {
              return data.type === skillType && data.damage > valueDamage;
            }
          }
        });
      });
      setAgents(filterAgents);
    }
  };

  // const filterDamage2 = () => {
  //   if (valueDamage === null) {
  //     setErro('Preencha o valor do Dano');
  //   } else {
  //     if (filterDamage === 'maior') {
  //       let filteredAgents = agents.find((a: any) => {
  //         return a.skills.damage > valueDamage;
  //       });
  //       setAgents(filteredAgents);
  //     } else if (filterDamage === 'menor') {
  //       let filteredAgents = agents.filter((a: any) => {
  //         return a.skills[skillType - 1].damage < valueDamage;
  //       });
  //       setAgents(filteredAgents);
  //     }
  //   }
  // };

  // const validationSchema = Yup.object({
  //   arma: Yup.string(),
  //   ordemArma: Yup.string(),
  //   danoArma: Yup.number(),
  // });

  // const formik = useFormik({
  //   initialValues: {
  //     filterDamage: '',
  //     skillType: 'skillType',
  //     valueDamage: '',
  //   },
  //   validationSchema: validationSchema,
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

  // const teste = useMemo(() => {
  //   agents.filter((data: any) =>
  //     data.skills.map((data2: any) => {
  //       console.log(data2.damage.sort());
  //     }),
  //   );
  // }, [agents]);

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

        <FormControl className='input-agent'>
          <TextField
            variant='outlined'
            placeholder='Pesquisar agentes ...'
            // onChange={filterName}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </FilterAgents>
      <SectionFilters>
        <h2>Filtrar Agentes</h2>
        <Filters>
          {' '}
          <FormControl className='select-agent'>
            <InputLabel id='demo-simple-select-helper-label'>
              Selecione uma habilidade
            </InputLabel>
            <Select
              id='demo-simple-select-helper-label'
              label='Selecione uma habilidade'
              value={skillType}
              onChange={(event: any) => setSkillType(event.target.value)}
            >
              <MenuItem value=''>Selecione</MenuItem>
              <MenuItem value={1}>Arma Branca</MenuItem>
              <MenuItem value={2}>Arma primaria</MenuItem>
              <MenuItem value={3}>Arma Secundaria</MenuItem>
              <MenuItem value={4}>Especial</MenuItem>
            </Select>
          </FormControl>
          <FormControl className='select-agent'>
            <InputLabel id='demo-simple-select-helper-label'>
              Selecione uma habilidade
            </InputLabel>
            <Select
              labelId='demo-simple-select-helper-label'
              id='demo-simple-select-helper-label'
              name={filterDamage}
              value={filterDamage}
              onChange={(event: any) => setFilterDamage(event.target.value)}
            >
              <MenuItem value=''>Selecione</MenuItem>
              <MenuItem value='maior'>Filtrar maior que</MenuItem>
              <MenuItem value='menor'>Filtrar menor que</MenuItem>
            </Select>
          </FormControl>
          <FormControl className='input-agent'>
            <TextField
              variant='outlined'
              placeholder='Informe o valor do dano'
              name={valueDamage}
              onChange={(event: any) => setValueDamage(event.target.value)}
            />
          </FormControl>
          <BtnFilter>
            <button onClick={filterDamage3}>FILTRAR</button>
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
