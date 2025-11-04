'use client';

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bcd4', // Azul mar/cyan
      light: '#4dd0e1',
      dark: '#0097a7',
    },
    secondary: {
      main: '#ff6b35', // Naranja vibrante
      light: '#ff8a65',
      dark: '#e64a19',
    },
    background: {
      default: '#121212', // Gris muy oscuro
      paper: '#1e1e1e', // Gris oscuro para cards
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#424242',
      800: '#2d2d2d',
      900: '#1a1a1a',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          textTransform: 'none',
          fontWeight: 600,
          boxShadow: '0 4px 14px 0 rgba(0, 188, 212, 0.25)',
          '&:hover': {
            boxShadow: '0 6px 20px 0 rgba(0, 188, 212, 0.4)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #00bcd4 30%, #4dd0e1 90%)',
          '&:hover': {
            background: 'linear-gradient(45deg, #0097a7 30%, #00bcd4 90%)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          '&:hover': {
            boxShadow: '0 12px 40px rgba(0, 188, 212, 0.2)',
            border: '1px solid rgba(0, 188, 212, 0.3)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          color: '#ffffff',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          '&:hover': {
            backgroundColor: 'rgba(0, 188, 212, 0.2)',
            border: '1px solid rgba(0, 188, 212, 0.5)',
          },
        },
      },
    },
  },
});