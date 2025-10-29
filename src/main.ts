import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // 🔥 este import es clave
import { provideAnimations } from '@angular/platform-browser/animations'; // si usas Angular Material

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),              // ✅ Esto habilita las rutas
    provideAnimations(),                // Necesario para Angular Material
  ],
};