import express from "express";

import { listLong } from "../commands/list.js";
import { reboot } from "../commands/power.js";

function getAdbRoutes() {
  const router = express.Router();
  router.get("/list-long", verboseListDevices);
  router.post("/power/reboot", rebootDevice);
  return router;
}

async function rebootDevice(req, res) {
  const isRebooted = await reboot(req.app.locals.adb, req.body.deviceSerial);
  res.json({ isRebooted });
}

async function verboseListDevices(req, res) {
  const deviceListVerbose = await listLong(
    req.app.locals.adb,
    req.app.locals.adbUtil
  );
  res.json(deviceListVerbose);
}

export { getAdbRoutes };
