'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Box, 
  Typography, 
  Container, 
  Button,
  Card,
  CardContent,
} from '@mui/material';


// Itinerary data (debe estar sincronizado con ItinerarySection)
const itineraryData = [
  { day: 1, date: '2025-11-25', title: 'Viaje a Bahía Blanca', url: '/day-1' },
  { day: 2, date: '2025-11-26', title: 'Viaje a Bariloche', url: '/day-2' },
  { day: 3, date: '2025-11-27', title: 'Circuito Chico', url: '/day-3' },
  { day: 4, date: '2025-11-28', title: 'Navegación y Bosque', url: '/day-4' },
  { day: 5, date: '2025-11-29', title: 'Aventura en Cerro Otto', url: '/day-5' },
  { day: 6, date: '2025-11-30', title: 'Día de Relax', url: '/day-6' },
  { day: 7, date: '2025-12-01', title: 'Regreso a casa', url: '/day-7' },
];

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);
  const [currentDay, setCurrentDay] = useState<null | { day: number; title: string; url: string; date: string }>(null);

  useEffect(() => {
    const now = new Date();
    const todayStr = now.toISOString().slice(0, 10); // yyyy-mm-dd
    const foundDay = itineraryData.find(d => d.date === todayStr);
    setCurrentDay(foundDay ? foundDay : null);

    // Countdown hasta el primer día
    const targetDate = new Date(itineraryData[0].date + 'T00:00:00');

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft(null);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: 'url(/images/hero.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        px: 2,
        py:10,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(18, 18, 18, 0.75)', // Overlay oscuro
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Box textAlign="center">
            <Box 
              display="flex" 
              justifyContent="center" 
              alignItems="center"
              sx={{ mb: 3 }}
            >
              <Box
                component="img"
                src="/images/logo.png"
                alt="Bariloche 2025 Logo"
                sx={{
                  height: { xs: 200, sm: 200 },
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 24px #00bcd4) drop-shadow(0 0 12px #ff6b35)',
                  transition: 'filter 0.3s',
                }}
              />
            </Box>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: '#fff',
                  mb: 2,
                  fontWeight: 700,
                  letterSpacing: 1,
                  textShadow: '0 2px 12px #00bcd4',
                }}
              >
                🚗🌄 ¡Bariloche 2025 con amigos!
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#ff6b35',
                  mb: 4,
                  fontWeight: 400,
                  letterSpacing: 1,
                  textShadow: '0 2px 8px #1e1e1e',
                }}
              >
                La aventura más esperada del año
              </Typography>
            </motion.div>

            {currentDay ? (
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                <Card sx={{ 
                  background: 'linear-gradient(90deg, #00bcd4 0%, #ff6b35 100%)',
                  color: '#fff',
                  border: 'none',
                  mb: 4,
                  boxShadow: '0 4px 24px rgba(0,188,212,0.18)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'scale(1.03)' },
                }}>
                  <Link href={currentDay.url} style={{ textDecoration: 'none' }}>
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <Typography
                        variant="h4"
                        sx={{
                          color: '#fff',
                          fontWeight: 700,
                          mb: 1.5,
                          textShadow: '0 2px 12px #0097a7',
                          letterSpacing: 1.5,
                        }}
                      >
                        Día {currentDay.day}
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{
                          color: '#fff',
                          fontWeight: 600,
                          mb: 1,
                          textShadow: '0 2px 8px #1e1e1e',
                          letterSpacing: 1,
                        }}
                      >
                        {currentDay.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#fff',
                          fontWeight: 400,
                          opacity: 0.85,
                          fontSize: '1.1rem',
                        }}
                      >
                        ¡Haz click para ver el detalle!
                      </Typography>
                    </CardContent>
                  </Link>
                </Card>
              </motion.div>
            ) : timeLeft ? (
              <Box
                sx={{
                  background: 'rgba(255,255,255,0.95)',
                  borderRadius: 4,
                  boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                  px: 3,
                  py: 3,
                  mb: 4,
                  maxWidth: 370,
                  mx: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: '#222',
                    mb: 2,
                    fontWeight: 700,
                    letterSpacing: 1,
                  }}
                >
                  NOS VEMOS EN:
                </Typography>
                <Box display="flex" gap={2}>
                  <Box textAlign="center">
                    <Box
                      sx={{
                        background: 'linear-gradient(135deg, #00bcd4 60%, #4dd0e1 100%)',
                        borderRadius: 2,
                        minWidth: 48,
                        py: 1,
                        boxShadow: '0 2px 8px rgba(0,188,212,0.10)',
                        mb: 0.5,
                      }}
                    >
                      <Typography variant="h4" sx={{ color: '#fff', fontWeight: 700, fontFamily: 'monospace', textShadow: '0 2px 8px #00bcd4' }}>
                        {String(timeLeft.days).padStart(2, '0')}
                      </Typography>
                    </Box>
                    <Typography variant="caption" sx={{ color: '#00bcd4', fontWeight: 500, letterSpacing: 1 }}>
                      días
                    </Typography>
                  </Box>
                  <Box textAlign="center">
                    <Box
                      sx={{
                        background: 'linear-gradient(135deg, #ff6b35 60%, #ff8a65 100%)',
                        borderRadius: 2,
                        minWidth: 48,
                        py: 1,
                        boxShadow: '0 2px 8px rgba(255,107,53,0.10)',
                        mb: 0.5,
                      }}
                    >
                      <Typography variant="h4" sx={{ color: '#fff', fontWeight: 700, fontFamily: 'monospace', textShadow: '0 2px 8px #ff6b35' }}>
                        {String(timeLeft.hours).padStart(2, '0')}
                      </Typography>
                    </Box>
                    <Typography variant="caption" sx={{ color: '#ff6b35', fontWeight: 500, letterSpacing: 1 }}>
                      horas
                    </Typography>
                  </Box>
                  <Box textAlign="center">
                    <Box
                      sx={{
                        background: 'linear-gradient(135deg, #43ea7c 60%, #00bcd4 100%)',
                        borderRadius: 2,
                        minWidth: 48,
                        py: 1,
                        boxShadow: '0 2px 8px rgba(67,234,124,0.10)',
                        mb: 0.5,
                      }}
                    >
                      <Typography variant="h4" sx={{ color: '#fff', fontWeight: 700, fontFamily: 'monospace', textShadow: '0 2px 8px #43ea7c' }}>
                        {String(timeLeft.minutes).padStart(2, '0')}
                      </Typography>
                    </Box>
                    <Typography variant="caption" sx={{ color: '#43ea7c', fontWeight: 500, letterSpacing: 1 }}>
                      min
                    </Typography>
                  </Box>
                  <Box textAlign="center">
                    <Box
                      sx={{
                        background: 'linear-gradient(135deg, #7b1fa2 60%, #ff6b35 100%)',
                        borderRadius: 2,
                        minWidth: 48,
                        py: 1,
                        boxShadow: '0 2px 8px rgba(123,31,162,0.10)',
                        mb: 0.5,
                      }}
                    >
                      <Typography variant="h4" sx={{ color: '#fff', fontWeight: 700, fontFamily: 'monospace', textShadow: '0 2px 8px #7b1fa2' }}>
                        {String(timeLeft.seconds).padStart(2, '0')}
                      </Typography>
                    </Box>
                    <Typography variant="caption" sx={{ color: '#7b1fa2', fontWeight: 500, letterSpacing: 1 }}>
                      seg
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ) : null}

            <Box display="flex" flexDirection="column" gap={2}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                fullWidth
                sx={{
                  py: 1.5,
                  background: 'linear-gradient(90deg, #00bcd4 0%, #ff6b35 100%)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 16px rgba(0,188,212,0.18)',
                  transition: 'background 0.3s',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #ff6b35 0%, #00bcd4 100%)',
                  },
                }}
              >
                Ver Itinerario Completo 🚀
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;