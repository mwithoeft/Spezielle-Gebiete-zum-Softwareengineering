import { Injectable } from '@angular/core';

declare var WebTransport: any;

@Injectable({
  providedIn: 'root'
})
export class WebtransportService {

  readonly url = 'https://localhost:4433';

  constructor() {
    console.log("Using WebTransportService");
    this.init();
  }

  async init() {
    const transport = new WebTransport(this.url);


    transport.closed.then(() => {
      console.log(`The HTTP/3 connection to ${this.url} closed gracefully.`);
    }).catch((error: any) => {
      console.error(`The HTTP/3 connection to ${this.url} closed due to ${error}.`);
    });

    await transport.ready;
  }

}
