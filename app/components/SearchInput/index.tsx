import {
    TextField,
    Box,
} from '@mui/material';

interface SearchInputProps {
    value: string;
    onSearchTerm: (searchTerm: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ value, onSearchTerm }) => {
    return (
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
            <TextField
                placeholder="Search movies..."
                value={value}
                onChange={(e) => onSearchTerm(e.target.value)}
                fullWidth
                sx={{
                    maxWidth: 600,
                    '& .MuiOutlinedInput-root': {
                        bgcolor: 'background.paper',
                        color: 'text.primary',
                        '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                        },
                        '&:hover fieldset': {
                            borderColor: 'primary.main',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'primary.main',
                        },
                    },
                }}
            />
        </Box>
    );
}