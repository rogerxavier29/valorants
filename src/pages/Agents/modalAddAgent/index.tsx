import React, { useEffect, useRef, useState } from 'react';
import Modal from '@mui/material/Modal';
import { Form, Formik, Field, FieldArray } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import { validationSchema, initialValues } from './validation';

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

import { FormControl, InputLabel, InputBase } from '@material-ui/core';

import Adicionar from '../../../assets/adicionar.svg';
import { Button, Input, MenuItem } from '@mui/material';

import { data } from './List';
import { AnyCnameRecord } from 'dns';

interface IProps {
  closeModal: () => void;
  open: boolean;
  agentValorant: any;
  newAgent: (value: any[]) => void;
}

export default function ModalAgents({
  closeModal,
  open,
  agentValorant,
  newAgent,
}: IProps): React.ReactElement {
  const [functAgents, setFunctAgents] = React.useState([]);
  const [baseImage, setBaseImage] = useState<any>('');

  // useEffect(() => {
  //   getFunct()
  //     .then((response: any) => {
  //       setFunctAgents(response);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  const uploadImage = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  function handleSubmit(values: any) {
    values.image = baseImage;
    console.log(values);
    const aux = [...agentValorant];
    aux.push(values);
    newAgent(aux);
  }

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
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values: any) => {}}
          >
            {({ values }) => (
              <Form>
                <SkillForm>
                  <ColumnOne>
                    <Field
                      id='function'
                      name='function'
                      label='Função'
                      variant='outlined'
                      component={Select}
                    >
                      {data.map((data: any) => (
                        <MenuItem key={data.value} value={data.value}>
                          {data.label}
                        </MenuItem>
                      ))}
                    </Field>

                    <Field
                      id='name'
                      name='name'
                      variant='outlined'
                      placeholder='Nome'
                      component={TextField}
                    />

                    <Field
                      name='random'
                      variant='outlined'
                      placeholder='Habilidade - 2'
                      component={TextField}
                      // error={
                      //   formik.touched.hab2 && Boolean(formik.errors.hab2)
                      // }
                      // helperText={formik.touched.hab2 && formik.errors.hab2}
                    />

                    <Field
                      name='random'
                      variant='outlined'
                      placeholder='Habilidade - 3'
                      component={TextField}
                      // error={
                      //   formik.touched.hab3 && Boolean(formik.errors.hab3)
                      // }
                      // helperText={formik.touched.hab3 && formik.errors.hab3}
                    />

                    <Field
                      name='random'
                      variant='outlined'
                      placeholder='Habilidade - 4'
                      component={TextField}
                      // error={
                      //   formik.touched.hab4 && Boolean(formik.errors.hab4)
                      // }
                      // helperText={formik.touched.hab4 && formik.errors.hab4}
                    />
                  </ColumnOne>

                  <ColumnTwo>
                    <Field
                      id='description'
                      name='description'
                      variant='outlined'
                      placeholder='Descrição'
                      component={TextField}
                      // error={
                      //   formik.touched.hab4 && Boolean(formik.errors.hab4)
                      // }
                      // helperText={formik.touched.hab4 && formik.errors.hab4}
                    />

                    <FieldArray name='skills'>
                      {({ push, remove }) => (
                        <>
                          {values.skills.map((skill: any, index: number) => (
                            <div key={index}>
                              <Field
                                required
                                type='number'
                                name={`skills.${index}.damage`}
                                component={TextField}
                                variant='outlined'
                                label={`Dano Habilidade - ${skill.type}`}
                              />
                            </div>
                          ))}
                        </>
                      )}
                    </FieldArray>
                  </ColumnTwo>

                  <AddPhoto>
                    <Input
                      inputProps={{ accept: 'image/*' }}
                      // style={{ display: 'none' }}
                      id='image'
                      name='image'
                      type='file'
                      // ref={uploadInputRef}
                      onChange={(e) => {
                        uploadImage(e);
                      }}
                    />
                    <div
                    // onClick={() => {
                    //   uploadInputRef.current &&
                    //     uploadInputRef.current.click();
                    // }}
                    >
                      <img src={Adicionar} alt='icone de adicionar' />

                      <p>Foto</p>
                    </div>
                  </AddPhoto>
                </SkillForm>

                <BtnsForm>
                  <button className='btn-cancelar'>CANCELAR</button>
                  <Button
                    onClick={() => handleSubmit(values)}
                    className='btn-salvar'
                  >
                    SALVAR
                  </Button>
                </BtnsForm>
              </Form>
            )}
          </Formik>
        </Content>
      </Modal>
    </div>
  );
}
