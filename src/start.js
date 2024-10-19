import express from "express";
import cors from "cors";
import "express-async-errors";
import logger from "loglevel";
import { getRoutes } from "./routes/index.js";
import { adb, adbUtil } from "./shared-adb-connection/adb-connection.js";
import bodyParser from "body-parser";

function startServer({ port = 3001 } = {}) {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json()); // to support JSON-encoded bodies
  app.use(
    bodyParser.urlencoded({
      // to support URL-encoded bodies
      extended: true,
    })
  );
  app.use("/api", getRoutes());
  app.locals.adb = adb;
  app.locals.adbUtil = adbUtil;

  const server = app.listen(port, () => {
    logger.info(`Listening on port ${server.address().port}`);
  });
}

export { startServer };
