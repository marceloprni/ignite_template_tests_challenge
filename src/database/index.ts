//import { createConnection } from 'typeorm';
import 'reflect-metadata';
import {Connection, createConnection, getConnectionOptions } from 'typeorm';

//(async () => await createConnection())();

//interface IOptions {
//    host: string;
//  }
//  
//  getConnectionOptions().then(options => {
//    const newOptions = options as IOptions;
//    newOptions.host = 'database'; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
//    createConnection({
//      ...options,
//    });
//  });

export default async (host = "fin_api"): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();
  
    return createConnection(
      Object.assign(defaultOptions, {
        database:
          process.env.NODE_ENV === "test"
            ? "fin_api_test"
            : defaultOptions.database,
      })
    );
  };