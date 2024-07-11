import { Routes } from '@angular/router';
import { tarefasRoutes } from './tarefas';


export const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/tarefas', 
        pathMatch: 'full'
    },
    ...tarefasRoutes
];
