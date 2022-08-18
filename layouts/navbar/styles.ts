import ICSS from '@/common/types';

const styles: ICSS = {
  row: { w: 'auto' },
  navlink: {
    tt: 'capitalize',
    mr: '$15',
    fontWeight: '$semibold',
    color: '$text',
    d: 'none',
    '@md': {
      d: 'block',
    },
  },
  title: {
    d: 'none',
    '@md': {
      d: 'block',
    },
  },
};

export default styles;
