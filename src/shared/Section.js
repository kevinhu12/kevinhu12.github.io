import Container from '@mui/material/Container';
import { styled } from '@mui/system';

const Section = styled(Container)(({
    theme
}) => ({
    fixed: true,
    maxWidth: 'lg',
    paddingTop: theme.sectionSpacing
}));

export default Section;
