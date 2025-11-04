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
  LocationOn,
  Schedule,
  LocalGasStation,
  Close,
  Image
} from '@mui/icons-material';

// Datos del viaje
const routeData = {
  origin: 'Bahía Blanca, Buenos Aires',
  destination: 'Bariloche, Río Negro',
  totalDistance: '1060 km',
  estimatedTime: '12 horas 9 minutos',
  fuelStops: 8,
  restStops: 2,
  mainRoute: 'Ruta Nacional 22, Ruta Nacional 237'
};

const stations = [
  {
    name: 'YPF Bahía Blanca',
    location: 'Bahía Blanca, Buenos Aires',
    km: 0,
    services: ['Combustible', 'Baños', 'Tienda']
  },
  {
    name: 'Axion Choele Choel',
    location: 'Choele Choel, Río Negro',
    km: 260,
    services: ['Combustible', 'Baños', 'Tienda']
  },
  {
    name: 'Shell General Roca',
    location: 'General Roca, Río Negro',
    km: 480,
    services: ['Combustible', 'Minimarket', 'Baños']
  },
  {
    name: 'YPF Cipolletti',
    location: 'Cipolletti, Río Negro',
    km: 570,
    services: ['Combustible', 'Baños', 'Tienda']
  },
  {
    name: 'Axion Piedra del Águila',
    location: 'Piedra del Águila, Neuquén',
    km: 760,
    services: ['Combustible', 'Baños', 'Tienda']
  },
  {
    name: 'Shell Dina Huapi',
    location: 'Dina Huapi, Río Negro',
    km: 1020,
    services: ['Combustible', 'Minimarket', 'Baños']
  },
  {
    name: 'YPF Bariloche',
    location: 'Bariloche, Río Negro',
    km: 1060,
    services: ['Combustible', 'Baños', 'Tienda']
  }
];

const itinerary = [
  {
    time: '07:00',
    activity: 'Salida desde Bahía Blanca',
    description: 'Comienza el viaje rumbo a Bariloche'
  },
  {
    time: '09:30',
    activity: 'Parada en Axion Choele Choel',
    description: 'Primera carga de combustible y descanso breve'
  },
  {
    time: '12:00',
    activity: 'Parada en Shell General Roca',
    description: 'Segunda carga de combustible y snack'
  },
  {
    time: '13:30',
    activity: 'Parada en YPF Cipolletti',
    description: 'Tercera carga de combustible y almuerzo rápido'
  },
  {
    time: '15:30',
    activity: 'Parada en Axion Piedra del Águila',
    description: 'Cuarta carga de combustible y descanso'
  },
  {
    time: '17:30',
    activity: 'Parada en Shell Dina Huapi',
    description: 'Quinta carga de combustible antes de llegar a destino'
  },
  {
    time: '19:09',
    activity: 'Llegada a Bariloche',
    description: 'Check-in en el hotel y descanso final'
  }
];

// Tipo para spots turísticos de Bariloche
type BarilocheSpot = {
  title: string;
  image: string;
  mapsUrl: string;
  category: string;
  color?: string;
};

const barilocheSpots: BarilocheSpot[] = [
  {
    title: 'Centro Cívico',
    image: '/images/bariloche-1.jpeg',
    mapsUrl: 'https://goo.gl/maps/8QvQw2Qw2QvQw2Qw7',
    category: 'Centro',
    color: '#1976d2'
  },
  {
    title: 'Cerro Campanario',
    image: '/images/bariloche-2.webp',
    mapsUrl: 'https://goo.gl/maps/2QvQw2Qw2QvQw2Qw8',
    category: 'Mirador',
    color: '#7b1fa2'
  },
  {
    title: 'Lago Nahuel Huapi',
    image: '/images/bariloche-3.jpg',
    mapsUrl: 'https://goo.gl/maps/3QvQw2Qw2QvQw2Qw9',
    category: 'Lago',
    color: '#1976d2'
  },
  {
    title: 'Colonia Suiza',
    image: '/images/bariloche-4.jpeg',
    mapsUrl: 'https://goo.gl/maps/4QvQw2Qw2QvQw2Qw0',
    category: 'Pueblo',
    color: '#2e7d32'
  }
];

