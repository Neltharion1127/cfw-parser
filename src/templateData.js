// This file is not using, just a sample for raw
module.exports =  {
    port: 7890,
    "socks-port": 7891,
    "allow-lan": true,
    mode: "Rule",
    "log-level": "info",
    "external-controller": ":9090",
    proxies: [
      {
        name: "vmess",
        server: "",
        port: 443,
        type: "vmess",
        uuid: "",
        alterId: 0,
        cipher: "auto",
        tls: true,
        "skip-cert-verify": false,
        network: "ws",
        "ws-opts": [Object],
        udp: true,
      },
    ],
    "proxy-groups": [
      { name: "Proxies", type: "select", proxies: [Array] },
      { name: "Apple", type: "select", proxies: [Array] },
      { name: "MicroSoft", type: "select", proxies: [Array] },
      { name: "Telegram", type: "select", proxies: [Array] },
      { name: "Streaming", type: "select", proxies: [Array] },
      { name: "StreamingSE", type: "select", proxies: [Array] },
      { name: "Netease", type: "select", proxies: [Array] },
      { name: "HK", type: "select", proxies: [Array] },
      { name: "SG", type: "select", proxies: [Array] },
      { name: "TW", type: "select", proxies: [Array] },
      { name: "JP", type: "select", proxies: [Array] },
      { name: "US", type: "select", proxies: [Array] },
    ],
    rules: [
      "DOMAIN-SUFFIX,17gouwuba.com,REJECT",
      "DOMAIN-SUFFIX,186078.com,REJECT",
      "DOMAIN-SUFFIX,189zj.cn,REJECT",
      "DOMAIN-SUFFIX,285680.com,REJECT",
      "DOMAIN-SUFFIX,3721zh.com,REJECT",
      "DOMAIN-SUFFIX,4336wang.cn,REJECT",
      "DOMAIN-SUFFIX,51chumoping.com,REJECT",
      "DOMAIN-SUFFIX,51mld.cn,REJECT",
      "DOMAIN-SUFFIX,51mypc.cn,REJECT",
      "DOMAIN-SUFFIX,58mingri.cn,REJECT",
      "DOMAIN-SUFFIX,58mingtian.cn,REJECT",
      "DOMAIN-SUFFIX,5vl58stm.com,REJECT",
      "DOMAIN-SUFFIX,6d63d3.com,REJECT",
      "DOMAIN-SUFFIX,7gg.cc,REJECT",
      "DOMAIN-SUFFIX,91veg.com,REJECT",
      "DOMAIN-SUFFIX,9s6q.cn,REJECT",
      "DOMAIN-SUFFIX,adsame.com,REJECT",
      "DOMAIN-SUFFIX,akuai.top,REJECT",
      "DOMAIN-SUFFIX,atplay.cn,REJECT",
      "DOMAIN-SUFFIX,baiwanchuangyi.com,REJECT",
      "DOMAIN-SUFFIX,beerto.cn,REJECT",
      "DOMAIN-SUFFIX,beilamusi.com,REJECT",
      "DOMAIN-SUFFIX,benshiw.net,REJECT",
      "DOMAIN-SUFFIX,bianxianmao.com,REJECT",
      "DOMAIN-SUFFIX,bkyhq.cn,REJECT",
      "DOMAIN-SUFFIX,bryonypie.com,REJECT",
      "DOMAIN-SUFFIX,cishantao.com,REJECT",
      "DOMAIN-SUFFIX,cszlks.com,REJECT",
      "DOMAIN-SUFFIX,cudaojia.com,REJECT",
      "DOMAIN-SUFFIX,dafapromo.com,REJECT",
      "DOMAIN-SUFFIX,daitdai.com,REJECT",
      "DOMAIN-SUFFIX,dsaeerf.com,REJECT",
      "DOMAIN-SUFFIX,dugesheying.com,REJECT",
      "DOMAIN-SUFFIX,dv8c1t.cn,REJECT",
      "DOMAIN-SUFFIX,echatu.com,REJECT",
      "DOMAIN-SUFFIX,erdoscs.com,REJECT",
      "DOMAIN-SUFFIX,fan-yong.com,REJECT",
      "DOMAIN-SUFFIX,feih.com.cn,REJECT",
      "DOMAIN-SUFFIX,fjlqqc.com,REJECT",
      "DOMAIN-SUFFIX,fkku194.com,REJECT",
      "DOMAIN-SUFFIX,freedrive.cn,REJECT",
      "DOMAIN-SUFFIX,gclick.cn,REJECT",
      "DOMAIN-SUFFIX,goufanli100.com,REJECT",
      "DOMAIN-SUFFIX,goupaoerdai.com,REJECT",
      "DOMAIN-SUFFIX,gouwubang.com,REJECT",
      "DOMAIN-SUFFIX,gscxs.cn,REJECT",
      "DOMAIN-SUFFIX,gzxnlk.com,REJECT",
      "DOMAIN-SUFFIX,haoshengtoys.com,REJECT",
      "DOMAIN-SUFFIX,hbssjd.cn,REJECT",
      "DOMAIN-SUFFIX,hyunke.com,REJECT",
      "DOMAIN-SUFFIX,ichaosheng.com,REJECT",
      "DOMAIN-SUFFIX,ishop789.com,REJECT",
      "DOMAIN-SUFFIX,jdkic.com,REJECT",
      "DOMAIN-SUFFIX,jiubuhua.com,REJECT",
      "DOMAIN-SUFFIX,jsncke.com,REJECT",
      "DOMAIN-SUFFIX,junkucm.com,REJECT",
      "DOMAIN-SUFFIX,jwg365.cn,REJECT",
      "DOMAIN-SUFFIX,kawo77.com,REJECT",
      "DOMAIN-SUFFIX,kualianyingxiao.cn,REJECT",
      "DOMAIN-SUFFIX,kumihua.com,REJECT",
      "DOMAIN-SUFFIX,ltheanine.cn,REJECT",
      "DOMAIN-SUFFIX,lvehaisen.com,REJECT",
      "DOMAIN-SUFFIX,maipinshangmao.com,REJECT",
      "DOMAIN-SUFFIX,minisplat.cn,REJECT",
      "DOMAIN-SUFFIX,mkitgfs.com,REJECT",
      "DOMAIN-SUFFIX,mlnbike.com,REJECT",
      "DOMAIN-SUFFIX,mobjump.com,REJECT",
      "DOMAIN-SUFFIX,nbkbgd.cn,REJECT",
      "DOMAIN-SUFFIX,newapi.com,REJECT",
      "DOMAIN-SUFFIX,pinzhitmall.com,REJECT",
      "DOMAIN-SUFFIX,poppyta.com,REJECT",
      "DOMAIN-SUFFIX,qianchuanghr.com,REJECT",
      "DOMAIN-SUFFIX,qichexin.com,REJECT",
      "DOMAIN-SUFFIX,qinchugudao.com,REJECT",
      "DOMAIN-SUFFIX,quanliyouxi.cn,REJECT",
      "DOMAIN-SUFFIX,qutaobi.com,REJECT",
      "DOMAIN-SUFFIX,ry51w.cn,REJECT",
      "DOMAIN-SUFFIX,sg536.cn,REJECT",
      "DOMAIN-SUFFIX,sifubo.cn,REJECT",
      "DOMAIN-SUFFIX,sifuce.cn,REJECT",
      "DOMAIN-SUFFIX,sifuda.cn,REJECT",
      "DOMAIN-SUFFIX,sifufu.cn,REJECT",
      "DOMAIN-SUFFIX,sifuge.cn,REJECT",
      "DOMAIN-SUFFIX,sifugu.cn,REJECT",
      "DOMAIN-SUFFIX,sifuhe.cn,REJECT",
      "DOMAIN-SUFFIX,sifuhu.cn,REJECT",
      "DOMAIN-SUFFIX,sifuji.cn,REJECT",
      "DOMAIN-SUFFIX,sifuka.cn,REJECT",
      "DOMAIN-SUFFIX,smgru.net,REJECT",
      "DOMAIN-SUFFIX,taoggou.com,REJECT",
      "DOMAIN-SUFFIX,tcxshop.com,REJECT",
      "DOMAIN-SUFFIX,tjqonline.cn,REJECT",
      "DOMAIN-SUFFIX,topitme.com,REJECT",
      "DOMAIN-SUFFIX,tt3sm4.cn,REJECT",
      "DOMAIN-SUFFIX,tuia.cn,REJECT",
      "DOMAIN-SUFFIX,tuipenguin.com,REJECT",
      "DOMAIN-SUFFIX,tuitiger.com,REJECT",
      "DOMAIN-SUFFIX,urlaw.cn,REJECT",
      "DOMAIN-SUFFIX,urlet.cn,REJECT",
      "DOMAIN-SUFFIX,websd8.com,REJECT",
    ],
  };