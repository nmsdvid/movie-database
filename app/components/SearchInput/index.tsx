import {
    TextField,
    Box,
} from '@mui/material';
import { useEffect, useState } from 'react';

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