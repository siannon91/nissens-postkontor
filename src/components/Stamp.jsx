import { Box } from '@mui/material';
import { keyframes } from '@mui/material/styles';

const stampIn = keyframes`
  0% { opacity: 0; transform: scale(2.5) rotate(-12deg); }
  60% { opacity: 0.9; transform: scale(0.9) rotate(-12deg); }
  100% { opacity: 0.85; transform: scale(1) rotate(-12deg); }
`;

function Stamp({ nice }) {
  const color = nice ? '#2e5d3a' : '#9b1c2c';

  return (
    <Box
      sx={{
        position: 'absolute',
        right: 16,
        bottom: 16,
        px: 2,
        py: 0.5,
        border: `4px double ${color}`,
        borderRadius: '8px',
        color,
        fontFamily: '"Special Elite", monospace',
        fontSize: '1.8rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        pointerEvents: 'none',
        opacity: 0.85,
        transform: 'rotate(-12deg)',
        animation: `${stampIn} 0.4s ease-in`,
        '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
      }}
    >
      {nice ? 'Godkjent' : 'Begrenset'}
    </Box>
  );
}

export default Stamp;