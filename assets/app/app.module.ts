import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from "./app.component";

import { SidenavComponent } from "./components/includes/sidenav/sidenav.component";
import { RightnavComponent } from "./components/includes/rightnav/rightnav.component";
import { NavbarComponent } from "./components/includes/navbar/navbar.component";

import { TimelineComponent } from "./components/pages/timeline/timeline.component";




@NgModule({
    declarations: [
        AppComponent,
        SidenavComponent,
        TimelineComponent,
        RightnavComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}