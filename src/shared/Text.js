import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const Text = styled(Typography)(({
    bold = false,
    color = 'primary',
    type = 'primary',
    paddingTop = '0rem',
    paddingBottom = '0rem',
    theme
}) => ({
    color: color === 'primary' ? theme.palette.primary.main
        : theme.palette.secondary.main,
    fontSize: type === 'primary' ? '1.25rem' : '1.1rem',
    fontWeight: bold ? 'bold' : '',
    paddingTop: paddingTop,
    paddingBottom: paddingBottom
}));

export default Text;
