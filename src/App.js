import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import WorkExperience from './pages/WorkExperience';
import Projects from './pages/Projects';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Home />
                <AboutMe />
                <WorkExperience />
                <Projects />
            </ThemeProvider>
        </>
    );
}

export default App;
