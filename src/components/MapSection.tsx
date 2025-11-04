'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Box, 
  Typography, 
  Container, 
  Paper,
  Alert
} from '@mui/material';
import dynamic from 'next/dynamic';

// Importación dinámica para evitar problemas de SSR con Leaflet
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });
const Polyline = dynamic(() => import('react-leaflet').then(mod => mod.Polyline), { ssr: false });

interface MapPoint {
  position: [number, number];
  title: string;
  description: string;
}

const routePoints: MapPoint[] = [
  {
    position: [-34.6037, -58.3816], // Buenos Aires
    title: 'Buenos Aires',
    description: 'Punto de partida - Aeropuerto Ezeiza'
  },
  {
    position: [-41.1335, -71.3103], // Bariloche
    title: 'San Carlos de Bariloche',
    description: 'Destino principal - 7 días de aventura'
  },
  {
    position: [-41.1068, -71.3072], // Centro Cívico
    title: 'Centro Cívico',
    description: 'Corazón de Bariloche'
  },
  {
    position: [-41.1500, -71.4014], // Cerro Catedral
    title: 'Cerro Catedral',
    description: 'Centro de esquí y actividades de montaña'
  },
  {
    position: [-41.1381, -71.4014], // Cerro Campanario
    title: 'Cerro Campanario',
    description: 'Las mejores vistas panorámicas'
  },
  {
    position: [-40.7569, -71.6572], // Villa La Angostura
    title: 'Villa La Angostura',
    description: 'Pueblo pintoresco en el Circuito Chico'
  }
];

// Ruta del viaje (línea que conecta los puntos principales)
const routePath: [number, number][] = [
  [-34.6037, -58.3816], // Buenos Aires
  [-41.1335, -71.3103], // Bariloche
];

// Circuito Chico
const circuitoChico: [number, number][] = [
  [-41.1335, -71.3103], // Bariloche
  [-41.1381, -71.4014], // Cerro Campanario  
  [-40.7569, -71.6572], // Villa La Angostura
  [-41.1335, -71.3103], // Vuelta a Bariloche
];

const MapSection = () => {
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Fix para los iconos de Leaflet en Next.js
      import('leaflet').then((L) => {
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });
      });
    }
  }, []);

  // Verificar si estamos en el cliente
  if (typeof window === 'undefined') {
    return (
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom color="primary" fontWeight="600">
            Mapa de la Ruta
          </Typography>
          <Alert severity="info" sx={{ mt: 4 }}>
            El mapa se cargará en un momento...
          </Alert>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" align="center" gutterBottom color="primary" fontWeight="600">
            Mapa de la Ruta
          </Typography>
          <Typography variant="h5" align="center" sx={{ mb: 6, color: 'text.secondary', fontWeight: 300 }}>
            Desde Buenos Aires hasta Bariloche y sus alrededores
          </Typography>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Paper elevation={8} sx={{ borderRadius: 4, overflow: 'hidden', height: 500 }}>
            <MapContainer
              center={[-41.1335, -71.3103]}
              zoom={6}
              style={{ height: '100%', width: '100%' }}
              ref={mapRef}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              
              {/* Marcadores de lugares */}
              {routePoints.map((point, index) => (
                <Marker key={index} position={point.position}>
                  <Popup>
                    <Box>
                      <Typography variant="h6" fontWeight="600">
                        {point.title}
                      </Typography>
                      <Typography variant="body2">
                        {point.description}
                      </Typography>
                    </Box>
                  </Popup>
                </Marker>
              ))}

              {/* Ruta principal (Buenos Aires - Bariloche) */}
              <Polyline 
                positions={routePath} 
                color="#1976d2" 
                weight={4}
                opacity={0.8}
              />

              {/* Circuito Chico */}
              <Polyline 
                positions={circuitoChico} 
                color="#f57c00" 
                weight={3}
                opacity={0.9}
                dashArray="10, 10"
              />
            </MapContainer>
          </Paper>
        </motion.div>

        <Box display="flex" justifyContent="center" gap={4} mt={4}>
          <Box display="flex" alignItems="center">
            <Box sx={{ width: 20, height: 4, backgroundColor: '#1976d2', mr: 1 }} />
            <Typography variant="body2">Ruta Principal</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Box sx={{ 
              width: 20, 
              height: 4, 
              backgroundColor: '#f57c00',
              backgroundImage: 'linear-gradient(45deg, transparent 25%, #f57c00 25%, #f57c00 50%, transparent 50%, transparent 75%, #f57c00 75%)',
              mr: 1 
            }} />
            <Typography variant="body2">Circuito Chico</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MapSection;