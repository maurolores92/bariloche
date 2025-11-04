'use client';

import { motion } from 'framer-motion';
import { 
  Box, 
  Typography, 
  Container, 
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip
} from '@mui/material';
import { 
  Landscape,
  CameraAlt,
  Restaurant,
  DirectionsBoat,
  Hiking,
  LocalActivity
} from '@mui/icons-material';

interface Highlight {
  title: string;
  description: string;
  image: string;
  category: string;
  icon: React.ReactNode;
  color: string;
}

const highlights: Highlight[] = [
  {
    title: 'Cerro Catedral',
    description: 'El centro de esquí más importante de Sudamérica. En verano, ofrece increíbles vistas panorámicas y actividades de montaña.',
    image: '/cerro-catedral.jpg',
    category: 'Montaña',
    icon: <Landscape />,
    color: '#2e7d32'
  },
  {
    title: 'Circuito Chico',
    description: 'Un recorrido de 60km que incluye los paisajes más hermosos: lagos, montañas, bosques y pueblos pintorescos.',
    image: '/circuito-chico.jpg',
    category: 'Paisajes',
    icon: <CameraAlt />,
    color: '#f57c00'
  },
  {
    title: 'Navegación Lago Nahuel Huapi',
    description: 'Explora las aguas cristalinas del lago, visita la Isla Victoria y el famoso Bosque de Arrayanes.',
    image: '/lago-nahuel-huapi.jpg',
    category: 'Navegación',
    icon: <DirectionsBoat />,
    color: '#1976d2'
  },
  {
    title: 'Gastronomía Patagónica',
    description: 'Degusta los sabores únicos de la Patagonia: trucha, cordero, chocolates artesanales y cervezas locales.',
    image: '/gastronomia.jpg',
    category: 'Gastronomía',
    icon: <Restaurant />,
    color: '#d32f2f'
  },
  {
    title: 'Cerro Campanario',
    description: 'Las vistas más fotografiadas de Bariloche. Un teleférico te llevará a contemplar panoramas únicos.',
    image: '/cerro-campanario.jpg',
    category: 'Mirador',
    icon: <Hiking />,
    color: '#7b1fa2'
  },
  {
    title: 'Actividades de Aventura',
    description: 'Tirolesa, rappel, trekking, kayak y mucho más. La Patagonia es el paraíso de los deportes de aventura.',
    image: '/aventura.jpg',
    category: 'Aventura',
    icon: <LocalActivity />,
    color: '#ff5722'
  }
];

const HighlightsSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" align="center" gutterBottom color="primary" fontWeight="600">
            Destacados del Viaje
          </Typography>
          <Typography variant="h5" align="center" sx={{ mb: 6, color: 'text.secondary', fontWeight: 300 }}>
            Los mejores momentos que viviremos en Bariloche
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {highlights.map((highlight, index) => (
            <Grid size={{xs:12, sm:6 , md:4 }}  key={index}>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                    }
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      height: 200,
                      background: `linear-gradient(45deg, ${highlight.color}22, ${highlight.color}44)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: highlight.color,
                      fontSize: 60
                    }}
                  >
                    {highlight.icon}
                  </CardMedia>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                      <Typography variant="h5" component="h3" fontWeight="600">
                        {highlight.title}
                      </Typography>
                      <Chip 
                        label={highlight.category} 
                        size="small" 
                        sx={{ 
                          backgroundColor: `${highlight.color}22`,
                          color: highlight.color,
                          fontWeight: 500
                        }} 
                      />
                    </Box>
                    <Typography variant="body2" color="text.secondary" lineHeight={1.6}>
                      {highlight.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HighlightsSection;