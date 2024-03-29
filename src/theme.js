import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: ['League Spartan', 'regular'].join(',')
    },
    palette: {
        primary: { main: '#000000' },
        secondary: { main: '#ffffff' },
        info: { main: '#9bbdf9' },
        background: { 
            default: '#f1e3d3',
            workExperience: '#ede6f2',
            projects: '#c9e4de',
            hobbies: '#c6def1'
        }
    },
    sectionSpacing: 100,
    gridSpacing: 2,
    customIconDimensions: '2.5rem',
    chip: {
        fontWeight: 'bold'
    },
    card: {
        maxWidth: 350,
        mediaHeight: 300,
        backgroundColor: '#ffffff99'
    }
});

export default theme;
