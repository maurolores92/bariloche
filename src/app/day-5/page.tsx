'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '@/theme/theme';
import { 
  Box, 
  Typography, 
  Container, 
  Card,
  CardContent,
  Grid,
  Button,
  Chip,
  Modal,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import { 
  ArrowBack,
  DirectionsCar,
  Schedule,
  Close,
  Image,
} from '@mui/icons-material';

const routeData = {
  origin: 'Hotel (Abel Fleuri 7552, Bariloche)',
  destination: 'Base del Cerro Tronador',
  totalDistance: '90 km',
  fuelStops: 0,
  estimatedTime: 'Día completo',
};

const stations: Array<{
  name: string;
  brand: string;
  location: string;
  km: number;
  services: string[];
}> = [];

// Eliminada declaración duplicada de itinerary
const itinerary = [
  {
    time: '08:00',
    activity: 'Salida desde el hotel',
    description: 'Partimos desde Abel Fleuri 7552, Bariloche rumbo a la base del Cerro Tronador.'
  },
  {
    time: '09:00',
    activity: 'Parada en Playa Negra',
    description: 'Breve parada para disfrutar de las vistas al lago y tomar fotografías.'
  },
  {
    time: '09:45',
    activity: 'Mirador Isla Corazón',
    description: 'Vista panorámica del lago Mascardi y la Isla Corazón.'
  },
  {
    time: '11:00',
    activity: 'Camping Pampa Linda',
    description: 'Descanso, café y exploración del entorno natural.'
  },
  {
    time: '12:30',
    activity: 'Lago Ventisquero Negro',
    description: 'Visita al lago y observación del glaciar Ventisquero Negro.'
  },
  {
    time: '14:00',
    activity: 'Garganta del Diablo',
    description: 'Caminata corta hasta la cascada Garganta del Diablo.'
  },
  {
    time: '16:00',
    activity: 'Regreso al hotel',
    description: 'Vuelta al hotel en Bariloche.'
  }
];

type BarilocheSpot = {
  title: string;
  image: string;
  mapsUrl: string;
  category: string;
  color?: string;
};

const Day5Page = () => {
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [spotModalOpen, setSpotModalOpen] = useState(false);
  const [selectedSpot, setSelectedSpot] = useState<BarilocheSpot | null>(null);

  const handleOpenImageModal = () => {
    setImageModalOpen(true);
  };

  const handleCloseImageModal = () => {
    setImageModalOpen(false);
  };

  const handleOpenSpotModal = (spot: BarilocheSpot) => {
    setSelectedSpot(spot);
    setSpotModalOpen(true);
  };

  const handleCloseSpotModal = () => {
    setSpotModalOpen(false);
    setSelectedSpot(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      {/* Header */}
      <Box sx={{ 
        backgroundColor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <Container maxWidth="lg" sx={{ py: 2 }}>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <Link href="/" passHref>
                <IconButton sx={{ mr: 2, color: 'secondary.main' }}>
                  <ArrowBack />
                </IconButton>
              </Link>
              <Typography variant="h5" fontWeight="600" color="secondary">
                Día 5: Bariloche a Base del Cerro Tronador
              </Typography>
            </Box>
            <Chip
              label="90 KM"
              color="secondary"
              variant="filled"
              size="medium"
            />
          </Box>
        </Container>
      </Box>

      {/* Contenido principal */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Hero de la página */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Card sx={{ mb: 4, position: 'relative', overflow: 'hidden' }}>
            <Box
              sx={{
                backgroundImage: 'linear-gradient(135deg, #ff9100e1 0%, #ffad43a6 100%)',
                color: 'white',
                p: 4
              }}
            >
              <Grid container spacing={4} alignItems="center">
                <Grid size={{ xs: 12, md: 8 }}>
                  <Typography variant="h3" fontWeight="700" gutterBottom>
                    Ruta Bariloche a Base del Cerro Tronador
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
                    Día de naturaleza, aventura y paisajes únicos en el Parque Nacional Nahuel Huapi
                  </Typography>
                  <Box display="flex" flexWrap="wrap" gap={2}>
                    <Box display="flex" alignItems="center">
                      <DirectionsCar sx={{ mr: 1 }} />
                      <Typography>{routeData.totalDistance}</Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <Schedule sx={{ mr: 1 }} />
                      <Typography>{routeData.estimatedTime}</Typography>
                    </Box>
                  </Box>
                </Grid>
                
                <Grid size={{ xs: 12, md: 4 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{background:'white'}}
                    startIcon={<Image />}
                    onClick={handleOpenImageModal}
                  >
                    Ver Mapa de Ruta
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </motion.div>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card sx={{ height: 400 }}>
                <CardContent sx={{ p: 0, height: '100%' }}>
                  <Box
                    sx={{
                      height: '100%',
                      cursor: 'pointer',
                      position: 'relative',
                      backgroundImage: 'url(/images/tronador-route.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundColor: '#2c2c2c'
                    }}
                    onClick={handleOpenImageModal}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 16,
                        right: 16,
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        color: 'white',
                        px: 2,
                        py: 1,
                        borderRadius: 1,
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <Image sx={{ mr: 1, fontSize: 16 }} />
                      <Typography variant="caption">Ver imagen</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Itinerario del día */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent>
                  <Typography variant="h5" fontWeight="600" gutterBottom color="secondary">
                    Cronograma del Viaje
                  </Typography>
                  <List>
                    {itinerary.map((item, index) => {
                      // Detectar si es un lago
                      const isLago = item.activity?.toLowerCase().includes('lago');
                      // Solo mostrar color de brand si existe la propiedad
                      const hasBrand = 'brand' in item && (item as any).brand;
                      const hasKm = 'km' in item && (item as any).km !== undefined;
                      return (
                        <motion.div
                          key={index}
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <ListItem sx={{ px: 0 }}>
                            <ListItemIcon>
                              <Box
                                sx={{
                                  backgroundColor: hasBrand
                                    ? ((item as any).brand === 'ypf' ? '#005baa'
                                      : (item as any).brand === 'shell' ? '#ffd600'
                                      : (item as any).brand === 'axion' ? '#c2185b'
                                      : (item as any).brand === 'puma' ? '#43ea7c'
                                      : 'secondary.main')
                                    : isLago ? 'info.main' : 'secondary.main',
                                  color: hasBrand || isLago ? '#fff' : 'white',
                                  borderRadius: '50%',
                                  width: 40,
                                  height: 40,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  position: 'relative',
                                }}
                              >
                                <Typography variant="body2" fontWeight="600" sx={{ zIndex: 2 }}>
                                  {item.time}
                                </Typography>
                              </Box>
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography variant="subtitle1" fontWeight="600">
                                  {item.activity}
                                  {hasKm && (
                                    <span style={{ color: '#888', fontWeight: 400, fontSize: '0.95em', marginLeft: 8 }}>
                                      (KM {(item as any).km})
                                    </span>
                                  )}
                                </Typography>
                              }
                              secondary={item.description}
                            />
                          </ListItem>
                          {index < itinerary.length - 1 && <Divider sx={{ my: 1 }} />}
                        </motion.div>
                      );
                    })}
                  </List>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Estaciones y paradas */}
          <Grid size={{ xs: 12 }}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography variant="h5" fontWeight="600" gutterBottom color="secondary">
                Estaciones y Paradas Estratégicas
              </Typography>
              <Grid container spacing={3}>
                {stations.length === 0 && (
                  <Typography variant="body2" color="text.secondary" sx={{ p: 2 }}>
                    No hay paradas de combustible necesarias para este recorrido.
                  </Typography>
                )}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Modal de la imagen en pantalla completa */}
      <Modal
        open={imageModalOpen}
        onClose={handleCloseImageModal}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Paper
          sx={{
            width: '95vw',
            height: '90vh',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: 'background.paper'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              zIndex: 1000,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              borderRadius: '50%'
            }}
          >
            <IconButton onClick={handleCloseImageModal} sx={{ color: 'white' }}>
              <Close />
            </IconButton>
          </Box>
          <Box 
            sx={{ 
              width: '100%', 
              height: '100%',
              backgroundImage: 'url(/images/cerrotronador.png)',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#1e1e1e'
            }}
          />
        </Paper>
      </Modal>

      </Box>
    </ThemeProvider>
  );
};

export default Day5Page;