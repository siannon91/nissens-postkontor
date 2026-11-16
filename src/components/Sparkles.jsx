import { Box } from '@mui/material';
import { keyframes } from '@mui/material/styles';

const twinkle = keyframes`
  0%, 100% { opacity: 0; transform: scale(0.3) rotate(0deg); }
  50% { opacity: 1; transform: scale(1) rotate(25deg); }
`;

const stars = [
  { top: 25, left: 28, size: 28, delay: 0 },
  { top: 22, left: 70, size: 22, delay: 0.6 },
  { top: 70, left: 35, size: 20, delay: 1.2 },
  { top: 75, left: 66, size: 30, delay: 0.3 },
  { top: 50, left: 25, size: 24, delay: 0.9 },
  { top: 48, left: 74, size: 26, delay: 1.5 },
  { top: 18, left: 50, size: 20, delay: 0.4 },
  { top: 82, left: 50, size: 22, delay: 1.1 },
];

function Sparkles() {
  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 1350,
        pointerEvents: 'none',
      }}
    >
      {stars.map((star, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            top: `${star.top}%`,
            left: `${star.left}%`,
            fontSize: star.size,
            color: '#ffd978',
            textShadow: '0 0 8px #fff3c4, 0 0 16px #e8b04a',
            animation: `${twinkle} 2s ease-in-out ${star.delay}s infinite`,
            '@media (prefers-reduced-motion: reduce)': { animation: 'none', opacity: 0.8 },
          }}
        >
          ✦
        </Box>
      ))}
    </Box>
  );
}

export default Sparkles;