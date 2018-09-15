import { Pool } from "pg";

export default new Pool({
  user: process.env.BARD_DBUSER,
  database: "bard"
});