const Day2Page = () => {
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
                <IconButton sx={{ mr: 2, color: 'success.main' }}>
                  <ArrowBack />
                </IconButton>
              </Link>
              <Typography variant="h5" fontWeight="600" color="success">
                Día 2: Viaje a Bariloche
              </Typography>
            </Box>
            <Chip
              label="1060 KM"
              color="primary"
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
                backgroundImage: 'linear-gradient(135deg, #00d43593 0%, #1f740aff 100%)',
                color: 'white',
                p: 4
              }}
            >
              <Grid container spacing={4} alignItems="center">
                <Grid size={{ xs: 12, md: 8 }}>
                  <Typography variant="h3" fontWeight="700" gutterBottom>
                    Bahia Blanca a Bariloche
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
                    Comenzamos nuestra aventura hacia la Patagonia
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
                    <Box display="flex" alignItems="center">
                      <LocalGasStation sx={{ mr: 1 }} />
                      <Typography>{routeData.fuelStops} paradas de combustible</Typography>
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
          {/* Imagen del mapa de ruta */}
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
                      backgroundImage: 'url(/images/bahiablanca-bariloche.jpg)',
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
                  <Typography variant="h5" fontWeight="600" gutterBottom color="success">
                    Cronograma del Viaje
                  </Typography>
                  <List>
                    {itinerary.map((item, index) => (
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
                                backgroundColor: 'success.main',
                                color: 'white',
                                borderRadius: '50%',
                                width: 40,
                                height: 40,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                            >
                              <Typography variant="body2" fontWeight="600">
                                {item.time}
                              </Typography>
                            </Box>
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography variant="subtitle1" fontWeight="600">
                                {item.activity}
                              </Typography>
                            }
                            secondary={item.description}
                          />
                        </ListItem>
                        {index < itinerary.length - 1 && <Divider sx={{ my: 1 }} />}
                      </motion.div>
                    ))}
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
              <Typography variant="h5" fontWeight="600" gutterBottom color="success">
                Estaciones y Paradas Estratégicas
              </Typography>
              <Grid container spacing={3}>
                {stations.map((station, index) => (
                  <Grid size={{ xs: 12, md: 4 }} key={index}>
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Card sx={{ height: '100%' }}>
                        <CardContent>
                          <Box display="flex" alignItems="center" mb={2}>
                            <LocationOn color="success" sx={{ mr: 1 }} />
                            <Typography variant="h6" fontWeight="600">
                              {station.name}
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                            {station.location}
                          </Typography>
                          <Chip
                            label={`KM ${station.km}`}
                            size="small"
                            color="secondary"
                            sx={{ mb: 2 }}
                          />
                          <Box display="flex" flexWrap="wrap" gap={1}>
                            {station.services.map((service, serviceIndex) => (
                              <Chip
                                key={serviceIndex}
                                label={service}
                                variant="outlined"
                                size="small"
                              />
                            ))}
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
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
              backgroundImage: 'url(/images/mdp-bahiablanca.jpg)',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#1e1e1e'
            }}
          />
        </Paper>
      </Modal>

      {/* Sección: Lugares turísticos para visitar en Bariloche */}
      <Container maxWidth="sm" sx={{ py: 6 }}>
        <Typography variant="h5" fontWeight="600" color="success" gutterBottom>
          Posibles lugares para visitar en Bariloche
        </Typography>
          {barilocheSpots.map((spot, idx) => (
            <Box
              component="button"
              onClick={() => handleOpenSpotModal(spot)}
              sx={{
                width: '100%',
                p: 2,
                mb: 2,
                border: 'none',
                borderRadius: 3,
                boxShadow: 3,
                backgroundColor: 'background.paper',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'box-shadow 0.2s',
                '&:active': { boxShadow: 6 },
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: 180,
                  backgroundImage: `url(${spot.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 2,
                  mb: 1.5
                }}
              />
              <Chip
                label={spot.category}
                size="small"
                sx={{
                  backgroundColor: `${spot.color || '#1976d2'}22`,
                  color: spot.color || '#1976d2',
                  fontWeight: 500,
                  mb: 1,
                  mx: 'auto',
                  display: 'block'
                }}
              />
              <Typography variant="subtitle1" fontWeight="600" align="center">
                {spot.title}
              </Typography>
            </Box>
          ))}
        {/* Modal para mostrar el enlace de Google Maps */}
        <Modal
          open={spotModalOpen}
          onClose={handleCloseSpotModal}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Paper sx={{ p: 3, borderRadius: 3, minWidth: 320, textAlign: 'center' }}>
            <Typography variant="h6" fontWeight="600" gutterBottom>
              {selectedSpot?.title}
            </Typography>
            <Box
              sx={{
                width: '100%',
                height: 180,
                backgroundImage: `url(${selectedSpot?.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 2,
                mb: 1.5
              }}
            />
            {selectedSpot && (
              <Chip
                label={selectedSpot.category}
                size="small"
                sx={{
                  backgroundColor: `${selectedSpot.color || '#1976d2'}22`,
                  color: selectedSpot.color || '#1976d2',
                  fontWeight: 500,
                  mb: 1,
                  mx: 'auto',
                  display: 'block'
                }}
              />
            )}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              component="a"
              href={selectedSpot ? selectedSpot.mapsUrl : "#"}
              sx={{ mt: 2 }}
              {...(selectedSpot ? { target: "_blank", rel: "noopener" } : {})}
            >
              Ver en Google Maps
            </Button>
            <Button onClick={handleCloseSpotModal} sx={{ mt: 2 }} fullWidth>
              Cerrar
            </Button>
          </Paper>
        </Modal>
      </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Day2Page;