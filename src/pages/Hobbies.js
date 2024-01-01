import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CenterBox from '../shared/CenterBox';
import CenterStack from '../shared/CenterStack';
import ContentBox from '../shared/ContentBox';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Section from '../shared/Section';
import SectionHeader from '../shared/SectionHeader';
import Text from '../shared/Text';
import { hobbies } from '../utils/constants';

const Hobbies = ({
    theme
}) => (
    <Section paddingBottom='6rem'>
        <Grid container spacing={theme.gridSpacing}>
            <Grid item xs={12}>
                <SectionHeader>
                    Hobbies
                </SectionHeader>
            </Grid>
            
            {/* Hobby entries */}
            <Grid item xs={12}>
                <ContentBox backgroundColor={theme.palette.background.hobbies}>
                    {hobbies.map((hobby) => (
                        <Box sx={{ margin: '2rem' }}>
                            <Divider sx={{ fontWeight: 'bold' }}>{hobby.hobby}</Divider>
                            <Grid container alignItems='center'>

                                {/* Image and content */}
                                <Grid item xs={4}>
                                    <Box
                                        component='img'
                                        sx={{ 
                                            maxHeight: 270, 
                                            maxWidth: 330,
                                            borderRadius: 3,
                                            margin: '1.2rem 0rem'
                                        }}
                                        alt={hobby.hobby}
                                        src={hobby.img}
                                    />
                                </Grid>
                                <Grid item xs={8}>
                                    <Text type='secondary'>{hobby.description}</Text>
                                </Grid>

                            </Grid>
                        </Box>
                    ))}
                </ContentBox>
            </Grid>
        </Grid>
    </Section>
)

export default Hobbies;
