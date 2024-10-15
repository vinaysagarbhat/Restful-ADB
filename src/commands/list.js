async function list(adb) {
  const devices = await adb.listDevices();
  return devices;
}

async function listLong(adb) {
  const devices = await adb.listDevicesWithPaths();
  return devices;
}

export { list, listLong };
