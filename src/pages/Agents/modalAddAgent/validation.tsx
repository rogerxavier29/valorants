import * as Yup from 'yup';

export const validationSchema = Yup.object({
  function: Yup.string(),
  random: Yup.string(),
  description: Yup.string().required('Obrigatório'),
  name: Yup.string().required('Obrigatório'),
  image: Yup.string().required('Obrigatório'),
  skills: Yup.array().of(
    Yup.object().shape({
      type: Yup.number(),
      damage: Yup.number(),
    }),
  ),
});

export const initialValues = {
  image: '',
  function: '',
  random: '',
  description: '',
  name: '',
  skills: [
    {
      type: 1,
      damage: '',
    },
    {
      type: 2,
      damage: '',
    },
    {
      type: 3,
      damage: '',
    },
    {
      type: 4,
      damage: '',
    },
  ],
};
