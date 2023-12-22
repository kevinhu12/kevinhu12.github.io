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
    <Section>
        <Grid container spacing={theme.gridSpacing}>
            <Grid item xs={12}>
                <CenterBox>
                    <Text>I'd love to connect! Let's get in touch.</Text>
                </CenterBox>
            </Grid>

            {contactInfo.map((contact, idx) => (
                <Grid item xs={4} display='flex' flexDirection='column' alignItems='center'>
                    {idx === 0 ? (
                        <GitHubIcon color='primary' fontSize='large' />
                    ) : idx === 1 ? (
                        <EmailIcon color='primary' fontSize='large' />
                    ) : (
                        <LinkedInIcon color='primary' fontSize='large' />
                    )}
                    <Link 
                        color='primary'
                        href={contact.link}
                        target='_blank'
                        underline='none'
                        variant='h6'
                        sx={{ '&:hover': { color: theme.palette.secondary.main } }}
                    >
                        {contact.name}
                    </Link>
                </Grid>
            ))}
        </Grid>
    </Section>
)

export default ContactInfo;
