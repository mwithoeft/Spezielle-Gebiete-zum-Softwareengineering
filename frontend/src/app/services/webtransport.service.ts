import { Injectable } from '@angular/core';

declare var WebTransport: any;

@Injectable({
  providedIn: 'root'
})
export class WebtransportService {

  readonly url = 'https://webtransport.withoeft.nz:4433/';

  transport: any;

  constructor() {
    console.log("Using WebTransportService");
    this.connect();
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

      this.send('download-files-list');
  }

  async send(message: string) {
    let encoder = new TextEncoder();
    let data = encoder.encode(message);
    let stream = await this.transport.createBidirectionalStream();
    this.readFromIncomingStream(stream);

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
        console.log('Received data on stream #' + ': ' + data);
      }
    } catch (e) {
      console.error('Error while reading from stream #' + ': ' + e, 'error');
    }
  }

}
