import React from 'react';
import Modal from '@mui/material/Modal';

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

import {
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  TextField,
} from '@material-ui/core';

import Adicionar from '../../../assets/adicionar.svg';

interface IProps {
  closeModal: () => void;
  open: boolean;
}

export default function ModalAgents({
  closeModal,
  open,
}: IProps): React.ReactElement {
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
          <SkillForm>
            <ColumnOne>
              <FormControl className='select-function-agent'>
                <InputLabel id='demo-simple-select-label'>Age</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  label='Age'
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <FormControl>
                <TextField variant='outlined' placeholder='Habilidade - 1' />
              </FormControl>

              <FormControl>
                <TextField
                  variant='outlined'
                  placeholder='Habilidade - 1'
                ></TextField>
              </FormControl>

              <FormControl>
                <TextField
                  variant='outlined'
                  placeholder='Habilidade - 1'
                ></TextField>
              </FormControl>

              <FormControl>
                <TextField
                  variant='outlined'
                  placeholder='Habilidade - 1'
                ></TextField>
              </FormControl>

              <FormControl>
                <TextField variant='outlined' placeholder='Habilidade - 1' />
              </FormControl>
            </ColumnOne>

            <ColumnTwo>
              <FormControl className='select-function-agent'>
                <InputLabel id='demo-simple-select-label'>Age</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  label='Age'
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <FormControl>
                <TextField variant='outlined' placeholder='Habilidade - 1' />
              </FormControl>

              <FormControl>
                <TextField
                  variant='outlined'
                  placeholder='Habilidade - 1'
                ></TextField>
              </FormControl>

              <FormControl>
                <TextField
                  variant='outlined'
                  placeholder='Habilidade - 1'
                ></TextField>
              </FormControl>

              <FormControl>
                <TextField
                  variant='outlined'
                  placeholder='Habilidade - 1'
                ></TextField>
              </FormControl>

              <FormControl>
                <TextField variant='outlined' placeholder='Habilidade - 1' />
              </FormControl>
            </ColumnTwo>
            <AddPhoto>
              <img src={Adicionar} alt='icone de adicionar' />
              <p>Foto</p>
            </AddPhoto>
          </SkillForm>
          <BtnsForm>
            <button className='btn-cancelar'>CANCELAR</button>
            <button className='btn-salvar'>SALVAR</button>
          </BtnsForm>
        </Content>
      </Modal>
    </div>
  );
}
