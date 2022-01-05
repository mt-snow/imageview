import { Connection, createConnection } from "typeorm";

export default async function connectDatabase(): Promise<Connection> {
    try {
      const conn = await createConnection();
      console.log(`Database connect success. Connection name: '${conn.name}' Database: '${conn.options.database}'`);
      return conn;
    } catch (err) {
      console.error("Database connect fail. Server down.");
      throw err;
    }
  }