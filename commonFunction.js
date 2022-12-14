module.exports = (obj, proxyGroupName) => {
  const { useProxyRule, specialRules, specialGroup } = require("./rules");
  // useProxyRule不能直接修改原数组，clash没有关闭的情况下会反复引用修改后的数组
  // 添加rule 默认将useProxyRule中的规则添加第一条规则
  obj["rules"].unshift(
    ...useProxyRule.map((item) => item + "," + proxyGroupName),
    ...specialRules
  );
  // 添加proxy-group
  const proxies = [proxyGroupName, ...obj.proxies.map((item) => item.name)];
  obj["proxy-groups"].push(
    ...specialGroup.map((item) => {
      item.proxies = proxies;
      return item;
    })
  );
  return obj;
};
