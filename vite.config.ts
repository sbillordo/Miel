import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',           // Configura el servidor para escuchar en 0.0.0.0 (necesario para Render)
    port: 3000,                // Puedes establecer el puerto, Render lo detectará automáticamente si está configurado
    historyApiFallback: true,  // Permite que Vite maneje las rutas como una SPA
  },
});
