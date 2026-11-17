import { Typography } from '@mui/material';

function KidStatus({ kid }) {
  if (!kid) return null;

  const isNice = kid.naughty === false;

  return (
    <Typography
      sx={{
        position: 'fixed',
        zIndex: 1400,
        top: 56,
        left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: '"Mountains of Christmas", cursive',
        fontWeight: 700,
        fontSize: { xs: '1.4rem', sm: '1.8rem' },
        whiteSpace: 'nowrap',
        color: isNice ? '#ffd978' : '#cfe0f5',
        textShadow: isNice
          ? '0 0 12px rgba(232,176,74,0.9), 0 2px 4px rgba(0,0,0,0.8)'
          : '0 2px 4px rgba(0,0,0,0.8)',
      }}
    >
        {isNice ? 'Snill barn' : 'Trenger en liten påminnelse'}
    </Typography>
  );
}

export default KidStatus;