import { createTheme } from '@mui/material/styles';
import { red, blue } from '@mui/material/colors';
import './index.css'; // make sure your @font-face rules are loaded

const theme = createTheme({
  typography: {
    fontFamily: '"Cotham Sans", sans-serif',
  },
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: red[500],
    },
  },
});

theme.typography.h3 = {
  ...theme.typography.h3,
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.2rem',
    fontWeight: theme.typography.h5.fontWeight,
  },
};

theme.typography.h4 = {
  ...theme.typography.h4,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.6rem',
    fontWeight: theme.typography.h5.fontWeight,
  },
};

theme.typography.h5 = {
  ...theme.typography.h5,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem',
    fontWeight: theme.typography.h5.fontWeight,
  },
};

theme.typography.h6 = {
  ...theme.typography.h6,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    fontWeight: theme.typography.h5.fontWeight,
  },
};

export default theme;
