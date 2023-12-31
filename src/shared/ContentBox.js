import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const ContentBox = styled(Box)(({
    backgroundColor,
    theme
}) => ({
    backgroundColor: backgroundColor,
    border: '2px solid #000000',
    borderRadius: '10px'
}));

export default ContentBox;
