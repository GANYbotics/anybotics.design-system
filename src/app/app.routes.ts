import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tokens',
    loadComponent: () =>
      import('./dev/token-preview/token-preview.component')
        .then(m => m.TokenPreviewComponent)
  }
];