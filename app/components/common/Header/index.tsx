import {
    Typography,
    AppBar,
    Toolbar,
    Button,
} from '@mui/material';
import { Link } from 'react-router';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
            <Button
                component={Link}
                to="/favourites"
                startIcon={<FavoriteIcon />}
                sx={{
                    color: 'primary.main',
                    '&:hover': {
                        backgroundColor: 'rgba(25, 118, 210, 0.04)',
                    },
                }}
            >
                Favourites
            </Button>
        </Toolbar>
    </AppBar>
}