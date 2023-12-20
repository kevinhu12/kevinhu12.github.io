import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import WorkExperience from './pages/workExperience/WorkExperience';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Home />
                <AboutMe />
                <WorkExperience />
            </ThemeProvider>
        </>
    );
}

export default App;
