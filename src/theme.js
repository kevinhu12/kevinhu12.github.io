import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: ['League Spartan', 'regular'].join(',')
    },
    palette: {
        primary: { main: '#000000' },
        secondary: { main: '#ffffff' },
        info: { main: '#9bbdf9' },
        background: { default: '#f1e3d3' }
    },
    sectionSpacing: 100,
    gridSpacing: 2,
    customIconDimensions: '2.5rem',
    chip: {
        height: 40,
        fontSize: '0.9rem',
        fontWeight: 'bold'
    },
    card: {
        maxWidth: 350,
        mediaHeight: 200
    }
});

export default theme;
