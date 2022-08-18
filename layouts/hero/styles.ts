import ICSS from '@/common/types';

const styles : ICSS = {
  heroTitle: {
    lh: '140%',
    fs: '2.2rem',
    '@md': {
      lh: '120%',
      fs: '3.2rem',
    },
  },
  rotateText: {
    tt: 'capitalize',
    fontWeight: 'bold',
    '@md': { rotate: '90deg', my: 30 },
  },
};

export default styles;
