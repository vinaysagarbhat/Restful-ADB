import express from "express";
import { getAdbRoutes } from "./adb.js";

function getRoutes() {
  const router = express.Router();
  router.use("/adb", getAdbRoutes());
  return router;
}

export { getRoutes };
