import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host: true, // Escucha en todas las interfaces de red
   // port: 5172, // Puerto en el que se ejecutará tu aplicación
  }
})
