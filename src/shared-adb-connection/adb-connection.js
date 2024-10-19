import Adb from "@devicefarmer/adbkit";
const adb = Adb.Adb.createClient();
const adbUtil = Adb.Adb.util;

export { adb, adbUtil };
