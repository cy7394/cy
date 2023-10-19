# 分支删除以及重命名

```bash
// 删除本地分支
git branch -d localBranchName

// 删除远程分支
git push origin --delete remoteBranchName

// 分支重命名
git branch -m new-branch-name

// 重命名远程分支 是先删除 再推本地
git push origin -u new-branch-name
```
