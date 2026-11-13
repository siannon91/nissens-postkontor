import { Paper, Typography, List, ListItem } from '@mui/material';
import { keyframes } from '@mui/material/styles';

const openLetter = keyframes`
  from {
    opacity: 0;
    transform: translateY(120px) scale(0.3) rotate(-12deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1) rotate(-1.5deg);
  }
`;

function Letter({ kid }) {
  return (
    <Paper sx={{ p: 3, color: '#2b2f4a', fontSize: '1.6rem', borderRadius: 0,
        clipPath: 'polygon(0% 1%, 25% 0%, 50% 1.5%, 75% 0%, 100% 1%, 99% 30%, 100% 60%, 99% 100%, 70% 99%, 40% 100%, 10% 99%, 0% 100%, 1% 65%, 0% 30%)',
        transform: 'rotate(-1.5deg)',
        animation: `${openLetter} 0.5s ease-out`,
        '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
     }}>
      <Typography variant="h4">Kjære Nissen,</Typography>
      <Typography variant="inherit">
        Jeg heter {kid.name} og er {kid.age} år.
      </Typography>
      <Typography variant="inherit">Dette ønsker jeg meg:</Typography>
      <List>
        {kid.wishlist.map((gift) => (
          <ListItem key={gift} sx={{ fontSize: 'inherit' }}>{gift}</ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default Letter;