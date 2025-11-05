'use client';

import { motion } from 'framer-motion';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Container, 
  Menu, 
  MenuItem, 
  ListItemIcon, 
  ListItemText
} from '@mui/material';
import { 
  LocationOn, 
  DateRange, 
  Flight, 
  CalendarToday, 
  ChevronRight
} from '@mui/icons-material';

import Link from 'next/link';
import { useState } from 'react';

// Itinerary data for menu
const itineraryMenu = [
  { day: 1, title: 'Viaje a Bahía Blanca', url: '/day-1' },
  { day: 2, title: 'Viaje a Bariloche', url: '/day-2' },
  { day: 3, title: 'San Martin de los Andes', url: '/day-3' },
  // Agrega más días si es necesario
];

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
              onClick={handleMenuOpen}
              aria-controls={open ? 'itinerary-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              Itinerario
            </Button>
            <Menu
              id="itinerary-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              MenuListProps={{
                'aria-labelledby': 'itinerary-button',
              }}
              sx={{ mt: 1 }}
            >
              {itineraryMenu.map((item) => (
                <Link href={item.url} key={item.day} style={{ textDecoration: 'none', color: 'inherit' }} passHref>
                  <MenuItem onClick={handleMenuClose} sx={{ minWidth: 220 }}>
                    <ListItemIcon>
                      <CalendarToday fontSize="small" color="info" />
                    </ListItemIcon>
                    <ListItemText primary={`Día ${item.day}: ${item.title}`} />
                    <ChevronRight fontSize="small" color="disabled" />
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;