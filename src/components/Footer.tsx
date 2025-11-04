'use client';

import { motion } from 'framer-motion';
import { 
  Box, 
  Typography, 
  Container, 
  Link,
  IconButton
} from '@mui/material';
import { 
  Instagram,
  Facebook,
  Twitter,
  Email,
  Phone,
  LocationOn
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #1565c0 0%, #1976d2 100%)',
        color: 'white',
        py: 6,
        mt: 8
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box 
            display="grid" 
            gridTemplateColumns={{ xs: '1fr', md: 'repeat(3, 1fr)' }} 
            gap={4}
          >
            <Box>
              <Typography variant="h5" gutterBottom fontWeight="600">
                Bariloche 2025
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>
                Una aventura inolvidable en la Patagonia Argentina. 
                7 días descubriendo los paisajes más hermosos de Sudamérica.
              </Typography>
              <Box display="flex" gap={1}>
                <IconButton sx={{ color: 'white' }}>
                  <Instagram />
                </IconButton>
                <IconButton sx={{ color: 'white' }}>
                  <Facebook />
                </IconButton>
                <IconButton sx={{ color: 'white' }}>
                  <Twitter />
                </IconButton>
              </Box>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom fontWeight="600">
                Enlaces Rápidos
              </Typography>
              <Box display="flex" flexDirection="column" gap={1}>
                <Link href="#itinerario" color="inherit" underline="hover">
                  Itinerario Completo
                </Link>
                <Link href="#mapa" color="inherit" underline="hover">
                  Mapa de Ruta
                </Link>
                <Link href="#destacados" color="inherit" underline="hover">
                  Destacados
                </Link>
                <Link href="#contacto" color="inherit" underline="hover">
                  Información de Contacto
                </Link>
              </Box>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom fontWeight="600">
                Información de Contacto
              </Typography>
              <Box display="flex" flexDirection="column" gap={2}>
                <Box display="flex" alignItems="center">
                  <LocationOn sx={{ mr: 1, fontSize: 20 }} />
                  <Typography variant="body2">
                    San Carlos de Bariloche, Argentina
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Phone sx={{ mr: 1, fontSize: 20 }} />
                  <Typography variant="body2">
                    +54 294 442-xxxx
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Email sx={{ mr: 1, fontSize: 20 }} />
                  <Typography variant="body2">
                    info@bariloche2025.com
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box 
            sx={{ 
              borderTop: '1px solid rgba(255,255,255,0.2)', 
              mt: 4, 
              pt: 3,
              textAlign: 'center'
            }}
          >
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              © 2025 Bariloche Adventure. Todos los derechos reservados. 
              Creado con ❤️ para una aventura inolvidable.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;