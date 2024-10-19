async function reboot(adb, deviceSearial) {
  const device = await adb.getDevice(deviceSearial);
  const isRebooted = await device.reboot();
  return isRebooted;
}

export { reboot };
