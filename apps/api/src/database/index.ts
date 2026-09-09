import { DatabaseSync } from 'node:sqlite'
import { drizzle } from 'drizzle-orm/node-sqlite'

const sqlite = new DatabaseSync(process.env.DATABASE_FILENAME!)
export const database = drizzle({ client: sqlite })