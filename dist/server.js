"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Imports
 * AppSocket, will import the socket and routes.
 * http, to run the server.
 */
const socket_1 = __importDefault(require("../server/socket"));
class AppServer {
    constructor() {
        this.port = process.env.PORT || socket_1.default.port;
        this.listen();
    }
    ;
    listen() {
        socket_1.default.server.listen(this.port, () => {
            console.log(`Server running in Port: ${this.port}`);
        });
    }
}
let app = new AppServer();
