import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  constructor(private socket: Socket) {
  }

  downloadFiles! : BehaviorSubject<string[]>;

  init(downloadFiles: BehaviorSubject<string[]>) {
    console.log("Using WebSocketService");

    this.downloadFiles = downloadFiles;

    this.socket.connect();
    this.activateListeners();
  }


  public sendMessage(message: string) {
    this.socket.emit('message', message);
  }

  private activateListeners() {
    this.socket.on('message', (message: string) => {
      console.log("Received message via websocket: " + message);
    });

    this.socket.on('download-files-list', (message: string[]) => {
      this.downloadFiles.next(message);
    });

    this.socket.on('download-file', (filename: string, file: Uint8Array) => {
      let blob = new Blob([file], { type: 'application/octet-stream' });
      let url = window.URL.createObjectURL(blob);
      let a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.click();
      console.timeEnd("downloadFile");
    });
  }

  public requestAvailableFiles() {
    this.socket.emit('download-files-list');
    

  }

  public downloadFile(filename: string) {
    console.time("downloadFile");
    this.socket.emit('download-file', filename);
  }

}
