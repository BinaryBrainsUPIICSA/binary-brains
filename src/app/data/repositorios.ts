export type Repositorio = {
  title: string;
  image: string;
  description: string;
  tecnologias: string[];
  link: string;
};

export const REPOSITORIOS: Repositorio[] = [
  {
    title: '100 dias 10 proyectos',
    image: 'assets/images/rrr.gif',
    description: 'En este desafío harémos un proyecto de software todos los días para mejorar nuestras habilidades técnicas como desarrolladores BACKEND y FRONTEND, lograrémos estos objetivos practicando todos los días porque la práctica hace al maestro.',
    tecnologias: ['HTML', 'CSS', 'JS', 'Java', 'Arduino', 'MySQL', 'React', 'Python', 'Spring', 'Ts'],
    link: 'https://github.com/xVrzBx/100Days100Proyects'
  },
  {
    title: 'Proximamente ...',
    image: 'assets/images/qqq.jpg',
    description: 'En Binari Brains, estamos trabajando duro en emocionantes proyectos que llegarán muy pronto.',
    tecnologias: [],
    link: 'https://github.com/BinaryBrainsUPIICSA'
  },
]
