import { Routes } from '@angular/router';

export const routes: Routes = [
       {
        path: '',
        loadChildren: () => import('../app/components/layout/main.module').then(m => m.MainModule),
 },
];
