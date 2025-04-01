import {
    Typography,
    AppBar,
    Toolbar,
} from '@mui/material';

interface HeaderProps {
    title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
    return <AppBar
        position="static"
        sx={{
            bgcolor: 'transparent',
            boxShadow: 'none',
            mb: 4
        }}
    >
        <Toolbar>
            <Typography
                variant="h4"
                component="div"
                sx={{
                    flexGrow: 1,
                    color: 'primary.main',
                    fontWeight: 'bold'
                }}
            >
                {title}
            </Typography>
        </Toolbar>
    </AppBar>
}