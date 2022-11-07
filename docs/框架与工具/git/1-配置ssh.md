# 生成 ssh-key

`ssh-keygen -t rsa -C "邮箱"`

rsa 加密 生成两个文件

- id_rsa.pub 公共的公钥， 将这个文件的内容 copy 到远端即可
- id_rsa 私钥

```
git config -l // 查看配置
git config --system --list // 查看系统的配置 安装目录 Git\etc\gitconfig
git config --global --list // 查看用户的配置 用户目录 C:\Users\Administrator\ .gitconfig
git config --global user.name "用户名" // 用户名
git config --global user.email "邮箱" // 邮箱
ssh-keygen -t rsa -C "邮箱"
```

::: tip 注意
ssh-keygen 生成公钥 C:\Users\Administrator\.ssh 目录 实现免密码登录！
:::
