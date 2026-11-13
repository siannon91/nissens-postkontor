import { Box, Button } from '@mui/material';
import brevbunke from '../assets/images/brevbunke.png';

function LetterPile({ onOpen }) {
  return (
    <Box
        sx={{
            position: 'absolute',
            left: '31%',
            top: '50%',
            width: 'clamp(70px, 9vw, 150px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
        }}
    >
    <Box
      component="img"
      src={brevbunke}
      alt="Bunke med brev"
      sx={{
        width: '100%',
        filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.6))',
      }}
    />
    <Button
        variant="contained"
        onClick={onOpen}
        sx={{ whiteSpace: 'nowrap' }}
    >
        Åpne brev
    </Button>
    </Box>
  );
}

export default LetterPile;