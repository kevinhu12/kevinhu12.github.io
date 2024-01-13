import Box from '@mui/material/Box';
import Section from '../shared/Section';
import Text from '../shared/Text';
import { motion } from 'framer-motion';
import { ParallaxBanner } from 'react-scroll-parallax';
import { letters } from '../utils/constants';
import banner from '../assets/banner.jpg';

const Home = ({
    theme
}) => (
    <ParallaxBanner
        layers={[{ image: banner, speed: -25 }]}
        style={{ height: '40rem' }}
    >
        <Section paddingTop='0rem'>
            <Box 
                position='absolute' 
                display='flex' 
                flexDirection='row'
            >
            
                {/* Letter animation */}
                {letters.map((letter, idx) => (
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
                            {letter === ' ' ? '\u00A0' : letter}
                        </Text>
                    </motion.span>
                ))}
            </Box>
            
            <Text
                color='secondary'
                sx={{ mt: '20rem', fontSize: '2rem', position: 'absolute' }}
            >
                An aspiring developer in the software world.
            </Text>
        </Section>
    </ParallaxBanner>
)

export default Home;
