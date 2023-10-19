**一、分支重命名**

1、重命名本地分支，不是当前分支时，要指定旧的分支名称。 / 是当前分支时，则不要。

```sh
git branch -m <old_branch_name> <new_branch_name>   /   git branch -m <new_branch_name>
```

当然，这只会重命名你的分支副本。如果远程 Git 服务器上存在该分支，需要继续执行后续步骤。

2、推送这个新分支，从而创建一个新的远程分支：

```sh
git push origin <new_branch_name>
```

3、删除旧的远程分支：

```sh
git push origin -d -f <old_branch_name>
```

**二、分支删除**

```sh
// 删除本地分支
git branch -d local-branch-name

// 删除远程分支
git push origin --delete remote-branch-name
```
