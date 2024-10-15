import express from "express";

import { list, listLong } from "../commands/list.js";

function getAdbRoutes() {
  const router = express.Router();
  router.get("/list", listDevices);
  router.get("/list-long", verboseListDevices);
  return router;
}

async function listDevices(req, res) {
  const deviceList = await list(req.app.locals.adb);
  res.json(deviceList);
}

async function verboseListDevices(req, res) {
  const deviceListVerbose = await listLong(req.app.locals.adb);
  console.log(deviceListVerbose);
  res.json(deviceListVerbose);
}

export { getAdbRoutes };
