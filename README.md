# git_skills

### squash commits and merge a branch to main

1. git checkout main
2. git merge --squash <branch_name>
3. git commit -m 'squash all commits'
4. git push origin main

### pull from remote down to local

1. git pull origin main

### merge main into <branch_name>

1. git checkout <branch_name>
2. git merge <branch_name> main
3. cat <file> => print file to console to see updated merged branch contents updated on branch

### git commit difference between commit hashes

1. git diff <hash> <hash> etc.
