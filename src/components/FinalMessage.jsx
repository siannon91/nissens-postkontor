import { Box, Typography } from '@mui/material';
import FestiveButton from './FestiveButton';

function FinalMessage({ onRestart }) {
  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 1400,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
        textAlign: 'center',
        px: 2,
        backgroundColor: 'rgba(20, 10, 5, 0.75)',
        fontFamily: '"Mountains of Christmas", cursive',
    }}
    >
    <Typography
        sx={{
          fontFamily: 'inherit',
          fontWeight: 700,
          fontSize: { xs: '2rem', sm: '3rem' },
          color: '#ffd978',
          textShadow: '0 0 14px rgba(232,176,74,0.8), 0 2px 4px rgba(0,0,0,0.8)',
        }}
      >
        Vi har gjort jobben vår for i år!
    </Typography>

    <Typography
        sx={{
          fontFamily: 'inherit',
          fontWeight: 700,
          fontSize: { xs: '1.4rem', sm: '2rem' },
          color: '#fff3c4',
        }}
      >
        God jul! Husk å være snille og greie! Nissen
      </Typography>

      <FestiveButton tone="gold" onClick={onRestart}>
        Start på nytt
      </FestiveButton>
    </Box>
  );
}

export default FinalMessage;