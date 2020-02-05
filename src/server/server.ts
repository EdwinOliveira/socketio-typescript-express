/** Imports
 * AppSocket, will import the socket and routes.
 * http, to run the server.
 */
import AppSocket from './socket';

class AppServer {
    private port: String|Number = process.env.PORT || AppSocket.port;
    
    constructor() {
        this.listen();
    };

    private listen():void {
        AppSocket.server.listen(this.port, () => {
            console.log(`Server running in Port: ${this.port}`)
        });
    }
}

let app = new AppServer();