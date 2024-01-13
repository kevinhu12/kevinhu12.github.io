import Chip from '@mui/material/Chip';
import ContentBox from '../shared/ContentBox';
import CustomIcon from '../shared/CustomIcon';
import Grid from '@mui/material/Grid';
import Section from '../shared/Section';
import SectionHeader from '../shared/SectionHeader';
import Stack from '@mui/material/Stack';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Text from '../shared/Text';
import { workExperience } from '../utils/constants';

const WorkExperience = ({
    theme
}) => {
    const lastIdx = workExperience.length - 1;

    return (
        <Section>
            <Grid container spacing={theme.gridSpacing}>
                <Grid item xs={12}>
                    <SectionHeader>Work Experience</SectionHeader>
                </Grid>

                {/* Work Timeline */}
                <Grid item xs={12}>
                    <ContentBox backgroundColor={theme.palette.background.workExperience}>
                        <Timeline
                            sx={{ [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 } }}
                        >
                            {workExperience.map((experience, idx) => (
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot sx={{ backgroundColor: 'white' }}>
                                            <CustomIcon img={experience.logo} theme={theme} />
                                        </TimelineDot>
                                        {idx != lastIdx && (<TimelineConnector />)}
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Text bold={true}>{experience.company}</Text>
                                        <Text>{`${experience.title} • ${experience.dates}`}</Text>
                                        <Stack direction='row' spacing={1} useFlexGap>
                                            {experience.skills.map((skill) => (
                                                <Chip
                                                    color='info'
                                                    label={skill}
                                                    size='small'
                                                    sx={{ fontWeight: theme.chip.fontWeight }}
                                                />
                                            ))}
                                        </Stack>
                                        <Text 
                                            type='secondary' 
                                            paddingTop='1rem' 
                                            paddingBottom={idx != lastIdx ? '2rem' : '0rem'}
                                        >
                                            {experience.description}
                                        </Text>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </ContentBox>
                </Grid>
            </Grid>
        </Section>
    )
}

export default WorkExperience;
