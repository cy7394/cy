scp 上传时如果遇到以下报错：

```
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ED25519 key sent by the remote host isSHA256: kSWZeVY1CS1f7mG5IFEbZdJ+/YagZFsWzI4/euKTToQ
Please contact your system administrator
Add correct host key in /c/Users/26857/.ssh/known hosts to get rid of this message.
offending ECDSA key in /c/Users/26857/.ssh/known
hosts:11Host key for 172.16.10.116 has changed and you have requested strict checking.
Host key verification failed.scp: Connection closed
```

会出现这些信息是因为，第一次[SSH](https://so.csdn.net/so/search?q=SSH&spm=1001.2101.3001.7020)连接时，会生成一个认证，储存在客户端（也就是用 SSH 连线其他电脑的那个，自己操作的那个）中的 known_hosts，但是如果服务器验证过了，认证资讯当然也会更改，服务器端与客户端不同时，就会跳出错误啦～因此，只要把电脑中的认证资讯删除，连线时重新生成，就一切完美啦～要删除很简单，只要在客户端输入一个指令，解决方法：

```sh
ssh-keygen -R +输入服务器的IP
```

还是推不上，显示服务器无权限修改的问题：

```sh
cd /usr/xxx # 进入部署目录
chown -R [用户名] [文件夹] # 修改当前用户文件夹权限
```
