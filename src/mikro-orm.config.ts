import { Post } from "./entities/Post";
import { User } from "./entities/User";

import { __prod__ } from "./constants";
import path from "path";

require("dotenv").config();

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: "lireddit",
  user: "postgres",
  password: process.env.databasePassword,
  type: "postgresql",
  debug: !__prod__,
} as const;
