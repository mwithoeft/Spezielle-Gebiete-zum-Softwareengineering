import { Injectable } from '@angular/core';
import { Injector } from '@angular/core'  
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WebsocketService } from './websocket.service';
import { WebtransportService } from './webtransport.service';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  protocolService! : WebsocketService | WebtransportService;

  constructor(private injector: Injector) {
    if (environment.websocket) {
      this.protocolService = <WebsocketService>this.injector.get(WebsocketService);
    } else {
      this.protocolService = <WebtransportService>this.injector.get(WebtransportService);
    }
  }

  

}
