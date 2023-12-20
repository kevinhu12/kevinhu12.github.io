import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const SectionHeader = styled(Typography)(({
    theme
}) => ({
    color: theme.palette.secondary.primary,
    fontSize: '2rem',
    fontWeight: 'bold'
}));

export default SectionHeader;
