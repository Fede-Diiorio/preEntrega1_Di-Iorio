import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import url('https://fonts.googleapis.com/css2?family=Lato&family=Prompt:wght@400;700&display=swap');
          $fuentePrincipal: 'Prompt', sans-serif;
          $fuenteSecundaria: 'Lato', sans-serif;
          $primario: #35A7FF;
          $primarioOscuro: #004777;
          $secundario: #FFE74C;
          $secundarioOscuro: #D5B800;
          $auxiliar: #C2FCF7;
          $blanco: #ffffff;
          $negro: #000000;
          $gris: #b1adad;
          $grisOscuro: #3d3d3d;
          $eliminar: #d61d16;
          $eliminarOscuro: #8a130f;
        `,
      },
    },
  },
});
