'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Box, 
  Typography, 
  Container, 
  Card,
  CardContent,
  Chip,
  Grid
} from '@mui/material';
import { 
  Flight,
  Landscape,
  DirectionsBoat,
  Restaurant,
  CameraAlt,
  Hiking,
  LocalActivity,
  FlightLand
} from '@mui/icons-material';

interface DayActivity {
  day: number;
  title: string;
  activities: string[];
  icon: React.ReactNode;
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'error';
  description: string;
  url: string;
}

const itineraryData: DayActivity[] = [
  {
    day: 1,
    title: 'Viaje a Bahía Blanca',
    activities: ['Salida desde Mar del Plata', 'Paradas estratégicas', 'Llegada a Bahía Blanca', 'Check-in hotel'],
    icon: <Hiking />,
    color: 'primary',
    description: 'Comenzamos nuestra aventura hacia la Patagonia',
    url: '/day-1'
  },
  {
    day: 2,
    title: 'Viaje a Bariloche',
    activities: [
      'Salida desde Bahía Blanca',
      'Paradas en estaciones de servicio',
      'Llegada a Bariloche',
      'Check-in hotel'
    ],
    icon: <Hiking />,
    color: 'success',
    description: 'Gran travesía por la Patagonia rumbo a Bariloche',
    url: '/day-2'
  },
  {
    day: 3,
    title: 'Circuito Chico',
    activities: ['Salida temprano al Circuito Chico', 'Cerro Campanario', 'Playa Bonita', 'Villa La Angostura'],
    icon: <CameraAlt />,
    color: 'warning',
    description: 'El circuito más hermoso de la región',
    url: '/day-3'
  },
  {
    day: 4,
    title: 'Navegación y Bosque',
    activities: ['Navegación Lago Nahuel Huapi', 'Isla Victoria', 'Bosque de Arrayanes', 'Paseo en Puerto Pañuelo'],
    icon: <DirectionsBoat />,
    color: 'info',
    description: 'Día de navegación por lagos cristalinos',
    url: '/day-4'
  },
  {
    day: 5,
    title: 'Aventura en Cerro Otto',
    activities: ['Teleférico Cerro Otto', 'Casa de Té Giratoria', 'Actividades de aventura', 'Compras en el centro'],
    icon: <LocalActivity />,
    color: 'secondary',
    description: 'Adrenalina y vistas panorámicas',
    url: '/day-5'
  },
  {
    day: 6,
    title: 'Día de Relax',
    activities: ['Descanso en el hotel', 'Spa y relajación', 'Paseo por la costanera', 'Cena especial de despedida'],
    icon: <Restaurant />,
    color: 'error',
    description: 'Última noche en el paraíso patagónico',
    url: '/day-6'
  },
  {
    day: 7,
    title: 'Regreso a casa',
    activities: ['Desayuno tranquilo', 'Check-out del hotel', 'Últimas compras', 'Vuelo Bariloche - Buenos Aires'],
    icon: <FlightLand />,
    color: 'primary',
    description: 'Con el corazón lleno de recuerdos',
    url: '/day-7'
  }
];

const ItinerarySection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" align="center" gutterBottom color="primary" fontWeight="600">
            Itinerario Completo
          </Typography>
          <Typography variant="h5" align="center" sx={{ mb: 6, color: 'text.secondary', fontWeight: 300 }}>
            7 días de aventura en la Patagonia Argentina
          </Typography>
        </motion.div>

        <Grid container spacing={2}>
          {itineraryData.map((day, index) => (
            <Grid size={{ xs: 12 }} key={day.day}>
              <motion.div
                initial={{ x: index % 2 === 0 ? -60 : 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Link href={day.url} style={{ textDecoration: 'none' }}>
                  <Card sx={{
                    mb: 1.5,
                    overflow: 'visible',
                    position: 'relative',
                    cursor: 'pointer',
                    borderRadius: 3,
                    boxShadow: '0 2px 10px rgba(0,0,0,0.10)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 6px 18px rgba(0,188,212,0.18)'
                    },
                    maxWidth: 370,
                    mx: 'auto',
                  }}>
                    <CardContent sx={{ p: 2 }}>
                      <Box display="flex" alignItems="center" mb={1.2}>
                        <Box
                          sx={{
                            backgroundColor: `${day.color}.main`,
                            color: 'white',
                            borderRadius: '50%',
                            width: 32,
                            height: 32,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 1.5,
                            boxShadow: '0 1px 4px rgba(0,0,0,0.10)'
                          }}
                        >
                          {/* Icono más pequeño y perfectamente redondo */}
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24 }}>
                            {day.icon}
                          </Box>
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" color={`${day.color}`} fontWeight="600" sx={{ fontSize: '1rem', lineHeight: 1.1 }}>
                            Día {day.day}
                          </Typography>
                          <Typography variant="body1" fontWeight="500" sx={{ fontSize: '0.95rem', lineHeight: 1.1 }}>
                            {day.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, fontSize: '0.85rem', lineHeight: 1.1 }}>
                            {day.description}
                          </Typography>
                        </Box>
                      </Box>
                      <Box display="flex" flexWrap="wrap" gap={0.5}>
                        {day.activities.map((activity, actIndex) => (
                          <motion.div
                            key={actIndex}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.25, delay: (index * 0.08) + (actIndex * 0.08) }}
                            viewport={{ once: true }}
                          >
                            <Chip
                              label={activity}
                              variant="outlined"
                              sx={{ mb: 0.5, fontSize: '0.75rem', borderRadius: '10px', px: 1 }}
                            />
                          </motion.div>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ItinerarySection;