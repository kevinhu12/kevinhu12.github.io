import Box from '@mui/material/Box';

const CustomIcon = ({
    img,
    theme
}) => (
    <Box
        component='img'
        alt={img.alt}
        src={img.src}
        sx={{ height: theme.customIconDimensions, width: theme.customIconDimensions }}
    />   
);

export default CustomIcon;
