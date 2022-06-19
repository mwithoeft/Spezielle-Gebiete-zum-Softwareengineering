import { Injectable } from '@angular/core';
import { Socket, SocketIoConfig } from 'ngx-socket-io';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  constructor(private socket: Socket) {
  }

  downloadFiles! : BehaviorSubject<string[]>;

  testDownloadSpeed = false;
  downloadCounter = 0;

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
      
      if (this.testDownloadSpeed && this.downloadCounter < 100) {
        this.downloadCounter++;
        this.downloadFile(filename);
      }
    });
  }

  public requestAvailableFiles() {
    this.socket.emit('download-files-list');
  }

  public downloadFile(filename: string) {
    console.time("downloadFile");
    this.socket.emit('download-file', filename);
  }

  public startPingTest(i:number, max=1) {
    let start = Date.now()
    let that = this;
    this.socket.on('ping', function(data: string){
      console.log('Got a single with:', data)
      if (i >= max) {
        let end = Date.now()
        let persec = i / (end - start) * 1000
        console.log('Took %s ms %s/s', end - start, persec.toFixed(2))
        that.socket.removeListener('ping')
        return;
      }
      that.socket.emit('ping', i+=1);
    })
    this.socket.emit('ping', i)
  }

  public startMultiClientTest(connections: number) {
    const config: SocketIoConfig = { url: 'http://websocket.withoeft.nz:4444', options: {} };
    
    console.time("multiClientTest");
    let counter = 0;

    for (let i = 0; i < connections; i++) {
      let socket = new Socket(config);
      socket.emit('multi-client-test', "2_1MB.bin");

      socket.on('multi-client-test', (filename: string, file: Uint8Array) => {
        let blob = new Blob([file], { type: 'application/octet-stream' });
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        counter++;
        if (counter >= connections) {
          console.timeEnd("multiClientTest");
        }
      });
    }

  }

}
