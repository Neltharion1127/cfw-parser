# CFW-parser

A simple program for clash-for-windows to custom you own Javascript parser file

## usage

Download the code first

Edit the `src/rule.js`,add what you need in arrays

```javascript
module.exports = {
  // 普通代理
  useProxyRule : [
    "DOMAIN-KEYWORD,github",
     ...
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
```

The elements in `useProxyRule` will auto add the first proxy-group name (depend on your original yaml file),then it will be proxy

The `specialRules`  and `specialGroup`means you can custom your own proxy-group and add rule for it  

### direct

Specify `src/index.js` in clash-for-windows `Setting/Profiles/Parsers` 

```yaml
parsers:
  - url: http:/sample.com/1
    file: "path/to/cfw-parser/src/index.js"
  - url: http:/sample.com/2
    file: "path/to/cfw-parser/src/index.js"
  - url: http:/sample.com/3
    file: "path/to/cfw-parser/src/index.js"
```

### remote

install & build

```bash
npm i 
npm run build
```

put `dist/cfw-parser.js` to somewhere you can download