import Box from '@mui/material/Box';
import CenterBox from '../shared/CenterBox';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Section from '../shared/Section';
import Text from '../shared/Text';
import { contactInfo } from '../utils/constants';

const ContactInfo = ({
    theme
}) => (
    <Box sx={{ backgroundColor: 'black' }}>
        <Section paddingBottom='2rem'>
            <Grid container spacing={theme.gridSpacing}>
                <Grid item xs={12}>
                    <CenterBox>
                        <Text color='secondary'>I'd love to connect! Let's get in touch.</Text>
                    </CenterBox>
                </Grid>

                {contactInfo.map((contact, idx) => (
                    <Grid item xs={4} display='flex' flexDirection='column' alignItems='center'>
                        {idx === 0 ? (
                            <GitHubIcon color='secondary' fontSize='large' />
                        ) : idx === 1 ? (
                            <EmailIcon color='secondary' fontSize='large' />
                        ) : (
                            <LinkedInIcon color='secondary' fontSize='large' />
                        )}
                        <Link 
                            color='secondary'
                            href={contact.link}
                            target='_blank'
                            underline='none'
                            variant='h6'
                            sx={{ '&:hover': { color: theme.palette.info.main } }}
                        >
                            {contact.name}
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Section>
    </Box>
)

export default ContactInfo;
