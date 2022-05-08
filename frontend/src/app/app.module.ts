import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunicationService } from './services/communication.service';
import { WebsocketService } from './services/websocket.service';
import { WebtransportService } from './services/webtransport.service';
import { LargeFilesComponent } from './large-files/large-files.component';

const config: SocketIoConfig = { url: 'http://webtransport.withoeft.nz:4444', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    LargeFilesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [CommunicationService, WebsocketService, WebtransportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
