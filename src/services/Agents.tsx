import Jett from '../assets/Jett.png';
import Raze from '../assets/Raze.png';
import Breach from '../assets/Breach.png';
import Omen from '../assets/Omen.png';
import Brimstone from '../assets/Brimstone.png';
import Phoenix from '../assets/Phoenix.png';
import Sage from '../assets/Sage.png';
import Sova from '../assets/Sova.png';
import Viper from '../assets/Viper.png';
import Cypher from '../assets/Cypher.png';
import Reyna from '../assets/Reyna.png';

export const getAgents = async () => {
  const data = [
    {
      name: 'Jett',
      function: 'Duelista',
      description:
        'Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.',
      skills: [
        {
          type: 1,
          damage: 5,
        },
        {
          type: 2,
          damage: 8,
        },
        {
          type: 3,
          damage: 10,
        },
        {
          type: 4,
          damage: 30,
        },
      ],
      image: Jett,
    },
    {
      name: 'Raze',
      function: 'Sentinela',
      description:
        'Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.',
      skills: [
        {
          type: 1,
          damage: 6,
        },
        {
          type: 2,
          damage: 3,
        },
        {
          type: 3,
          damage: 13,
        },
        {
          type: 4,
          damage: 25,
        },
      ],
      image: Raze,
    },
    {
      name: 'Breach',
      function: 'Duelista',
      description:
        'Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.',
      skills: [
        {
          type: 1,
          damage: 5,
        },
        {
          type: 2,
          damage: 8,
        },
        {
          type: 3,
          damage: 15,
        },
        {
          type: 4,
          damage: 10,
        },
      ],
      image: Breach,
    },
    {
      name: 'Omen',
      function: 'Controlador',
      description:
        'Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.',
      skills: [
        {
          type: 1,
          damage: 9,
        },
        {
          type: 2,
          damage: 5,
        },
        {
          type: 3,
          damage: 10,
        },
        {
          type: 4,
          damage: 20,
        },
      ],
      image: Omen,
    },
    {
      name: 'Brimstone',
      function: 'Iniciador',
      description:
        'Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.',
      skills: [
        {
          type: 1,
          damage: 5,
        },
        {
          type: 2,
          damage: 5,
        },
        {
          type: 3,
          damage: 10,
        },
        {
          type: 4,
          damage: 20,
        },
      ],
      image: Brimstone,
    },
    {
      name: 'Phoenix',
      function: 'Duelista',
      description:
        'Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.',
      skills: [
        {
          type: 1,
          damage: 15,
        },
        {
          type: 2,
          damage: 8,
        },
        {
          type: 3,
          damage: 10,
        },
        {
          type: 4,
          damage: 30,
        },
      ],
      image: Phoenix,
    },
    {
      name: 'Sage',
      function: 'Iniciador',
      description:
        'Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.',
      skills: [
        {
          type: 1,
          damage: 25,
        },
        {
          type: 2,
          damage: 4,
        },
        {
          type: 3,
          damage: 15,
        },
        {
          type: 4,
          damage: 25,
        },
      ],
      image: Sage,
    },
    {
      name: 'Sova',
      function: 'Duelista',
      description:
        'Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.',
      skills: [
        {
          type: 1,
          damage: 5,
        },
        {
          type: 2,
          damage: 10,
        },
        {
          type: 3,
          damage: 10,
        },
        {
          type: 4,
          damage: 40,
        },
      ],
      image: Sova,
    },
    {
      name: 'Viper',
      function: 'Duelista',
      description:
        'Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.',
      skills: [
        {
          type: 1,
          damage: 12,
        },
        {
          type: 2,
          damage: 18,
        },
        {
          type: 3,
          damage: 20,
        },
        {
          type: 4,
          damage: 15,
        },
      ],
      image: Viper,
    },
    {
      name: 'Cypher',
      function: 'Controlador',
      description:
        'Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.',
      skills: [
        {
          type: 1,
          damage: 10,
        },
        {
          type: 2,
          damage: 15,
        },
        {
          type: 3,
          damage: 10,
        },
        {
          type: 4,
          damage: 20,
        },
      ],
      image: Cypher,
    },
    {
      name: 'Reyna',
      function: 'Iniciador',
      description:
        'Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.',
      skills: [
        {
          type: 1,
          damage: 14,
        },
        {
          type: 2,
          damage: 18,
        },
        {
          type: 3,
          damage: 27,
        },
        {
          type: 4,
          damage: 45,
        },
      ],
      image: Reyna,
    },
  ];

  try {
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error.response);
  }
};
