import { Box, Button } from '@mui/material';
import brevbunke from '../assets/images/brevbunke.png';

function LetterPile({ onOpen }) {
  return (
    <Box
        sx={{
            position: 'absolute',
            left: '35%',
            top: '46%',
            width: '11%',
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
        filter: 'drop-shadow(0 20px 20px rgba(0,0,0,0.8))',
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