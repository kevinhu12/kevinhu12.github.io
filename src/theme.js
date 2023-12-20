import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: ['League Spartan', 'regular'].join(',')
    },
    palette: {
        primary: { main: '#000000' },
        secondary: { main: '#ffffff' }
    },
    sectionSpacing: 100,
    gridSpacing: 2
});

export default theme;
