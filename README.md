# Picklist using remote data

### HubSpot Integration
npm install @hubspot/api-client



## Update issues
After updating various packages the following error occurred at runtime

```
Uncaught TypeError: Cannot read properties of undefined (reading 'call')
    at o (bootstrap:19:32)
    at 92035 (colorizedBracketPairsDecorationProvider.js:93:5)
    at o (bootstrap:19:32)
    at 71387 (anchorSelect.js:180:22)
    at o (bootstrap:19:32)
    at 42186 (editor.api.js?1528:31:1)
    at o (bootstrap:19:32)
    at 88201 (editor.js:11:15)
    at o (bootstrap:19:32)
    at 85543 (index.js:8:15)
```

I found this was related to the `MonacoEditor` 