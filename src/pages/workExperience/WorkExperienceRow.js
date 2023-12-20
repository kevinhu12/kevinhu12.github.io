import Avatar from '@mui/material/Avatar';
import CenterBox from '../../shared/CenterBox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import avatar from '../../assets/logo.png';

const WorkExperienceRow = ({
    theme
}) => {

    return (
        <Grid container>
            <Grid item xs={2}>
                <CenterBox>
                    <Avatar 
                        variant='rounded'
                        alt='Kevin Hu Avatar'
                        src={avatar}
                        sx={{ width: 100, height: 100, border: '0.2rem solid #000000' }}
                    />
                </CenterBox>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={9}>
                <Typography sx={{ fontWeight: 'bold' }}>Test Company</Typography>
                <Typography>test text</Typography>
            </Grid>
        </Grid>
    )
}

export default WorkExperienceRow;
