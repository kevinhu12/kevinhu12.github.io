import Container from '@mui/material/Container';
import { styled } from '@mui/system';

const Section = styled(Container)(({
    paddingTop = '',
    paddingBottom = '',
    theme
}) => ({
    fixed: true,
    maxWidth: 'lg',
    paddingTop: paddingTop !== '' ? paddingTop : theme.sectionSpacing,
    paddingBottom: paddingBottom !== '' ? paddingBottom : 0
}));

export default Section;
