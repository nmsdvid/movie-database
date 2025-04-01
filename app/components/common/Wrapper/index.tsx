import {
  Box,
} from '@mui/material';
import type { JSX } from 'react';

interface WrapperProps {
  children: string | JSX.Element | JSX.Element[]
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <Box sx={{
    minHeight: '100vh',
    bgcolor: 'black',
    color: 'white'
  }}>{children}</Box>
}