import { Box } from '@mui/material';
import bakgrunn from './assets/images/bakgrunn-desktop.jpg';
import LetterPile from './components/LetterPile';

function App() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: `url(${bakgrunn})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <LetterPile />
    </Box>
  );
}

export default App;