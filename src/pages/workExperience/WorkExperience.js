import Box from '@mui/material/Box';
import CenterBox from '../../shared/CenterBox';
import Grid from '@mui/material/Grid';
import Section from '../../shared/Section';
import SectionHeader from '../../shared/SectionHeader';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import WorkExperienceRow from './WorkExperienceRow';

const WorkExperience = ({

}) => {
    const theme = useTheme();

    return (
        <Section>
            <Grid container spacing={theme.gridSpacing}>
                <Grid item xs={12}>
                    <SectionHeader>Work Experience</SectionHeader>
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={6}>
                        <WorkExperienceRow />
                </Grid>
                <Grid item xs={3} />
            </Grid>
        </Section>
    )
}

export default WorkExperience;
