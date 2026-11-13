import { Box } from '@mui/material';
import bakgrunn from './assets/images/bakgrunn-desktop.jpg';

function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(${bakgrunn})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
}

export default App;