import { Injectable } from '@angular/core';

declare var WebTransport: any;

@Injectable({
  providedIn: 'root'
})
export class WebtransportService {

  readonly url = 'https://example.com:4999/foo/bar';

  constructor() {
    console.log("Using WebTransportService");
    this.init();
  }

  init() {
    const wt = new WebTransport(this.url);
  }

}
