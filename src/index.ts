// ENVIRONMENT
require("dotenv").config();
const ENV: String = process.env.NODE_ENV!;
const PORT: String = process.env.PORT!;

import cors from "cors";
import helmet from "helmet";

import server from "./server/server";

server.use(helmet());
server.use(cors());

//APOLLO
import { server as GQLServer } from "./gql";
GQLServer.applyMiddleware({ app: server });

// LISTENING
import chalk from "chalk";
require("better-logging")(console, {
  format: (ctx: any) =>
    ` ${ctx.STAMP("SERVER MESSAGE", chalk.blue)} ${ctx.msg}`,
});

server.listen(PORT, () => {
  console.info(`🚀 Server is running in ${ENV} on port ${PORT}`);
});
