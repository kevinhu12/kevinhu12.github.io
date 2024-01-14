import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CenterBox from '../shared/CenterBox';
import CenterStack from '../shared/CenterStack';
import Chip from '@mui/material/Chip';
import ContentBox from '../shared/ContentBox';
import Grid from '@mui/material/Grid';
import Section from '../shared/Section';
import SectionHeader from '../shared/SectionHeader';
import Stack from '@mui/material/Stack';
import Text from '../shared/Text';
import { projects } from '../utils/constants';

const Projects = ({
    theme
}) => (
    <Section>
        <Grid container spacing={theme.gridSpacing}>
            <Grid item xs={12}>
                <SectionHeader>
                    Projects
                </SectionHeader>
            </Grid>
            
            {/* Project cards */}
            <Grid item xs={12}>
                <ContentBox backgroundColor={theme.palette.background.projects}>
                    <CenterStack direction='row' spacing={2} useFlexGap sx={{ margin: '2rem' }}>
                        {projects.map((project) => (
                            <Card 
                                sx={{ 
                                    maxWidth: theme.card.maxWidth, 
                                    background: theme.card.backgroundColor,
                                    [theme.breakpoints.down('md')]: { maxWidth: '95%' }
                                }}
                            >
                                <CardMedia
                                    sx={{ height: theme.card.mediaHeight }}
                                    image={project.img.src}
                                    title={project.img.alt}
                                />
                                <CardContent>
                                    <Text bold={true}>{project.name}</Text>
                                    <Stack direction='row' spacing={1} useFlexGap>
                                        {project.skills.map((skill) => (
                                            <Chip
                                                color='info'
                                                label={skill}
                                                size='small'
                                                sx={{ fontWeight: theme.chip.fontWeight }}
                                            />
                                        ))}
                                    </Stack>
                                    <Text type='secondary' paddingTop='1rem'>
                                        {project.description}
                                    </Text>
                                </CardContent>
                            </Card>
                        ))}
                    </CenterStack>
                    <CenterBox sx={{ margin: '2rem' }}>
                        <Text>You can find source code for all these projects (and more!) on my Github account. 🙂</Text>
                    </CenterBox>
                </ContentBox>
            </Grid>
        </Grid>
    </Section>
)

export default Projects;
