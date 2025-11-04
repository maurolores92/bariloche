# Bariloche 2025 - Landing Page

Este proyecto es una landing page interactiva para un viaje de 7 días a Bariloche, Argentina. 

## Tecnologías utilizadas

- **Next.js 15** con TypeScript
- **Material-UI (MUI)** para componentes y estilos
- **Framer Motion** para animaciones fluidas
- **React Leaflet** para mapas interactivos
- **Tailwind CSS** para estilos adicionales

## Estructura del proyecto

- `src/components/` - Componentes reutilizables de React
- `src/theme/` - Configuración de tema de Material-UI
- `src/app/` - Páginas y layouts de Next.js

## Componentes principales

1. **Header** - Navegación principal con animaciones de entrada
2. **Hero** - Sección principal con call-to-action
3. **ItinerarySection** - Itinerario detallado de los 7 días
4. **MapSection** - Mapa interactivo con la ruta del viaje
5. **HighlightsSection** - Destacados y actividades principales
6. **Footer** - Información de contacto y enlaces

## Características

- Diseño completamente responsive
- Animaciones suaves con Framer Motion
- Mapa interactivo con marcadores de destinos
- Componentes modulares y reutilizables
- Tema personalizado de Material-UI
- Optimizado para SEO

## Para ejecutar el proyecto

```bash
npm run dev
```

El proyecto estará disponible en http://localhost:3000

## Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## Configuración especial

El proyecto incluye configuraciones especiales para:
- **Leaflet**: Mapas interactivos con importación dinámica para evitar problemas de SSR
- **Material-UI**: Tema personalizado con colores y tipografía específicos
- **Framer Motion**: Animaciones fluidas y transiciones suaves

## Itinerario del viaje

### Día 1: Llegada a Bariloche
- Vuelo Buenos Aires - Bariloche
- Check-in hotel
- Paseo por el Centro Cívico
- Cena en restaurante local

### Día 2: Cerro Catedral
- Teleférico al Cerro Catedral
- Actividades en la montaña
- Almuerzo en refugio
- Tarde libre en Bariloche

### Día 3: Circuito Chico
- Salida temprano al Circuito Chico
- Cerro Campanario
- Playa Bonita
- Villa La Angostura

### Día 4: Navegación y Bosque
- Navegación Lago Nahuel Huapi
- Isla Victoria
- Bosque de Arrayanes
- Paseo en Puerto Pañuelo

### Día 5: Aventura en Cerro Otto
- Teleférico Cerro Otto
- Casa de Té Giratoria
- Actividades de aventura
- Compras en el centro

### Día 6: Día de Relax
- Descanso en el hotel
- Spa y relajación
- Paseo por la costanera
- Cena especial de despedida

### Día 7: Regreso a casa
- Desayuno tranquilo
- Check-out del hotel
- Últimas compras
- Vuelo Bariloche - Buenos Aires

## Mapa interactivo

El mapa incluye:
- Ruta principal desde Buenos Aires a Bariloche
- Marcadores de los principales destinos
- Circuito Chico con línea punteada
- Información detallada en cada punto de interés

## Desarrollo

Para contribuir al proyecto:

1. Clona el repositorio
2. Instala las dependencias: `npm install`
3. Ejecuta el servidor de desarrollo: `npm run dev`
4. Realiza tus cambios
5. Ejecuta el build: `npm run build`

## Notas técnicas

- El proyecto usa Next.js 15 con App Router
- Los mapas están optimizados para evitar problemas de SSR
- Las animaciones están optimizadas para rendimiento
- El diseño es completamente responsive
