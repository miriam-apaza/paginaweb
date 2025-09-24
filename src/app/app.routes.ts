import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { About } from './about/about';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path:'',
        component:Layout,
        children:[
             
    {
        path:'',
        component:Home,
        title:'Inicio'
    },
    {
        path:'about',
        component:About,
        title:'Acerca de'
    }

        ]
    }
 
];
