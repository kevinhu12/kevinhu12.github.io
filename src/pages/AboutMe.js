import Avatar from '@mui/material/Avatar';
import CenterBox from '../shared/CenterBox';
import Grid from '@mui/material/Grid';
import Section from '../shared/Section';
import SectionHeader from '../shared/SectionHeader';
import Text from '../shared/Text';
import avatar from '../assets/headshot.jpg';
import { aboutMe } from '../utils/constants';

const AboutMe = ({
    theme
}) => (
    <Section>
        <Grid container spacing={theme.gridSpacing}>
            <Grid 
                item 
                xs={12} 
                md={6}
                display='flex'
                flexDirection='column'
                justifyContent='center'
                sx={{ [theme.breakpoints.down('md')]: { mb: 1 }}}
            >
                <SectionHeader sx={{ paddingBottom: '1rem' }}>About Me</SectionHeader>
                {aboutMe.map((text) => (
                    <Text sx={{ paddingBottom: '1rem' }}>{text}</Text>
                ))}
            </Grid>
            <Grid 
                item 
                xs={12}
                md={6}
                display='flex'
                justifyContent='center'
            >
                <CenterBox>
                    <Avatar
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
