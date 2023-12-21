import Box from '@mui/material/Box';
import CenterBox from '../../shared/CenterBox';
import CustomIcon from '../../shared/CustomIcon';
import Grid from '@mui/material/Grid';
import Section from '../../shared/Section';
import SectionHeader from '../../shared/SectionHeader';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Text from '../../shared/Text';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import WorkExperienceRow from './WorkExperienceRow';

import { workExperience } from '../../utils/constants';

const WorkExperience = ({

}) => {
    const theme = useTheme();
    const numExperiences = workExperience.length;

    return (
        <Section>
            <Grid container spacing={theme.gridSpacing}>
                <Grid item xs={12}>
                    <SectionHeader>Work Experience</SectionHeader>
                </Grid>
                <Grid item xs={8}>
                        {/* <WorkExperienceRow /> */}
                        <Timeline
                            sx={{ [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 } }}
                        >
                            {workExperience.map((experience, idx) => (
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot>
                                            <CustomIcon img={experience.logo} theme={theme} />
                                        </TimelineDot>
                                        {idx != numExperiences - 1 && (<TimelineConnector />)}
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Text bold={true}>{experience.company}</Text>
                                        <Text>{`${experience.title} • ${experience.dates}`}</Text>
                                        <Text type='secondary' paddingTop='1rem' paddingBottom='2rem'>
                                            {experience.description}
                                        </Text>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </Timeline>
                </Grid>
                <Grid item xs={4} />
            </Grid>
        </Section>
    )
}

export default WorkExperience;
