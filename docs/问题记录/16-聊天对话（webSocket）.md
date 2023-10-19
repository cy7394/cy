```js
const ws = new WebSocket("wss://your-websocket-server-url");
ws.onopen = function () {
  console.log("WebSocket连接已打开");
};

ws.onmessage = function (event) {
  //后端传给我的
  console.log(event.data);
};

function sendMessage() {
  ws.send("前端要发送的xxx");
}
```
