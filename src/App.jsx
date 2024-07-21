import { Box, Button, Container, Typography } from '@mui/material';
import IntroSplash from './IntroSplash';
import Navbar from './Navbar';
import IntroNav from './IntroNav';

function App() {
  return (
    <div>
      <IntroNav />
      {/* <Navbar /> */}
      <IntroSplash />
    </div>
  );
}

export default App;
