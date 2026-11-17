import { Box, Typography } from '@mui/material';
import FestiveButton from './FestiveButton';
import { keyframes } from '@mui/material/styles';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const growIn = keyframes`
  from { opacity: 0; transform: scale(0.85); }
  to { opacity: 1; transform: scale(1); }
`;

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
        animation: `${fadeIn} 0.6s ease-out`,
        '@media (prefers-reduced-motion: reduce)': { animation: 'none' }
    }}
    >
    <Typography
        sx={{
          fontFamily: 'inherit',
          fontWeight: 700,
          fontSize: { xs: '1.4rem', sm: '2rem' },
          color: '#fff3c4',
          animation: `${growIn} 1.2s ease-out 0.4s both`,
          '@media (prefers-reduced-motion: reduce)': { animation: 'none' }
        }}
      >
        Vi har gjort jobben vår for i år!
    </Typography>

    <Typography
        sx={{
          fontFamily: 'inherit',
          fontWeight: 700,
          fontSize: { xs: '2rem', sm: '3rem' },
          color: '#ffd978',
          textShadow: '0 0 14px rgba(232,176,74,0.8), 0 2px 4px rgba(0,0,0,0.8)',
          animation: `${growIn} 1.2s ease-out 1.2s both`,
          '@media (prefers-reduced-motion: reduce)': { animation: 'none' }
        }}
      >
        God jul! Husk å være snille og greie! Nissen
      </Typography>

      <Box sx={{ animation: `${growIn} 0.8s ease-out 2.2s both`, '@media (prefers-reduced-motion: reduce)': { animation: 'none' } }}>
        <FestiveButton tone="green" onClick={onRestart}>
          Start på nytt
        </FestiveButton>
      </Box>
    </Box>
  );
}

export default FinalMessage;