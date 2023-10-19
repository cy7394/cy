```js
export const hostname = import.meta.env.DEV
  ? "192.168.1.31"
  : window.location.hostname;
```
