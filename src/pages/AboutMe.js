import Avatar from '@mui/material/Avatar';
import CenterBox from '../shared/CenterBox';
import Grid from '@mui/material/Grid';
import Section from '../shared/Section';
import SectionHeader from '../shared/SectionHeader';
import Text from '../shared/Text';
import avatar from '../assets/logo.png';

const AboutMe = ({
    theme
}) => (
    <Section>
        <Grid container spacing={theme.gridSpacing}>
            <Grid item xs={6}>
                <SectionHeader>About Me</SectionHeader>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </Grid>
            <Grid item xs={6}>
                <CenterBox>
                    <Avatar 
                        variant='rounded'
                        alt='Kevin Hu Avatar'
                        src={avatar}
                        sx={{ width: 300, height: 300, border: '0.2rem solid #000000' }}
                    />
                </CenterBox>
            </Grid>
        </Grid>
    </Section>
)

export default AboutMe;
