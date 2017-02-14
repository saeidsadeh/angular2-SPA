import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { AppComponent }          from './app.component';
import { PageAComponent }        from './app.page-a';
import { aboutComponent }        from './app.aboutComponent';
import { PageDefault }           from './app.pagedefault';
import { detailComponent }       from './app.detailComponent';

const appRoutes: Routes = [
  { path: 'home', component: PageAComponent },
  { path: 'about', component: aboutComponent },
  { path: 'detail/:id/:name', component: detailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageDefault }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);