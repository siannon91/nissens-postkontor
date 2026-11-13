import { useState } from 'react';
import { Box, Dialog, DialogTitle, DialogContent } from '@mui/material';
import bakgrunn from './assets/images/bakgrunn-desktop.jpg';
import LetterPile from './components/LetterPile';
import { kidsWishlist } from './data/kidsWishlist';
import Letter from './components/Letter';

const BACKGROUND_RATIO = 1376 / 768;

function App() {
  const [currentKid, setCurrentKid] = useState(null);

  const openRandomLetter = () => {
    const index = Math.floor(Math.random() * kidsWishlist.length);
    setCurrentKid(kidsWishlist[index]);
  };

  return (
    <Box sx={{ position: 'relative', width: '100vw', height: '100dvh', overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: `max(100vw, calc(100dvh * ${BACKGROUND_RATIO}))`,
          aspectRatio: `${BACKGROUND_RATIO}`,
          backgroundImage: `url(${bakgrunn})`,
          backgroundSize: '100% 100%',
      }}
    >
      <LetterPile onOpen={openRandomLetter} />
      </Box>
      <Dialog open={currentKid !== null} onClose={() => setCurrentKid(null)}>
        <DialogContent>
          {currentKid && <Letter kid={currentKid} />}
        </DialogContent>
      </Dialog>
  
    </Box>
  );
}

export default App;