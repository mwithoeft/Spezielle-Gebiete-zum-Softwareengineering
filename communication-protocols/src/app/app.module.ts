import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunicationService } from './services/communication.service';
import { WebsocketService } from './services/websocket.service';
import { WebtransportService } from './services/webtransport.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
  ],
  providers: [CommunicationService, WebsocketService, WebtransportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
