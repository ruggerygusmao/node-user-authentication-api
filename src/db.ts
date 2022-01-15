import { Pool } from "pg";

const connectionString = 'postgres://thrabafw:J2CgnpQoGdtpgszmlBH-3z1zXvqaSFdY@kesavan.db.elephantsql.com/thrabafw';

const db = new Pool({connectionString});

export default db;