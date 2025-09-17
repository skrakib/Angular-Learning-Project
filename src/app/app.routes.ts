import { Routes } from '@angular/router';
import { Directive } from './components/directive/directive';
import { DataBinding } from './components/data-binding/data-binding';
import { Variables } from './components/variables/variables';
import { TemplateForm } from './components/template-form/template-form';
import { ApiCall } from './components/api-call/api-call';
import { User } from './components/user/user';

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
    },
    {
        path:'Template',
        component:TemplateForm
    },
    {
        path:'api-call',
        component:ApiCall
    },
    {
        path:'user',
        component:User
    }
];
