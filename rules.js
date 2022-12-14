module.exports = {
  // 普通代理
  useProxyRule : [
    "DOMAIN-KEYWORD,github",
    "DOMAIN-KEYWORD,spotify",
    "DOMAIN-SUFFIX,wikipedia.org",
    "DOMAIN-KEYWORD,epic",
    "DOMAIN-KEYWORD,afreecatv.com",
    "DOMAIN-KEYWORD,spotify",
    "DOMAIN-SUFFIX,op.gg",
    "DOMAIN-SUFFIX,thepiratebay.org",
    "DOMAIN-SUFFIX,reactjs.org",
    "DOMAIN-SUFFIX,akamaized.net",
    "DOMAIN-SUFFIX,wikimedia.org",
    "DOMAIN-SUFFIX,huo720.com",
    "DOMAIN-SUFFIX,v2ex.com",
    "DOMAIN-SUFFIX,subhd.la",
    "DOMAIN-SUFFIX,amazonaws.com",
    "DOMAIN-SUFFIX,discord.com",
    "DOMAIN-SUFFIX,duyaoss.com",
    "DOMAIN-SUFFIX,gravatar.com",
  ],
  // 特定域名的代理
  specialRules :["DOMAIN-SUFFIX,openai.com,OpenAI"],
  // 代理组的名称
  specialGroup: [
    {
      name: "OpenAI",
      type: "select",
      proxies: null,
    },
  ]
  
}