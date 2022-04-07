import React from "react";
import { Content, Form } from "./styles";
import { useFormik } from "formik";
import { FormControl, TextField, Grid } from "@material-ui/core";

const Suporte: React.FC = () => {
  // const formik = useFormik({
  //   initialValues: {},
  // });

  return (
    <Content id="suporte">
      <Form>
        <h1>SUPORTE</h1>
        <form>
          <Grid container spacing={4}>
            <Grid xs={12} md={4}>
              <FormControl>
                <TextField
                  id="name"
                  name="name"
                  label="Nome"
                  variant="outlined"
                />
              </FormControl>
            </Grid>

            <Grid xs={12} md={4}>
              <FormControl>
                <TextField
                  id="sobrenome"
                  name="sobrenome"
                  label="Sobrenome"
                  variant="outlined"
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={2} columns={16}>
            <Grid xs={12} md={4}>
              <FormControl>
                <TextField
                  id="email"
                  name="email"
                  label="E-mail"
                  variant="outlined"
                />
              </FormControl>
            </Grid>

            <Grid xs={12} md={4}>
              <FormControl>
                <TextField
                  id="apelido"
                  name="apelido"
                  label="Apelido de jogador"
                  variant="outlined"
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            <Grid xs={16} md={4}>
              <FormControl>
                <TextField
                  id="email"
                  name="email"
                  label="E-mail"
                  variant="outlined"
                />
              </FormControl>
            </Grid>
            <Grid xs={16} md={4}>
              <FormControl>
                <TextField
                  id="email"
                  name="email"
                  label="E-mail"
                  variant="outlined"
                />
              </FormControl>
            </Grid>
          </Grid>
        </form>
      </Form>
    </Content>
  );
};

export default Suporte;
