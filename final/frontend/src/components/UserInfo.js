import { useEffect } from "react";
import { UAParser } from "ua-parser-js";

export function UserInfo({ setUserInfo }) {
  // https://stackoverflow.com/a/8076436
  function hashCode(string) {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
      var code = string.charCodeAt(i);
      hash = (hash << 5) - hash + code;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  }

  useEffect(() => {
    var uap = new UAParser();

		var signature = JSON.stringify(uap.getResult());
		// remove double quotes
		signature = signature.replace(/['"]+/g, '')

    setUserInfo({
      ram: navigator.deviceMemory,
      cpu_cores: navigator.hardwareConcurrency,
      cpu_arch: uap.getCPU(),
      os: uap.getOS(),
      engine: uap.getEngine(),
      browser: uap.getBrowser(),
      device: uap.getDevice(),
      signature: hashCode(signature),
    });
  }, []);
}
