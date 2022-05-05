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
  }


  public sendMessage(message: string) {
    this.socket.emit('message', message);
  }

  private listenToMessage() {
    this.socket.on('message', (message: string) => {
      console.log("Received message via websocket: " + message);
    });
  }

}
