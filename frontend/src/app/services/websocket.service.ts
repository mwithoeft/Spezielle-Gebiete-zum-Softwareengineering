import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private socket: Socket) {
    console.log("Using WebSocketService");

    this.socket.connect();
    this.listenToMessage();
    this.sendMessage("Hello from the client");
    this.requestFiles();
  }


  public sendMessage(message: string) {
    this.socket.emit('message', message);
  }

  private listenToMessage() {
    this.socket.on('message', (message: string) => {
      console.log("Received message via websocket: " + message);
    });
  }

  public requestFiles() {
    this.socket.emit('download-files-list');
    this.socket.on('download-files-list', (message: string[]) => {
      console.log(message);
    });
  }

}
