import {
    Typography,
    Paper,
} from '@mui/material';

interface NoFavoriteProps {
    title: string;
    description: string;
}

export const NoFavorite: React.FC<NoFavoriteProps> = ({ title, description }) => {
    return <Paper
        elevation={0}
        sx={{
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 2,
            p: 4,
            textAlign: 'center'
        }}
    >
        <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
            {title}
        </Typography>
        <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            {description}
        </Typography>
    </Paper>
}