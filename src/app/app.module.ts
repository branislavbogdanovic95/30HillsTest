import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ROUTING } from "app/app.routes";
import {
  MainComponent,
  TopnavComponent,
  ContentComponent,
  FooterComponent
} from "app/_components";
import { GraphComponent } from './_components/content/graph/graph.component';
import { SocialService } from "app/_services";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopnavComponent,
    ContentComponent,
    FooterComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTING
  ],
  providers: [SocialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
