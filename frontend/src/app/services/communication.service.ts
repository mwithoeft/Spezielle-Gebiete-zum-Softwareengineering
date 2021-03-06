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

  private protocolService! : WebsocketService | WebtransportService;

  public downloadFiles: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor(private injector: Injector) {
    
    if (environment.websocket) {
      this.protocolService = <WebsocketService>this.injector.get(WebsocketService);
    } else {
      this.protocolService = <WebtransportService>this.injector.get(WebtransportService);
    }
    this.protocolService.init(this.downloadFiles);

    this.protocolService.requestAvailableFiles();
  }

  downloadFile(filename: string) {
    this.protocolService.downloadFile(filename);
  }

  startPingTest() {
    console.log("Starting ping test");
    this.protocolService.startPingTest(0);
  }

  startMultiClientTest() {
    console.log("Starting multi client test");
    this.protocolService.startMultiClientTest(300);
  }

}
