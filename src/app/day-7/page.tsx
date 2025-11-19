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
  Image,
  LocalGasStation as YpfIcon,
  LocalDrink as ShellIcon
} from '@mui/icons-material';

// Datos del viaje
const routeData = {
  origin: 'Bahía Blanca, Buenos Aires',
  destination: 'Santa Clara del Mar, Buenos Aires',
  totalDistance: '489 km',
  estimatedTime: '6 horas 30 minutos',
  fuelStops: 2,
  restStops: 1,
  mainRoute: 'Ruta Nacional 228'
};

const stations = [
  {
    name: 'Estación Shell Tres Arroyos',
    location: 'Tres Arroyos, Buenos Aires',
    km: 170,
    brand: 'shell',
    services: ['Combustible', 'Minimarket', 'Baños']
  },
  {
    name: 'Estación de Servicio YPF Necochea',
    location: 'Necochea, Buenos Aires',
    km: 359,
    brand: 'ypf',
    services: ['Combustible', 'Baños', 'Tienda']
  }
];

const itinerary = [
  {
    time: '09:00',
    activity: 'Salida desde Bahía Blanca',
    description: 'Comienza el regreso a Santa Clara del Mar'
  },
  {
    time: '11:00',
    activity: 'Estación Shell Tres Arroyos',
    description: 'Descanso y carga de combustible',
    brand: 'shell',
    km: 170
  },
  {
    time: '14:00',
    activity: 'Estación de Servicio YPF Necochea',
    description: 'Última carga de combustible antes del destino',
    brand: 'ypf',
    km: 359
  },
  {
    time: '16:00',
    activity: 'Llegada a Santa Clara del Mar',
    description: 'Fin del viaje y descanso en casa'
  }
];

// Tipo para spots turísticos
type BahiaBlancaSpot = {
  title: string;
  image: string;
  mapsUrl: string;
  category: string;
  color?: string;
};

const Day1Page = () => {
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [spotModalOpen, setSpotModalOpen] = useState(false);
  const [selectedSpot, setSelectedSpot] = useState<BahiaBlancaSpot | null>(null);

  const handleOpenImageModal = () => {
    setImageModalOpen(true);
  };

  const handleCloseImageModal = () => {
    setImageModalOpen(false);
  };

  const handleOpenSpotModal = (spot: BahiaBlancaSpot) => {
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
                <IconButton sx={{ mr: 2, color: 'primary.main' }}>
                  <ArrowBack />
                </IconButton>
              </Link>
              <Typography variant="h5" fontWeight="600" color="primary">
                Día 7: Regreso a Santa Clara
              </Typography>
            </Box>
            <Chip
              label="489 KM"
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
                backgroundImage: 'linear-gradient(135deg, #00bcd4 0%, #0097a7 100%)',
                color: 'white',
                p: 4
              }}
            >
              <Grid container spacing={4} alignItems="center">
                <Grid size={{ xs: 12, md: 8 }}>
                  <Typography variant="h3" fontWeight="700" gutterBottom>
                    Bahía Blanca → Santa Clara del Mar
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
                    Terminamos nuestra aventura hacia nuestro hogar
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
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.3)'
                      }
                    }}
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
                      backgroundImage: 'url(/images/mdp-bahiablanca.jpg)',
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
                  <Typography variant="h5" fontWeight="600" gutterBottom color="primary">
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
                                backgroundColor: item.brand === 'ypf' ? '#005baa' : item.brand === 'shell' ? '#ffd600' : 'primary.main',
                                color: item.brand ? '#fff' : 'white',
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
                                {item.km !== undefined && (
                                  <span style={{ color: '#888', fontWeight: 400, fontSize: '0.95em', marginLeft: 8 }}>
                                    (KM {item.km})
                                  </span>
                                )}
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
              <Typography variant="h5" fontWeight="600" gutterBottom color="primary">
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
                              {/* Icono de la marca */}
                              {station.brand === 'ypf' && <YpfIcon sx={{ color: '#005baa', mr: 1.2 }} />}
                              {station.brand === 'shell' && <ShellIcon sx={{ color: '#ffd600', mr: 1.2 }} />}
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
      <Container maxWidth="sm" sx={{ py: 6 }}>
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

export default Day1Page;