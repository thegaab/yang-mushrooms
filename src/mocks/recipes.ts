// mocks/recipesMock.ts
import shimeji from '@/assets/recipes/shimeji-manteiga.png';
import champignon from '@/assets/recipes/champignonSalteadoAlho.png';
import paris from '@/assets/recipes/cogumelo-recheado.png';

export const recipesMock = [
  {
    id: 1,
    name: 'Shimeji na manteiga',
    image: shimeji,
    ingredients: [
      '200g de shimeji',
      '2 colheres de sopa de manteiga',
      '2 colheres de sopa de shoyu (molho de soja)',
      'Cebolinha picada a gosto',
    ],
    preparation: [
      'Separe os talos dos cogumelos shimeji.',
      'Em uma frigideira, derreta a manteiga em fogo médio.',
      'Adicione o shimeji e refogue por cerca de 3 a 5 minutos, até murchar.',
      'Acrescente o shoyu e misture bem.',
      'Finalize com a cebolinha picada e sirva imediatamente.',
    ],
  },
  {
    id: 2,
    name: 'Champignon salteado no alho',
    image: champignon,
    ingredients: [
      '200g de champignon fresco',
      '2 dentes de alho picados',
      '2 colheres de sopa de azeite de oliva',
      'Sal e pimenta a gosto',
      'Salsinha picada a gosto',
    ],
    preparation: [
      'Limpe e corte os champignons ao meio.',
      'Aqueça o azeite em uma frigideira e adicione o alho, refogando até dourar levemente.',
      'Adicione os champignons e refogue em fogo alto por 5 a 7 minutos, até dourarem.',
      'Tempere com sal e pimenta a gosto.',
      'Finalize com salsinha picada e sirva.',
    ],
  },
  {
    id: 3,
    name: 'Cogumelo Paris recheado',
    image: paris,
    ingredients: [
      '6 cogumelos Paris grandes',
      '100g de cream cheese',
      '1 dente de alho picado',
      'Salsinha picada a gosto',
      'Azeite de oliva',
      'Sal e pimenta a gosto',
    ],
    preparation: [
      'Limpe os cogumelos e retire os talos, reservando-os.',
      'Pique os talos e refogue com o alho e um fio de azeite até dourar.',
      'Misture o refogado com o cream cheese e a salsinha.',
      'Tempere com sal e pimenta.',
      'Recheie os cogumelos com essa mistura e asse em forno pré-aquecido a 180°C por 15 a 20 minutos, até dourarem.',
    ],
  },
];
