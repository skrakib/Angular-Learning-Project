import { Routes } from '@angular/router';
import { Directive } from './components/directive/directive';
import { DataBinding } from './components/data-binding/data-binding';
import { Variables } from './components/variables/variables';

export const routes: Routes = [
    {
        path:'directive',
        component:Directive
    },
    {
        path:'data-binding',
        component:DataBinding
    },
    {
        path:'variables',
        component:Variables
    }
];
