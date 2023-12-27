import PageLayout from './pages/PageLayout';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

function App() {
    return (
        <ParallaxProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <PageLayout />
            </ThemeProvider>
        </ParallaxProvider>
    );
}

export default App;
