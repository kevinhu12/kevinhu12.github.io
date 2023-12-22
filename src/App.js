import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import WorkExperience from './pages/WorkExperience';
import Projects from './pages/Projects';
import ContactInfo from './pages/ContactInfo';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
    return (
        <ParallaxProvider>
            <ThemeProvider theme={theme}>
                <Home />
                <AboutMe />
                <WorkExperience />
                <Projects />
                <ContactInfo />
            </ThemeProvider>
        </ParallaxProvider>
    );
}

export default App;
