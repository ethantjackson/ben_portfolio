import { createTheme } from '@mui/material/styles';
import { red, blue } from '@mui/material/colors';
import '@fontsource/poppins/400.css'; // Regular
import '@fontsource/poppins/700.css'; // Bold

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
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
    fontSize: '2.2rem', // only override this
    fontWeight: theme.typography.h5.fontWeight, // keep default
  },
};

theme.typography.h4 = {
  ...theme.typography.h4,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.6rem', // only override this
    fontWeight: theme.typography.h5.fontWeight, // keep default
  },
};

theme.typography.h5 = {
  ...theme.typography.h5,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem', // only override this
    fontWeight: theme.typography.h5.fontWeight, // keep default
  },
};

theme.typography.h6 = {
  ...theme.typography.h6,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem', // only override this
    fontWeight: theme.typography.h5.fontWeight, // keep default
  },
};

export default theme;
