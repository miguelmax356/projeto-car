import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations'; // Habilitar animações se necessário

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]), // Substitua [] pelas suas rotas
    provideAnimations(), // Inclua apenas se animações forem necessárias
  ],
};
