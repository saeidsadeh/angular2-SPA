import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './app.component';
import { PageDefault }    from './app.pagedefault';
import { detailComponent }    from './app.detailComponent';

import { PageAComponent } from './app.page-a';
import { aboutComponent } from './app.aboutComponent';
import { routing } from './app.routing';

@NgModule({
    imports:      [ BrowserModule, routing, HttpModule, ],
    declarations: [ AppComponent, PageDefault, 
                    PageAComponent, aboutComponent, detailComponent ],
    bootstrap:    [ AppComponent ],
})	
export class AppModule { }