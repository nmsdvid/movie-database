import {
    TextField,
    Box,
} from '@mui/material';
import { useEffect, useState } from 'react';

const NETFLIX_RED = '#E50914';

interface SearchIconProps {
    onSearchTerm: (searchTerm: string) => any
}

export const SearchInput: React.FC<SearchIconProps> = ({ onSearchTerm }) => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        onSearchTerm(searchTerm);
    }, [searchTerm]);

    return (
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
            <TextField
                placeholder="Search movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                fullWidth
                sx={{
                    maxWidth: 600,
                    '& .MuiOutlinedInput-root': {
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                        },
                        '&:hover fieldset': {
                            borderColor: NETFLIX_RED,
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: NETFLIX_RED,
                        },
                    },
                    '& .MuiOutlinedInput-input': {
                        color: 'white',
                    }
                }}
            />
        </Box>
    );
}