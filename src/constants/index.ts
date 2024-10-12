
export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
  // {
  //   id: '',
  //   name: '',
  //   href: ''
  // }
]

/* ------------------------------------------------------------------ */

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return{
//    heroModelScale: isSmall ? 1.2 : isMobile ? 1.7 : 2.2,
//    heroModelPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],

    heroModelScale: isSmall ? 1.1 : isMobile ? 1.5 : isTablet ? 2.5 : 3.76,
    heroModelPosition: isMobile ? [-0.5, -2.0, 2.5] : [-0.9, -2.3, 2.5],

    targetScale: isSmall ? 0.8 : isMobile ? 1.2 : isTablet ? 1.5 : 2,
    targetPosition: isSmall ? [-4, -7.5, 2.1] : isMobile ? [-7, -7.5, 2.1] : isTablet ? [-10, -7.5, 2.1] : [-17, -6.5, 6.1],

    reactLogoScale: isSmall ? 0.5 : isMobile ? 1.0 : 1.6,
    reactLogoPosition: isSmall ? [6, -7, 0] : isMobile ? [11, -6, 0] : isTablet ? [10, -8, 0] : [20, -7, 0],

    rubixCubeScale: isSmall ? 0.3 : isMobile ? 0.45 : isTablet ? 0.6 : 0.9,
    rubixCubePosition: isSmall ? [-8, 4, -20] : isMobile ? [-18, 4, -20] : isTablet ? [-22, 4, -20] : [-37, 7, -20],

    bananaScale: isSmall ? 2 : isMobile ? 3 : 4,
    bananaPosition: isSmall ? [9, 3, -20] : isMobile ? [17, 5, -20] : isTablet ? [17, 5, -20] : [35, 7, -20],

    ringsScale: isSmall ? 0.05 : isMobile ? 0.06 : 4,
    ringsPosition: isSmall ? [9, 3, -20] : isMobile ? [17, 5, -20] : isTablet ? [17, 5, -20] : [35, 7, -20],

    computerMonitorScale: isSmall ? 0.3 : isMobile ? 0.6 : 1.2,
    computerMonitorPosition: isSmall ? [5, -6, -13] : isMobile ? [8, -5, -13] : isTablet ? [8, -5, -13] : [15, -6, -13],

    //Scale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    //Position: isSmall ? [,,] : isMobile ? [,,] : isTablet ? [,,] : [,,],

  }
}

/* ------------------------------------------------------------------ */

export const myProjects = [
  {
    title: 'Title 1 - Fun Explosives & Reactions',
    desc: 'lorem is the way of life if you get lost after some time',
    subdesc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sequi, eos nesciunt aliquam minima porro necessitatibus, quo ut totam accusantium facere suscipit voluptatem. Delectus porro ad odio doloremque aliquid mollitia fugit et dolorem ut aliquam laborum omnis, quidem corporis non nobis, vero adipisci nostrum totam quasi incidunt! Debitis, quis cus.`,
    href: 'https://www.google.com/',
    texture: 'https://i.pinimg.com/originals/4b/43/8e/4b438ee0dac5bd54380a5fa530ccdee0.gif',
    logo: 'https://img.icons8.com/color/100/fire-element--v1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: 'https://svgsilh.com/svg/147742.svg',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: 'https://img.icons8.com/plasticine/100/react.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'https://img.icons8.com/plasticine/100/tailwind_css.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: 'https://img.icons8.com/color/100/typescript.png',
      },
      {
        id: 4,
        name: 'Tuttle',
        path: 'https://img.icons8.com/clouds/100/turtle.png',
      },
    ],
  },
  {
    title: 'Title 2 - Happy Little Critters',
    desc: 'lorem is the way of life if you get lost after some time',
    subdesc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sequi, eos nesciunt aliquam minima porro necessitatibus, quo ut totam accusantium facere suscipit voluptatem. Delectus porro ad odio doloremque aliquid mollitia fugit et dolorem ut aliquam laborum omnis, quidem corporis non nobis, vero adipisci nostrum totam quasi incidunt! Debitis, quis cus.`,
    href: 'https://www.google.com/',
    texture: 'https://i.chzbgr.com/full/8439451648/hEAF08C90/lemur-wants-to-hug-bunnies',
    logo: 'https://img.icons8.com/fluency/48/dog-footprint.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: 'https://img.icons8.com/plasticine/100/react.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'https://img.icons8.com/plasticine/100/tailwind_css.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: 'https://img.icons8.com/color/100/typescript.png',
      },
      {
        id: 4,
        name: 'Tuttle',
        path: 'https://img.icons8.com/clouds/100/turtle.png',
      },
    ],
  },
  {},
  {},
  {},
]