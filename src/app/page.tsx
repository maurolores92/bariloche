'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '@/theme/theme';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ItinerarySection from '@/components/ItinerarySection';
import MapSection from '@/components/MapSection';
import HighlightsSection from '@/components/HighlightsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Header />
        <Hero />
        <ItinerarySection />
        <MapSection />
        <HighlightsSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
