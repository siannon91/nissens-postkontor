import { Button } from '@mui/material';

const tones = {
  gold: { color: '#3b2416', bg: '#e8b04a', hoverBg: '#ffd978', glow: '232,176,74' },
  green: { color: '#fff3c4', bg: '#2e5d3a', hoverBg: '#3f7d4f', glow: '120,200,140' },
};

function FestiveButton({ tone = 'gold', sx, ...props }) {
  const t = tones[tone];
  return (
    <Button
      {...props}
      sx={{
        fontFamily: '"Mountains of Christmas", cursive',
        fontWeight: 700,
        fontSize: '1.3rem',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        px: 3,
        py: 1,
        color: t.color,
        backgroundColor: t.bg,
        boxShadow: `0 0 12px rgba(${t.glow},0.7)`,
        '&:hover': {
          backgroundColor: t.hoverBg,
          boxShadow: `0 0 20px rgba(${t.glow},0.9)`,
        },
        '&.Mui-disabled': {
          backgroundColor: '#6b5b4b',
          color: '#b8a898',
          boxShadow: 'none',
        },
        ...sx, // permette a chi lo usa di aggiungere altri stili (es. la posizione)
      }}
    />
  );
}

export default FestiveButton;