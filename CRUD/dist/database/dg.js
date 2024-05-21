"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const connectionString = "postgres://qxsgphea:Ep1JsAMHcHbKJ4dApwwtqXFjabsdwV4y@motty.db.elephantsql.com/qxsgphea";
const db = new pg_1.Pool({ connectionString });
exports.default = db;
