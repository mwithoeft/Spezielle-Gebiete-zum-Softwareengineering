import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

declare var WebTransport: any;

@Injectable({
  providedIn: 'root'
})
export class WebtransportService {

  readonly url = 'https://webtransport.withoeft.nz:4433/';
  fileName = "";
  transport: any;

  counterActive = true;
  start = 0;
  counter = 0;
  max = 1000;

  downloadFiles! : BehaviorSubject<string[]>;

  constructor() {}

  init(downloadFiles: BehaviorSubject<string[]>) {
    console.log("Using WebTransportService");
    this.connect();

    this.downloadFiles = downloadFiles;
  }

  async connect() {
    try {
      this.transport = new WebTransport(this.url);
      console.log('Initiating connection...');
    } catch (e) {
      console.error('Failed to create connection object. ' + e, 'error');
      return;
    }

    try {
      await this.transport.ready;
      console.log('Connection ready.');
    } catch (e) {
      console.error('Connection failed. ' + e, 'error');
      return;
    }

    this.transport.closed
      .then(() => {
        console.log('Connection closed normally.');
      })
      .catch(() => {
        console.error('Connection closed abruptly.', 'error');
      });
  }

  async send(message: string, type: "string" | "binary") {
    let encoder = new TextEncoder();
    let data = encoder.encode(message);
    let stream = await this.transport.createBidirectionalStream();
    
    switch (type) {
      case "string":
        this.readFromIncomingStream(stream);
        break;
      case ("binary"):
        this.readFromIncomingBinaryStream(stream);
        break;
    }
    

    let writer = stream.writable.getWriter();
    await writer.write(data);
    await writer.close();
  }

  async readFromIncomingStream(stream: any) {
    let decoder = new TextDecoder();
    let reader = stream.readable.getReader();
    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          console.log('Stream #' + ' closed');
          return;
        }
        let data = decoder.decode(value);

        let dataArray = data.split('$');

        if (dataArray[0] === 'download-files-list') {
          this.downloadFiles.next(JSON.parse(dataArray[1]));
        }

        if (this.counterActive && this.counter >= this.max-1) {
          let end = Date.now()
          let persec = this.counter / (end - this.start) * 1000
          console.log('Took %s ms %s/s', end - this.start, persec.toFixed(2))
          return;
        }

        console.log('Received data on stream #' + ': ' + data);
      }
    } catch (e) {
      console.error('Error while reading from stream #' + ': ' + e, 'error');
    }
  }

  async readFromIncomingBinaryStream(stream: any) {
    let reader = stream.readable.getReader();

    let data = new Uint8Array();

    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          //console.log('Stream #' + ' closed');

          let blob = new Blob([data], { type: 'application/octet-stream' });
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.href = url;
          a.download = this.fileName;
          a.click();
          this.counter++;
          
          if (this.counterActive && this.counter >= this.max) {
            console.timeEnd("downloadFile");
          }
          else if (!this.counterActive) console.timeEnd("downloadFile");
          return;
        }
        data = new Uint8Array([...data, ...value])
        
      }
    } catch (e) {
      console.error('Error while reading from stream #' + ': ' + e, 'error');
    }
  }

  public async requestAvailableFiles() {
    await this.transport.ready;
    this.send('download-files-list', 'string');
  }

  public async downloadFile(filename: string) {
    await this.transport.ready;

      console.time("downloadFile");    
      this.fileName = filename;

      this.send('download-file'+'$'+filename, 'binary');
  }

  public async startPingTest(i:number, max=this.max) {
    await this.transport.ready;
    this.start = Date.now();
    this.counterActive = true;

    for (let i = 0; i < max; i++) {
      this.send('message', 'string');
      this.counter = i;
    }
  }

  public async startMultiClientTest(connections: number) {      
      console.time("downloadFile");
      this.max = connections;

      for (let i = 0; i < connections; i++) {
        this.multiClientTestAsync();
      }
  }

  async multiClientTestAsync() {
    let connection: any;
        try {
          connection = new WebTransport(this.url);
          //console.log('Initiating connection...');
        } catch (e) {
          console.error('Failed to create connection object. ' + e, 'error');
          return;
        }
    
        try {
          await connection.ready;
          //console.log('Connection ready.');
        } catch (e) {
          console.error('Connection failed. ' + e, 'error');
          return;
        }
    
        connection.closed
          .then(() => {
            console.log('Connection closed normally.');
          })
          .catch(() => {
            console.error('Connection closed abruptly.', 'error');
          });

        let encoder = new TextEncoder();
        let data = encoder.encode('download-file'+'$'+"2_1MB.bin");
        let stream = await this.transport.createBidirectionalStream();

        this.readFromIncomingBinaryStream(stream);

        let writer = stream.writable.getWriter();
        await writer.write(data);
        await writer.close();
  }


}
