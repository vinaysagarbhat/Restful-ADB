async function listLong(adb, adbUtil) {
  const devices = await adb.listDevicesWithPaths();
  for (const device of devices) {
    const adbDevice = await adb.getDevice(device.id);
    let shellSocket = await adbDevice.shell("dumpsys battery | grep level");
    const battery = await adbUtil.readAll(shellSocket);
    device.battery = parseInt(
      battery.toString("utf-8").replace("level: ", "").trim()
    );
    shellSocket = await adbDevice.shell(
      "settings get system screen_brightness"
    );
    const brightness = await adbUtil.readAll(shellSocket);
    device.brightness = Math.round(
      (parseInt(brightness.toString("utf-8").trim()) / 255) * 100
    );
    console.log(device.brightness);
  }
  console.log("battery", devices);
  return devices;
}

export { listLong };
