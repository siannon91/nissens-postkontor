import { useState } from 'react';
import { Box, Dialog, DialogContent, useMediaQuery  } from '@mui/material';
import bakgrunn from './assets/images/bakgrunn-desktop.jpg';
import LetterPile from './components/LetterPile';
import { kidsWishlist } from './data/kidsWishlist';
import Letter from './components/Letter';
import FestiveButton from './components/FestiveButton';
import LetterCounter from './components/LetterCounter';
import FinalMessage from './components/FinalMessage';
import KidStatus from './components/KidStatus';
import Sparkles from './components/Sparkles';
import bakgrunnMobil from './assets/images/bakgrunn-mobil.jpg';

const BACKGROUND_RATIO = 1376 / 768;
const MOBILE_RATIO = 768 / 1376;

function App() {
  const isPortrait = useMediaQuery('(orientation: portrait)');
  const ratio = isPortrait ? MOBILE_RATIO : BACKGROUND_RATIO;
  const background = isPortrait ? bakgrunnMobil : bakgrunn;
  const [currentKid, setCurrentKid] = useState(null);
  const [sentIds, setSentIds] = useState([]);
  const [selectedGifts, setSelectedGifts] = useState([]);
  const [enter, setEnter] = useState('pile');
  const [exit, setExit] = useState(null);
  const [stamped, setStamped] = useState(false);
  const [busy, setBusy] = useState(false);
  const [letterKey, setLetterKey] = useState(0);

  const showKid = (kid, from = 'pile') => {
    setEnter(from);
    setExit(null);
    setStamped(false);
    setLetterKey(letterKey + 1);
    setCurrentKid(kid);
    setSelectedGifts(kid.naughty ? [kid.wishlist[0]] : kid.wishlist);
  };

  const openRandomLetter = (excludeId = null, sent = sentIds, from = 'pile') => {
    const remaining = kidsWishlist.filter((kid) => !sent.includes(kid.id)); // lettere ancora nella pila
   let candidates = remaining.filter((kid) => kid.id !== excludeId); // togli quella appena letta
    if (candidates.length === 0) candidates = remaining; // se è rimasta solo quella, usa lei
   if (candidates.length === 0) { setCurrentKid(null); return; } // pila vuota: chiudi la lettera
   const index = Math.floor(Math.random() * candidates.length);
   showKid(candidates[index], from);
  };

  const sendToFactory = () => {
    setBusy(true);
    setStamped(true);
    setTimeout(() => {
      setExit('down');
      setTimeout(() => {
        const newSent = [...sentIds, currentKid.id]; // lista aggiornata, calcolata qui
        setSentIds(newSent);
        setBusy(false);
        openRandomLetter(null, newSent, 'right');
      }, 500);
    }, 1500);
  };

  const nextLetter = () => {
    setBusy(true);
    setExit('left');
    setTimeout(() => {
      setBusy(false);
      openRandomLetter(currentKid.id, sentIds, 'right');
    }, 400);  
  };

  const toggleGift = (gift) => {
    if (selectedGifts.includes(gift)) {
      setSelectedGifts(selectedGifts.filter((g) => g !== gift));
      return;
    }
    if (currentKid.naughty && selectedGifts.length >= 2) return;
    setSelectedGifts([...selectedGifts, gift]);
  };

  const restart = () => {
  setSentIds([]); // tutte le lettere tornano nella pila
  setCurrentKid(null);
  };

  return (
    <Box sx={{ position: 'relative', width: '100vw', height: '100dvh', overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: `max(100vw, calc(100dvh * ${ratio}))`,
          aspectRatio: `${ratio}`,
          backgroundImage: `url(${background})`,
          backgroundSize: '100% 100%',
      }}
    >
    <LetterPile onOpen={() => openRandomLetter()} />

    </Box>

      <LetterCounter remaining={kidsWishlist.length - sentIds.length} />
    
      <KidStatus kid={currentKid} />

      {currentKid && currentKid.naughty === false && <Sparkles />}

      {sentIds.length === kidsWishlist.length && <FinalMessage onRestart={restart} />}

      <Dialog 
        open={currentKid !== null}
        onClose={(event, reason) => {
          if (reason === 'backdropClick') return;
          setCurrentKid(null);
        }}
        slotProps={{
          paper: { 
            sx: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
              overflow: 'visible',
              filter: currentKid?.naughty === false
              ? 'drop-shadow(0 6px 10px rgba(0,0,0,0.6)) drop-shadow(0 0 8px #ffd978) drop-shadow(0 0 22px #e8b04a)' // bravo
              : 'drop-shadow(0 6px 10px rgba(0,0,0,0.6))', // non bravo
            },
          },
        }}
      >
        <DialogContent sx={{ overflow: 'visible' }}>
          {currentKid && (
            <Letter
              key={letterKey}
              kid={currentKid}
              selected={selectedGifts}
              onToggle={toggleGift}
              enter={enter}
              exit={exit}
              stamped={stamped}
            />
          )}
        </DialogContent>
        
      </Dialog>
      
        {currentKid && (
          <>
            <FestiveButton
              tone="gold"
              onClick={nextLetter}
              disabled={busy}
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
                onClick={sendToFactory} disabled={selectedGifts.length === 0 || busy}
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