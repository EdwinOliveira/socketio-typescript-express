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

    public async checkLogin(data: JSON):Promise<number> {
        // Verifies if the user is on the database
        const resultRows = await this.clientVar.query(`select check_user('${data}')`);
        const valueToReturn: number = resultRows.rows[0].check_user;

        return valueToReturn;
    }

}

export {AppDatabase};