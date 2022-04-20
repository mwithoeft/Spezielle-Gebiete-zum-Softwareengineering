import 'dotenv/config';

import { ICommunicationServer } from "./communicationServer.interface";
import { WebsocketServer } from './websocketServer';
import { WebtransportServer } from './webtransportServer';

let communicationServer: ICommunicationServer;

if (process.env.PROTOCOL === "websocket") {
  communicationServer = new WebsocketServer();
} else {
  communicationServer = new WebtransportServer();
}

communicationServer.start();

