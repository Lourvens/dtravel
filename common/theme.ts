import { createTheme } from '@nextui-org/react';

const theme = createTheme({
  type: 'light',
  theme: {
    colors: {
      primary: '#197BFF',
      primaryShadow: '#6a9cfc',
      secondary: '#14C691',
      secondaryShadow: '#adf7c2',
      gray: '#7E868C',
    },
    fonts: {
      sans: "'Nunito', 'serif'",
    },
  },
});

export default theme;
