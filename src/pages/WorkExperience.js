import CenterBox from '../shared/CenterBox';
import CenterStack from '../shared/CenterStack';
import Chip from '@mui/material/Chip';
import ContentBox from '../shared/ContentBox';
import CustomIcon from '../shared/CustomIcon';
import Grid from '@mui/material/Grid';
import Section from '../shared/Section';
import SectionHeader from '../shared/SectionHeader';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Text from '../shared/Text';
import { skills, workExperience } from '../utils/constants';

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
                <Grid item xs={8}>
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

                {/* Skills and Languages */}
                <Grid item xs={4}>
                    <ContentBox backgroundColor={theme.palette.background.workExperience}>
                        {skills.map((skill) => (
                            <>
                                <CenterBox>
                                    <Text bold={true} paddingTop='1.5rem'>{skill.category}</Text>
                                </CenterBox>
                                <CenterStack 
                                    direction='row' 
                                    spacing={2} 
                                    useFlexGap 
                                    paddingTop='1rem'
                                    paddingBottom='1.5rem'
                                    sx={{ margin: '0rem 0.5rem' }}
                                >
                                    {skill.items.map((item) => (
                                        <Chip
                                            color='info'
                                            label={item}
                                            sx={{ 
                                                height: theme.chip.height, 
                                                fontSize: theme.chip.fontSize,
                                                fontWeight: theme.chip.fontWeight 
                                            }}
                                        />
                                    ))}
                                </CenterStack>
                            </>
                        ))}
                    </ContentBox>
                </Grid>
            </Grid>
        </Section>
    )
}

export default WorkExperience;
