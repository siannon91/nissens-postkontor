import { Paper, Typography, List, ListItem } from '@mui/material';

function Letter({ kid }) {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4">Kjære Nissen,</Typography>
      <Typography>
        Jeg heter {kid.name} og er {kid.age} år.
      </Typography>
      <Typography>Dette ønsker jeg meg:</Typography>
      <List>
        {kid.wishlist.map((gift) => (
          <ListItem key={gift}>{gift}</ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default Letter;