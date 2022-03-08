export const getFunct = async () => {
  const data = [
    {
      value: '',
      label: 'Selecione',
    },
    {
      value: 'Duelista',
      label: 'Duelista,',
    },
    {
      value: 'Controlador',
      label: 'Controlador',
    },
    {
      value: 'Iniciador',
      label: 'Iniciador',
    },
    {
      value: 'Sentinela',
      label: 'Sentinela',
    },
  ];
  try {
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error.response);
  }
};
