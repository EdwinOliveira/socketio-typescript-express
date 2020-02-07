import {AppDatabaseInterface} from './dto/db-interface';


/** Database Variables
 * Host - PostgreSQL database host. (Ex... Localhost)
 * Username - PostgreSQL database profile username. (Ex... Postgres)
 * Password - PostgreSQL database profile password. (Ex... Postgres)
 * Database - PostgreSQL desired database. (Ex... default)
 * Port - PostgreSQL Port listening to. (Ex... 5432)
 */

 function getDbParams(): AppDatabaseInterface {
    const dbParams: AppDatabaseInterface = {
        host: 'localhost',
        username: 'postgres',
        password: 'postgres',
        database: 'socket',
        port: 5432
    };
    
    return dbParams;
 }

 export {getDbParams};