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
        backgroundColor: 'background.paper',
        color: 'text.primary',
        py: 6,
        mt: 8,
        borderTop: '1px solid rgba(255,255,255,0.08)'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Typography variant="h6" fontWeight="600" color="primary">
              Bariloche 2025
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Viaje de amigos a la Patagonia Argentina
            </Typography>
          </Box>
          <Box 
            sx={{ 
              borderTop: '1px solid rgba(255,255,255,0.12)', 
              pt: 2,
              textAlign: 'center'
            }}
          >
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              © 2025 Bariloche Trip. Hecho con ❤️ para los amigos.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;