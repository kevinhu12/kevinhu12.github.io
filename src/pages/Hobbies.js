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
import { motion } from 'framer-motion';

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
                            <Divider sx={{ '&::before, &::after': { borderColor: 'black' }, fontWeight: 'bold' }}>{hobby.hobby}</Divider>
                            <motion.div
                                initial={{ y: 300 }}
                                whileInView={{ y: 0, transition: { type: 'spring', bounce: 0.3, duration: 1 }}}
                                viewport={{ once: true }}
                            >
                                <Grid container alignItems='center'>

                                    {/* Image and content */}
                                    <Grid 
                                        item 
                                        xs={12} 
                                        md={4}
                                        display='flex'
                                        justifyContent='center'
                                        sx={{ [theme.breakpoints.down('md')]: { mb: 1 }}}
                                    >
                                        <Box
                                            component='img'
                                            sx={{ 
                                                maxHeight: 270, 
                                                maxWidth: '90%',
                                                borderRadius: 3,
                                                margin: '1.2rem 0rem'
                                            }}
                                            alt={hobby.hobby}
                                            src={hobby.img}
                                        />
                                    </Grid>
                                    <Grid 
                                        item 
                                        xs={12}
                                        md={8}
                                        display='flex'
                                        justifyContent='center'
                                    >
                                        <Text type='secondary'>{hobby.description}</Text>
                                    </Grid>

                                </Grid>
                            </motion.div>
                        </Box>
                    ))}
                </ContentBox>
            </Grid>
        </Grid>
    </Section>
)

export default Hobbies;
