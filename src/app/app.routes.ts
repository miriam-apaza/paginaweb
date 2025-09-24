import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { title } from 'process';
import { About } from './about/about';
import { Home } from './home/home';

export const routes: Routes = [
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
];
