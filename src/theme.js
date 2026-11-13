import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#9b1c2c' },
    secondary: { main: '#2e5d3a' },
    warning: { main: '#e8b04a' },
    background: { default: '#3b2416', paper: '#f6ecd2' },
  },
  typography: {
    fontFamily: '"Caveat", cursive',
    h1: { fontFamily: '"Mountains of Christmas", cursive', fontWeight: 700 },
    h2: { fontFamily: '"Mountains of Christmas", cursive', fontWeight: 700 },
    h3: { fontFamily: '"Mountains of Christmas", cursive', fontWeight: 700 },
  },
});

export default theme;