import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CenterBox from '../shared/CenterBox';
import CenterStack from '../shared/CenterStack';
import ContentBox from '../shared/ContentBox';
import Grid from '@mui/material/Grid';
import Section from '../shared/Section';
import SectionHeader from '../shared/SectionHeader';
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
                            <Card sx={{ maxWidth: theme.card.maxWidth }}>
                                <CardMedia
                                    sx={{ height: theme.card.mediaHeight }}
                                    image={project.img.src}
                                    title={project.img.alt}
                                />
                                <CardContent>
                                    <Text bold={true}>{project.name}</Text>
                                    <Text type='secondary'>{project.description}</Text>
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
