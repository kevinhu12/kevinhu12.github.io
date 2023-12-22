import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CenterBox from '../shared/CenterBox';
import CenterStack from '../shared/CenterStack';
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
                <CenterStack direction='row' spacing={2} useFlexGap>
                    {projects.map((project) => (
                        <Card sx={{ maxWidth: theme.card.maxWidth }}>
                            <CardMedia
                                sx={{ height: theme.card.mediaHeight }}
                                image={project.img.src}
                                title={project.img.alt}
                            />
                            <CardContent>
                                <Text>{project.name}</Text>
                                <Text>{project.description}</Text>
                            </CardContent>
                        </Card>
                    ))}
                </CenterStack>
            </Grid>

            <Grid item xs={12}>
                <CenterBox>
                    <Text>You can find all these projects (and more!) on my github account 🙂</Text>
                </CenterBox>
            </Grid>
        </Grid>
    </Section>
)

export default Projects;
