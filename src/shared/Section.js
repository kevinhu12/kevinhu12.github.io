import Container from '@mui/material/Container';
import { styled } from '@mui/system';

const Section = styled(Container)(({
    paddingTop = '',
    theme
}) => ({
    fixed: true,
    maxWidth: 'lg',
    paddingTop: paddingTop !== '' ? paddingTop : theme.sectionSpacing
}));

export default Section;
