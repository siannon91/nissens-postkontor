import { useState } from 'react';
import { Box, Dialog, DialogContent } from '@mui/material';
import bakgrunn from './assets/images/bakgrunn-desktop.jpg';
import LetterPile from './components/LetterPile';
import { kidsWishlist } from './data/kidsWishlist';
import Letter from './components/Letter';
import FestiveButton from './components/FestiveButton';
import LetterCounter from './components/LetterCounter';

const BACKGROUND_RATIO = 1376 / 768;

function App() {
  const [currentKid, setCurrentKid] = useState(null);
  const [sentIds, setSentIds] = useState([]);

  const openRandomLetter = (excludeId = null, sent = sentIds) => {
    const remaining = kidsWishlist.filter((kid) => !sent.includes(kid.id)); // lettere ancora nella pila
   let candidates = remaining.filter((kid) => kid.id !== excludeId); // togli quella appena letta
    if (candidates.length === 0) candidates = remaining; // se è rimasta solo quella, usa lei
   if (candidates.length === 0) { setCurrentKid(null); return; } // pila vuota: chiudi la lettera
   const index = Math.floor(Math.random() * candidates.length);
   setCurrentKid(candidates[index]);
  };

  const sendToFactory = () => {
    const newSent = [...sentIds, currentKid.id]; // lista aggiornata, calcolata qui
    setSentIds(newSent);
    openRandomLetter(null, newSent); // apre subito la prossima, usando la lista aggiornata
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

      <LetterCounter remaining={kidsWishlist.length - sentIds.length} />
    
      <Dialog 
        open={currentKid !== null}
        onClose={() => setCurrentKid(null)}
        slotProps={{
          paper: { sx: { backgroundColor: 'transparent', boxShadow: 'none', filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.6))' } },
        }}
      >
        <DialogContent>
          {currentKid && <Letter kid={currentKid} />}
        </DialogContent>
      </Dialog>
      
        {currentKid && (
          <>
            <FestiveButton
              tone="gold"
              onClick={nextLetter}
              sx={{
                position: 'fixed',
                zIndex: 1400,
                right: '4%',
                top: '50%',
                transform: 'translateY(-50%)',
                }}
              >
                Neste brev
              </FestiveButton>

              <FestiveButton
                tone="green"
                onClick={sendToFactory}
                sx={{
                  position: 'fixed',
                  zIndex: 1400,
                  left: '50%',
                  bottom: 24,
                  transform: 'translateX(-50%)', // centrato in orizzontale
                }}
              >
                Send til leketøysfabrikken
            </FestiveButton>
          </>
        )}
      

    </Box>
  );
}


export default App;