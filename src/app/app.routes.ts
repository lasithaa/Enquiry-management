import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SubmitEnquiryComponent } from './pages/submit-enquiry/submit-enquiry.component';

export const routes: Routes = [


    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'submit-enquiry',
        component: SubmitEnquiryComponent

    }




];
