import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#E50914',
        },
        background: {
            default: '#141414',
            paper: 'rgba(255, 255, 255, 0.1)',
        },
        text: {
            primary: '#FFFFFF',
        },
    },
});