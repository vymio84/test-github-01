This is a demo to how use GIT
lesson 1
// git init
// git status
// git add <filename>
// git commit --m '<message>'

lesson 2
// git log
// git show <id-commit>
// git diff

lesson 3
// working directory
// staging area
// git repository
// guik ---> GUI = graphic user interface

lesson 4
// git checkout -- <filename>
// git reset HEAD <filename>

lesson 5: branching and merging
// git branch
// git -b <branch name>
// git checkout <branch name> --> switch to branch <branch name>
// git merge
A <--- B
git checkout A
git merge B
master <--- feature/lion-class
git checkout master
git merge feature/lion-class
// git branch -D <branch name> --> delete branch

lesson 6: git reset  
// git reset --soft <to-commit-id> --> uncommit file (staging area)
// git reset --mixed <to-commit-id> --> uncommit file back to working directory
// git reset --hard <to-commit-id> --> uncommit and delete commit after specify commit-id
<not recommend>

lesson 7: git reverse <commit-id>
lesson 8: .gitignore
lesson 9: github git push
lesson 10: git credential
// git config --global credential.helper "cache --timeout=18000"
