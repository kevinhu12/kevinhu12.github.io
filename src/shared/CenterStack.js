import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';

const CenterStack = styled(Stack)(({
    paddingTop = '0rem',
    paddingBottom = '0rem',
    theme
}) => ({
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: paddingTop,
    paddingBottom: paddingBottom
}));

export default CenterStack;
