"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Imports
 * Express, access to the Node.JS framework Express.
 * Http, will create the server.
 * Socket.IO, it will use the socket.io to create a real comunication between server and client.
 */
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
const ioSocket = require("socket.io");
const path_1 = __importDefault(require("path"));
/** Class Server
 * It will create the server.
 * Socket will be listening on that server.
 */
class AppSocket {
    constructor() {
        this.port = 5000;
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
    awardExpress() {
        this.app = express_1.default();
    }
    awardServer() {
        this.server = http.createServer(this.app);
    }
    awardSocketIo() {
        this.socket = ioSocket(this.server);
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.sendFile(path_1.default.resolve(__dirname, '..' + '/src/client/html/index.html'));
        });
    }
    listen() {
        this.socket.on('connection', (socket) => {
            socket.emit("news", "hey");
        });
    }
}
exports.default = new AppSocket();
