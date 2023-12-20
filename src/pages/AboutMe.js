import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CenterBox from '../shared/CenterBox';
import Grid from '@mui/material/Grid';
import Section from '../shared/Section';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import avatar from '../assets/logo.png';

const AboutMe = ({

}) => {
    const theme = useTheme();

    return (
        <Section>
            <Grid container spacing={theme.gridSpacing}>
                <Grid item xs={6}>
                    <Typography color='primary' variant='h4' sx={{ fontWeight: 'bold' }}>About Me</Typography>
                    <Typography color='primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
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
}

export default AboutMe;
