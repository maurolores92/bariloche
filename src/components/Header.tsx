'use client';

import { motion } from 'framer-motion';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Container 
} from '@mui/material';
import { 
  LocationOn, 
  DateRange, 
  Flight 
} from '@mui/icons-material';

const Header = () => {
  return (
      <AppBar position="fixed" sx={{ 
        backgroundColor: 'rgba(30, 30, 30, 0.95)', 
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(0, 188, 212, 0.2)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)'
      }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
              <Flight sx={{ mr: 2, fontSize: 28, color: '#00bcd4' }} />
              <Typography variant="h6" component="div" sx={{ fontWeight: 700, color: '#ffffff' }}>
                Bariloche 2025
              </Typography>
            </Box>
            <Box display="flex" gap={2}>
              <Button 
                sx={{ color: '#ffffff', '&:hover': { color: '#00bcd4', backgroundColor: 'rgba(0, 188, 212, 0.1)' } }}
                startIcon={<DateRange />}
              >
                Itinerario
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
};

export default Header;