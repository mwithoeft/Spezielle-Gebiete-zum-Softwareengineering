import express from 'express';
import { Server, Socket } from "socket.io";
import { createServer } from "http";
import helmet from "helmet";

import { ICommunicationServer } from "./communicationServer.interface";

export class WebsocketServer implements ICommunicationServer {


    start() {
        console.log("Using WebsocketServer");

        const port = 3000;
        const app = express();
        app.use(helmet());
        const httpServer = createServer(app);

        const io = new Server(httpServer, {
            cors: {
                origin: "*",
            },
        });


        io.on("connection", (socket: Socket) => {
            console.log("a user connected");
        });


        httpServer.listen(port, () => {
            console.log(`started on port: ${port}`);
        });
    }

}
