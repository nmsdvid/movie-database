
import {
    TextField,
    Box,
    InputAdornment,
    Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
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

    return <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: 6
        }}
    >
        <TextField
            size="medium"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
                width: '100%',
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
                    fontSize: '1.1rem',
                }
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon sx={{ color: NETFLIX_RED }} />
                    </InputAdornment>
                ),
                endAdornment: searchTerm && (
                    <InputAdornment position="end">
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: NETFLIX_RED,
                                '&:hover': {
                                    bgcolor: '#B1060F',
                                }
                            }}
                        >
                            Search
                        </Button>
                    </InputAdornment>
                ),
            }}
        />
    </Box>
}