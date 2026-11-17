import { Typography } from '@mui/material';

function LetterCounter({ remaining }) {
  return (
    <Typography
      sx={{
        position: 'fixed',
        zIndex: 1400,
        top: 16,
        left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: '"Mountains of Christmas", cursive',
        fontWeight: 700,
        fontSize: '2rem',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        color: '#ffd978',
        textShadow: '0 0 10px rgba(232,176,74,0.8), 0 2px 4px rgba(0,0,0,0.8)',
    }}
    >
      {remaining} barn å glede
    </Typography>
  );
}

export default LetterCounter;