import PageLayout from './pages/PageLayout';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
    return (
        <ParallaxProvider>
            <ThemeProvider theme={theme}>
                <PageLayout />
            </ThemeProvider>
        </ParallaxProvider>
    );
}

export default App;
