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

export default theme;
