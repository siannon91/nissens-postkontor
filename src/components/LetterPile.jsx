import { Box } from '@mui/material';
import brevbunke from '../assets/images/brevbunke.png';
import { useState } from 'react';
import FestiveButton from './FestiveButton';

function LetterPile({ onOpen }) {
    const [hover, setHover] = useState(false); // true quando il mouse è sul pulsante
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
        filter: hover
          ? 'drop-shadow(0 20px 20px rgba(0,0,0,0.8)) drop-shadow(0 0 6px #fff3c4) drop-shadow(0 0 18px #e8b04a)' // con luce
          : 'drop-shadow(0 20px 20px rgba(0,0,0,0.8)) drop-shadow(0 0 0 rgba(255,243,196,0)) drop-shadow(0 0 0 rgba(232,176,74,0))', // senza luce
        transition: 'filter 0.3s ease', // la luce sale e scende piano
      }}
    />
    
      <FestiveButton
        tone="gold"
        onClick={onOpen}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Åpne brev
      </FestiveButton>

    </Box>
  );
}

export default LetterPile;