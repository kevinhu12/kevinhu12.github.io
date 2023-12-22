import Box from '@mui/material/Box';
import Section from '../shared/Section';
import Text from '../shared/Text';
import { motion } from 'framer-motion';

import { ParallaxBanner } from 'react-scroll-parallax';
import banner from '../assets/banner.jpg';

const Home = ({

}) => {

    const letters = Array.from('I\'m Kevin')

    return (
        
            <ParallaxBanner
                layers={[{ image: banner, speed: -25 }]}
                style={{ height: '40rem' }}
            >
                <Section paddingTop='0rem'>
                    <Box position='absolute' display='flex' flexDirection='row'>
                    
                        {letters.map((word, idx) => (
                            <motion.span
                                key={idx} 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0, 
                                    transition: { 
                                        type: 'spring', 
                                        damping: 12, 
                                        stiffness: 100, 
                                        delay: `${(idx+6)/10}`
                                    }
                                }}
                            >
                                <Text 
                                    color='secondary' 
                                    sx={{ mt: '12rem', fontSize: '6rem' }}
                                >
                                    {word === " " ? "\u00A0" : word}
                                </Text>
                            </motion.span>
                            
                        ))}
                        
                    </Box>
                    {/* <Text 
                        color='secondary' 
                        sx={{ mt: '12rem', fontSize: '6rem', position: 'absolute' }}
                    >
                        I'm Kevin
                    </Text> */}
                    <Text
                        align='center'
                        color='secondary'
                        sx={{ mt: '20rem', fontSize: '2rem', position: 'absolute' }}
                    >
                        An aspiring developer in the software world.
                    </Text>
                {/* <motion.div 
                    variants={container} 
                    initial='hidden' 
                    animate='visible' 
                    style={{ overflow: 'hidden', display: 'flex' }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Text>
                                {`Hello!`} 
                            </Text>
                        </Grid>

                        <Grid item xs={12} display='flex' flexDirection='row'>
                            {letters.map((word, idx) => (
                                <motion.span variants={child} key={idx}>
                                    <Text>
                                    {word === " " ? "\u00A0" : word}
                                    </Text>
                                </motion.span>
                            ))}
                        </Grid>
                    </Grid>
                </motion.div> */}
                </Section>
            </ParallaxBanner>
    )
}

export default Home;
