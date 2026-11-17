import { Paper, Typography, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { keyframes } from '@mui/material/styles';
import Stamp from './Stamp';

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

const enterRight = keyframes`
  from { opacity: 0; transform: translateX(150px) rotate(4deg); }
  to { opacity: 1; transform: translateX(0) rotate(-1.5deg); }
`;

const exitDown = keyframes`
  from { opacity: 1; transform: translateY(0) rotate(-1.5deg); }
  to { opacity: 0; transform: translateY(80vh) rotate(6deg); }
`;

const exitLeft = keyframes`
  from { opacity: 1; transform: translateX(0) rotate(-1.5deg); }
  to { opacity: 0; transform: translateX(-80vw) rotate(-10deg); }
`;

function Letter({ kid, selected, onToggle, enter, exit, stamped }) {

  const animation =
  exit === 'down' ? `${exitDown} 0.5s ease-in forwards`
  : exit === 'left' ? `${exitLeft} 0.4s ease-in forwards`
  : enter === 'right' ? `${enterRight} 0.7s ease-out`
  : `${openLetter} 0.7s ease-out`;

  return (
    <Paper sx={{ p: 3, color: '#2b2f4a', fontSize: '1.6rem', borderRadius: 0,
        clipPath: 'polygon(0% 1%, 25% 0%, 50% 1.5%, 75% 0%, 100% 1%, 99% 30%, 100% 60%, 99% 100%, 70% 99%, 40% 100%, 10% 99%, 0% 100%, 1% 65%, 0% 30%)',
        transform: 'rotate(-1.5deg)',
        animation,
        position: 'relative',
     }}>
      <Typography variant="h4">Kjære Nissen,</Typography>
      <Typography variant="inherit">
        Jeg heter {kid.name} og er {kid.age} år.
      </Typography>
      <Typography variant="inherit">Dette ønsker jeg meg:</Typography>
      
      <FormGroup>
        {kid.wishlist.map((gift) => (
          <FormControlLabel
            key={gift}
            label={gift}
            sx={{ '& .MuiFormControlLabel-label': { fontSize: '1.3rem' } }} 
            control={
              <Checkbox
                checked={selected.includes(gift)} // spuntata se il regalo è tra quelli scelti
                onChange={() => onToggle(gift)} // avvisa App quando clicchi
                color="primary"
                disabled={kid.naughty && selected.length >= 2 && !selected.includes(gift)} // non bravo con 2 spunte: le altre caselle si bloccano
              />
            }
          />
        ))}
      </FormGroup>

      {stamped && <Stamp nice={kid.naughty === false} />}

    </Paper>
  );
}

export default Letter;