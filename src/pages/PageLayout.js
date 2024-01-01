import Home from './Home';
import AboutMe from './AboutMe';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Hobbies from './Hobbies';
import ContactInfo from './ContactInfo';
import { useTheme } from '@mui/material/styles';

const PageLayout = () => {
    const theme = useTheme()

    return (
        <>
            <Home theme={theme} />
            <AboutMe theme={theme} />
            <WorkExperience theme={theme} />
            <Projects theme={theme} />
            <Hobbies theme={theme} />
            <ContactInfo theme={theme} />
        </>
    )
}

export default PageLayout;
