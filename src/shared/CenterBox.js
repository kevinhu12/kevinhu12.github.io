import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const CenterBox = styled(Box)(({
    theme
}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

export default CenterBox;
