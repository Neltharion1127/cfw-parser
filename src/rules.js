module.exports = {
    // 普通代理
    useProxyRule: [
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
        "DOMAIN-SUFFIX,readwise.io",
        "DOMAIN-SUFFIX,redd.it",
        "DOMAIN-SUFFIX,redditstatic.com",
        "DOMAIN-SUFFIX,fengzg.net",
        "DOMAIN-SUFFIX,stackoverflow.com",
        "DOMAIN-SUFFIX,nextjs.org",
        "DOMAIN-SUFFIX,ubuntu.com",
        "DOMAIN-SUFFIX,windows.net",
        "DOMAIN-SUFFIX,csgostats.gg",
        "DOMAIN-SUFFIX,netflav.com",
        "DOMAIN-SUFFIX,riotgames.com",
        "DOMAIN-KEYWORD,steamcommunity.com",
        "DOMAIN-SUFFIX,paypal.com",
        "DOMAIN-KEYWORD,openwrt.org"
    ],
    // 特定域名的代理
    specialRules: [
        "DOMAIN-SUFFIX,openai.com,OpenAI",
        "IP-CIDR,140.83.85.183/32,Oracle VPS",
        "IP-CIDR,152.69.193.156/32,Oracle VPS"
    ],
    // 代理组的名称
    specialGroup: [
        {
            name: "OpenAI",
            type: "select",
            proxies: null,
        },
        {
            name: "Oracle VPS",
            type: "select",
            proxies: null,
        },
    ],
};
