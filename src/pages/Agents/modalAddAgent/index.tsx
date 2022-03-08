import React, { useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  Content,
  BtnClose,
  Title,
  SkillForm,
  ColumnOne,
  ColumnTwo,
  AddPhoto,
  BtnsForm,
} from './styles';

import { FormControl, Select, InputLabel, TextField } from '@material-ui/core';

import Adicionar from '../../../assets/adicionar.svg';
import { MenuItem } from '@mui/material';

import { getFunct } from './List';

interface IProps {
  closeModal: () => void;
  open: boolean;
}

export default function ModalAgents({
  closeModal,
  open,
}: IProps): React.ReactElement {
  const [functAgents, setFunctAgents] = React.useState([]);

  const validationSchema = Yup.object({
    funct: Yup.string('Insira a função do Agente'),
    hab1: Yup.string('Insira habilidade 1').required('Obrigatório'),
    hab2: Yup.string('Insira habilidade 2').required('Obrigatório'),
    hab3: Yup.string('Insira habilidade 3').required('Obrigatório'),
    hab4: Yup.string('Insira habilidade 4').required('Obrigatório'),
    description: Yup.string('Insira a descrição do Agente').required(
      'Obrigatório',
    ),
    damage1: Yup.number('Insira o dano 1').required('Obrigatório'),
    damage2: Yup.number('Insira o dano 2').required('Obrigatório'),
    demage3: Yup.number('Insira o dano 3').required('Obrigatório'),
    demage4: Yup.number('Insira o dano 4').required('Obrigatório'),
  });

  const formik = useFormik({
    initialValues: {
      funct: '',
      hab1: '',
      hab2: '',
      hab3: '',
      hab4: '',
      description: '',
      damage1: '',
      damage2: '',
      damage3: '',
      damage4: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    getFunct()
      .then((response: any) => {
        setFunctAgents(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Modal className='agents-add' open={open} onClose={closeModal}>
        <Content>
          <BtnClose>
            {' '}
            <p onClick={closeModal}>X</p>{' '}
          </BtnClose>
          <Title>
            <p>Adicionar agente</p>
          </Title>
          <form onSubmit={formik.handleSubmit}>
            <SkillForm>
              <ColumnOne>
                <FormControl className='select-function-agent'>
                  <TextField
                    id='funct'
                    select
                    name='funct'
                    label='Função'
                    variant='outlined'
                    value={formik.values.funct}
                    onChange={formik.handleChange}
                  >
                    {functAgents.map((data: any) => (
                      <MenuItem key={data.value} value={data.value}>
                        {data.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>

                <FormControl>
                  <TextField
                    required
                    id='hab1'
                    name='hab1'
                    variant='outlined'
                    placeholder='Habilidade - 1'
                    value={formik.values.hab1}
                    onChange={formik.handleChange}
                  />
                </FormControl>

                <FormControl>
                  <TextField
                    required
                    id='hab2'
                    name='hab2'
                    variant='outlined'
                    placeholder='Habilidade - 2'
                    value={formik.values.hab2}
                    onChange={formik.handleChange}
                  />
                </FormControl>

                <FormControl>
                  <TextField
                    required
                    id='hab3'
                    name='hab3'
                    variant='outlined'
                    placeholder='Habilidade - 3'
                    value={formik.values.hab3}
                    onChange={formik.handleChange}
                  />
                </FormControl>

                <FormControl>
                  <TextField
                    required
                    id='hab4'
                    name='hab4'
                    variant='outlined'
                    placeholder='Habilidade - 4'
                    value={formik.values.hab4}
                    onChange={formik.handleChange}
                  />
                </FormControl>
              </ColumnOne>

              <ColumnTwo>
                <FormControl className='select-function-agent'>
                  <TextField variant='outlined' placeholder='Habilidade - 1' />
                </FormControl>

                <FormControl>
                  <TextField
                    required
                    id='damage1'
                    name='damage1'
                    variant='outlined'
                    placeholder='Dano hablidade - 1'
                    value={formik.values.damage1}
                    onChange={formik.handleChange}
                  />
                </FormControl>

                <FormControl>
                  <TextField
                    required
                    id='damage2'
                    name='damage2'
                    variant='outlined'
                    placeholder='Dano habilidade - 2'
                    value={formik.values.damage2}
                    onChange={formik.handleChange}
                  />
                </FormControl>

                <FormControl>
                  <TextField
                    required
                    id='damage3'
                    name='damage3'
                    variant='outlined'
                    placeholder='Dano habilidade - 3'
                    value={formik.values.damage3}
                    onChange={formik.handleChange}
                  />
                </FormControl>

                <FormControl>
                  <TextField
                    required
                    id='damage4'
                    name='damage4'
                    variant='outlined'
                    placeholder='Dano habilidade - 4'
                    value={formik.values.damage4}
                    onChange={formik.handleChange}
                  />
                </FormControl>
              </ColumnTwo>
              <AddPhoto>
                <img src={Adicionar} alt='icone de adicionar' />
                <p>Foto</p>
              </AddPhoto>
            </SkillForm>
          </form>
          <BtnsForm>
            <button className='btn-cancelar'>CANCELAR</button>
            <button type='submit' className='btn-salvar'>
              SALVAR
            </button>
          </BtnsForm>
        </Content>
      </Modal>
    </div>
  );
}
