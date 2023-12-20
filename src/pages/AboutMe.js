import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Section from '../shared/Section';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const AboutMe = ({

}) => {
    const theme = useTheme();

    return (
        <Section>
            <Grid container spacing={theme.gridSpacing}>
                <Grid item xs={6}>
                    <Typography color='primary'>text</Typography>
                    <Typography color='primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ backgroundColor: 'blue' }}>
                        <Typography color='secondary'>
                            test
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Section>
    )
}

export default AboutMe;