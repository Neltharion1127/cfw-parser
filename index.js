module.exports.parse = async (
  raw,
  { axios, yaml, notify, console },
  { name, url, interval, selected }
) => {
  const commonFunction = require("./commonFunction.js");
  const obj = yaml.parse(raw);
  const proxyGroupName = obj["proxy-groups"][0]["name"]
  commonFunction(obj,proxyGroupName)
  return yaml.stringify(obj);
};