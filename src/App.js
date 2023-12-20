import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Home />
                <AboutMe />
            </ThemeProvider>
        </>
    );
}

export default App;
