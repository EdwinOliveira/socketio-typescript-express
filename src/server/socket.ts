/** Imports
 * Express, access to the Node.JS framework Express.
 * Http, will create the server.
 * Socket.IO, it will use the socket.io to create a real comunication between server and client.
 */
import express from 'express';
import * as http from 'http';
import ioSocket = require('socket.io');
import path from 'path';

/** Class Server
 * It will create the server.
 * Socket will be listening on that server.
 */
class AppSocket {
    private app!: express.Application;
    public server!: http.Server;
    private socket!: SocketIO.Server;
    public port: String|Number = 5000;
    
    constructor() {
        
        /** Initializers
         * Express;
         * Server;
         * Socket.IO;
         */
         this.awardExpress();
         this.awardServer();
         this.awardSocketIo();

        /** Running
         * Socket listening and Routes created;
         */
        this.routes();
        this.listen();
    }

    private awardExpress():void {
        this.app = express();
    }

    private awardServer():void {
        this.server = http.createServer(this.app);
    }

    private awardSocketIo():void {
        this.socket = ioSocket(this.server);
    }
    
    /** Routes
     * All the routes for the application will be dropped here, even css and js ones.
     */
    private routes():void {
        this.app.get('/', (req: express.Request, res: express.Response) => {
            res.sendFile(path.resolve(__dirname,'..' + '/client/html/index.html'));
        });

        this.app.get('/css/index.css',(req: express.Request, res: express.Response) => {
            res.sendFile(path.resolve(__dirname,'..' + '/client/css/index.css'));
        });

        this.app.get('/js/index.js',(req: express.Request, res: express.Response) => {
            res.sendFile(path.resolve(__dirname,'..' + '/client/js/index.js'));
        });
    }

    /** Listen
     * It will always be listening for client connects and requests from the clients on the socket functions.
     */
    private listen():void {
        this.socket.on('connection', (socket: any) => {
            socket.on('login', (data: JSON) => {
                console.log(data)
            })
        })
    }
}

export default new AppSocket();