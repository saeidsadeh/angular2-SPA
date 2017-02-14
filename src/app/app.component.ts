import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template:   
      `
    <nav>
    <a routerLink="/home" routerLinkActive="active">Home</a> |
    <a routerLink="/about" routerLinkActive="active">about us</a>
    </nav>
    <!-- Where router should display a view -->
    <router-outlet></router-outlet>`
})
export class AppComponent { }


