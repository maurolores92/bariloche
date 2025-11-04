'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Box, 
  Typography, 
  Container, 
  Button,
  Card,
  CardContent,
} from '@mui/material';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);
  const [isToday, setIsToday] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-11-24T00:00:00'); // Lunes 24 de Noviembre 2025

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
        setIsToday(false);
      } else {
        setIsToday(true);
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
        py:15,
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
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))'
                }}
              />
            </Box>
            
            <Typography
              variant="h6"
              sx={{
                color: '#b0bec5',
                mb: 4,
                fontWeight: 300,
              }}
            >
              Nuestra aventura en la Patagonia
            </Typography>

            {isToday ? (
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                <Card sx={{ 
                  backgroundColor: '#1e1e1e', 
                  border: '2px solid #00bcd4',
                  mb: 4
                }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: '#00bcd4',
                        fontWeight: 700,
                        mb: 2,
                      }}
                    >
                      🎉 ¡ES HOY!
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#ffffff',
                        fontWeight: 500,
                      }}
                    >
                      Hoy comienza nuestra increíble aventura en Bariloche
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ) : timeLeft ? (
              <Card sx={{ 
                backgroundColor: '#1e1e1e', 
                border: '1px solid rgba(0, 188, 212, 0.3)',
                mb: 4
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#00bcd4',
                      mb: 3,
                      fontWeight: 600,
                    }}
                  >
                    Quedan para nuestro viaje:
                  </Typography>
                  
                  <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={1}>
                    <Box textAlign="center">
                      <Typography variant="h4" sx={{ color: '#ffffff', fontWeight: 700 }}>
                        {timeLeft.days}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#b0bec5' }}>
                        DÍAS
                      </Typography>
                    </Box>
                    <Box textAlign="center">
                      <Typography variant="h4" sx={{ color: '#ffffff', fontWeight: 700 }}>
                        {timeLeft.hours}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#b0bec5' }}>
                        HORAS
                      </Typography>
                    </Box>
                    <Box textAlign="center">
                      <Typography variant="h4" sx={{ color: '#ffffff', fontWeight: 700 }}>
                        {timeLeft.minutes}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#b0bec5' }}>
                        MIN
                      </Typography>
                    </Box>
                    <Box textAlign="center">
                      <Typography variant="h4" sx={{ color: '#ffffff', fontWeight: 700 }}>
                        {timeLeft.seconds}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#b0bec5' }}>
                        SEG
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ) : null}

            <Box display="flex" flexDirection="column" gap={2}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                fullWidth
                sx={{ py: 1.5 }}
              >
                Ver Itinerario Completo
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;