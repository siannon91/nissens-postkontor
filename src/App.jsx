import { useState } from 'react';
import { Box, Button, Dialog, DialogContent } from '@mui/material';
import bakgrunn from './assets/images/bakgrunn-desktop.jpg';
import LetterPile from './components/LetterPile';
import { kidsWishlist } from './data/kidsWishlist';
import Letter from './components/Letter';

const BACKGROUND_RATIO = 1376 / 768;

function App() {
  const [currentKid, setCurrentKid] = useState(null);
  const [sentIds, setSentIds] = useState([]);

  const openRandomLetter = (excludeId = null) => {
    const remaining = kidsWishlist.filter((kid) => !sentIds.includes(kid.id)); // lettere ancora nella pila
   let candidates = remaining.filter((kid) => kid.id !== excludeId); // togli quella appena letta
    if (candidates.length === 0) candidates = remaining; // se è rimasta solo quella, usa lei
   if (candidates.length === 0) return; // pila vuota: per ora non fa niente
   const index = Math.floor(Math.random() * candidates.length);
   setCurrentKid(candidates[index]);
  };

  const sendToFactory = () => {
    setSentIds([...sentIds, currentKid.id]); // aggiungi il bambino all'elenco degli spediti
   setCurrentKid(null); // chiudi la lettera
  };

  const nextLetter = () => {
    openRandomLetter(currentKid.id); // la lettera torna nella pila e ne esce un'altra
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
      <LetterPile onOpen={() => openRandomLetter()} />
      </Box>
      <Dialog 
        open={currentKid !== null}
        onClose={() => setCurrentKid(null)}
        slotProps={{
          paper: { sx: { backgroundColor: 'transparent', boxShadow: 'none', filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.6))' } },
        }}
      >
        <DialogContent>
          {currentKid && (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' }, // telefono: sotto; schermi medi in su: a destra
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Letter kid={currentKid} />
                <Button variant="contained" color="warning" onClick={nextLetter}>
                  Neste brev
                </Button>
              </Box>
              <Button variant="contained" color="secondary" onClick={sendToFactory}>
                Send til leketøysfabrikken
              </Button>
            </Box>
          )}
        </DialogContent>
      </Dialog>
  
    </Box>
  );
}

export default App;