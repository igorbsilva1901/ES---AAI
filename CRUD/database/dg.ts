import { Pool } from "pg";

const connectionString = "postgres://qxsgphea:Ep1JsAMHcHbKJ4dApwwtqXFjabsdwV4y@motty.db.elephantsql.com/qxsgphea"

const db = new Pool({ connectionString });

export default db;