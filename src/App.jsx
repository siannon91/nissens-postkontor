import { useState } from 'react';
import { Box, Dialog, DialogTitle, DialogContent } from '@mui/material';
import bakgrunn from './assets/images/bakgrunn-desktop.jpg';
import LetterPile from './components/LetterPile';
import { kidsWishlist } from './data/kidsWishlist';

function App() {
  const [currentKid, setCurrentKid] = useState(null);

  const openRandomLetter = () => {
    const index = Math.floor(Math.random() * kidsWishlist.length);
    setCurrentKid(kidsWishlist[index]);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: `url(${bakgrunn})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <LetterPile onOpen={openRandomLetter} />
    
      <Dialog open={currentKid !== null} onClose={() => setCurrentKid(null)}>
        <DialogTitle>{currentKid?.name}</DialogTitle>
        <DialogContent>Her kommer brevet</DialogContent>
      </Dialog>
    
    </Box>
  );
}

export default App;