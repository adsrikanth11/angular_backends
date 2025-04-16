import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
   { path: '', component: HomeComponent, title: 'Home' },
   { path: 'about', component: AboutComponent, title: 'About' },
   { path: 'contact', component: ContactComponent, title: 'Contact' },
   { path: 'services', component: ServicesComponent, title: 'Services' },
   { path: '**', component: PagenotfoundComponent, title: 'Page Not Found' } // Wildcard route for a 404 page
];
