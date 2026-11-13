import { Box } from '@mui/material';
import brevbunke from '../assets/images/brevbunke.png';

function LetterPile() {
  return (
    <Box
      component="img"
      src={brevbunke}
      alt="Bunke med brev"
      sx={{
        position: 'absolute',
        left: '31%',
        top: '50%',
        width: 'clamp(70px, 9vw, 150px)',
        filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.6))',
      }}
    />
  );
}

export default LetterPile;