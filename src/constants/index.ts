
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


export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return{
    heroModelScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    heroModelPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],

    targetScale: isSmall ? 0.8 : isMobile ? 1.2 : isTablet ? 1.5 : 2,
    targetPosition: isSmall ? [-2, -7.5, 2.1] : isMobile ? [-7, -7.5, 2.1] : isTablet ? [-10, -7.5, 2.1] : [-17, -6.5, 6.1],

    reactLogoPosition: isSmall ? [,,] : isMobile ? [,,] : isTablet ? [,,] : [20, -7, 0],

    rubixCubePosition: isSmall ? [,,] : isMobile ? [,,] : isTablet ? [,,] : [-37, 7, -20],

    bananaPosition: isSmall ? [,,] : isMobile ? [,,] : isTablet ? [,,] : [35, 7, -20],

    ringsPosition: isSmall ? [,,] : isMobile ? [,,] : isTablet ? [,,] : [35, 7, -20],

    computerMonitorPosition: isSmall ? [,,] : isMobile ? [,,] : isTablet ? [,,] : [15, -8, -13],
    //Scale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065
    //Position: isSmall ? [,,] : isMobile ? [,,] : isTablet ? [,,] : [,,],

  }
}