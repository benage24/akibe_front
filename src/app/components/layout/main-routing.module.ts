import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';

const routes: Routes = [

    {
      path: '',
      component: MainComponent,
      children: [
        // {
        //   path: 'home',
        //   loadChildren: () => import('../../pages/home/home.component').then(m => m.TodoModule),
        // },
         {
        path: '',
        loadComponent: () => import('../../pages/home/home.component').then(c => c.HomeComponent),
      },
    //   {
    //     path: 'student',
    //     loadChildren: () => import('../../pages/students/student.module').then(m => m.StudentModule),
    //   },
      ],
    },
   
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MainRoutingModule { }