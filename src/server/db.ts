import * as client from 'pg'
import {AppDatabaseInterface} from './dto/db-interface';
import {getDbParams} from './env';

class AppDatabase {
    public clientVar!: client.Client;

    constructor() {       
        // Calling the function that will create the connection string and will after that connect to the database.
        this.connectingToDatabase();
    }

    private creatingConnectionString(): string {
        const dbParams: AppDatabaseInterface = getDbParams();
        return `postgresql://${dbParams.username}:${dbParams.password}@${dbParams.host}:${dbParams.port}/${dbParams.database}`
    }

    private connectingToDatabase():void {
        this.clientVar = new client.Client({
            connectionString: this.creatingConnectionString()
        });

        this.clientVar.connect();
    }

}

export {AppDatabase};