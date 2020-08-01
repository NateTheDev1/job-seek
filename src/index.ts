// ENVIRONMENT
require("dotenv").config();
const ENV: String = process.env.NODE_ENV!;
const PORT: String = process.env.PORT!;

import cors from "cors";
import helmet from "helmet";

import server from "./server/server";

server.use(helmet());
server.use(cors());

// LISTENING
require("better-logging")(console);
server.listen(PORT, () => {
  console.info(`Server is running in ${ENV} on port ${PORT}`);
});
