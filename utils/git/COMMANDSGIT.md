# COMMANDS GIT

[![Read in Portuguese](https://img.shields.io/badge/%F0%9F%87%A7%F0%9F%87%B7%20Portugu%C3%AAs-F0FFFF.svg)](COMANDOSGIT.md)
[![Read in English](https://img.shields.io/badge/%F0%9F%87%BA%F0%9F%87%B8%20English-gray.svg)](GITCOMMANDS.md)

```markdown

This document provides an overview of essential Git commands.
😁 Feel free to contribute and improve this guide!

## Table of Contents
- ⚙️ **Setting Up Git**
- 📚 **Basic Commands**
  - Repository Operations
  - Remote Connections
  - Commit Operations
- 📈 **Intermediate Git Commands**
  - Branching and Merging
  - Stashing Changes
  - Rewriting History
  - Remote Repositories
  - Inspecting Changes
- 🧠 **Advanced Git Commands**
  - Refs and the Reflog
  - Bisecting
  - Filter-branch
  - Submodules
  - Worktrees
  - Advanced Rebase
  - Cleanup
  - Cherry-picking
  - Advanced Merge

---

## ⚙️ Setting Up Git

- **Configure your email**
  ```bash
  git config user.email [your_email_here]
  ```

- **Configure your username**

  ```bash
  git config user.name [your_username_here]
  ```

Scopes:

- **Local** (current repo only):

  ```bash
  git config --local user.email [your_email_here]
  ```

- **Global** (applies to all repos for your user):

  ```bash
  git config --global user.email [your_email_here]
  ```

- **System** (system-wide):

  ```bash
  git config --system user.email [your_email_here]
  ```

---

## 📚 Basic Commands

### Repository Operations

- Initialize a new local repository:

  ```bash
  git init
  ```

- Clone an existing remote repository:

  ```bash
  git clone [remote_url]
  ```

- Clone a specific branch:

  ```bash
  git clone --branch [branch_name] [remote_url]
  ```

- Clone into a specified directory:

  ```bash
  git clone [remote_url] [directory_name]
  ```

### Remote Connections

- List configured remotes:

  ```bash
  git remote
  ```

- Add a new remote:

  ```bash
  git remote add [remote_name] [remote_url]
  ```

- Remove a remote:

  ```bash
  git remote rm [remote_name]
  ```

- Rename a remote:

  ```bash
  git remote rename [old_name] [new_name]
  ```

### Commit Operations

- Stage all changes:

  ```bash
  git add --all
  ```

  or

  ```bash
  git add -a
  ```

  or

  ```bash
  git add .
  ```

- Commit staged changes with a message:

  ```bash
  git commit -m "your message here"
  ```

- Stage and commit all changes in one step:

  ```bash
  git commit -a -m "your message here"
  ```

- Modify the most recent commit message:

  ```bash
  git commit --amend -m "new message here"
  ```

---

## 📈 Intermediate Git Commands

### Branching and Merging

- List local branches:

  ```bash
  git branch
  ```

- Switch to a branch:

  ```bash
  git checkout [branch_name]
  ```

- Create and switch to a new branch:

  ```bash
  git checkout -b [branch_name]
  ```

- Merge a branch into the active branch:

  ```bash
  git merge [branch_name]
  ```

- Delete a branch:

  ```bash
  git branch -d [branch_name]
  ```

### Stashing Changes

- Stash current changes:

  ```bash
  git stash
  ```

- Stash with a message:

  ```bash
  git stash save "Your message here"
  ```

- List stashes:

  ```bash
  git stash list
  ```

- Apply a specific stash:

  ```bash
  git stash apply stash@{n}
  ```

- Apply most recent stash:

  ```bash
  git stash apply
  ```

- Drop the latest stash:

  ```bash
  git stash drop
  ```

- Drop a specific stash:

  ```bash
  git stash drop stash@{n}
  ```

- Apply and remove the latest stash:

  ```bash
  git stash pop
  ```

### Rewriting History

- Rebase your branch:

  ```bash
  git rebase [base_branch]
  ```

- Interactive rebase:

  ```bash
  git rebase -i [base_commit]
  ```

- Continue rebase after resolving conflicts:

  ```bash
  git rebase --continue
  ```

- Abort rebase:

  ```bash
  git rebase --abort
  ```

- Amend the latest commit without changing its message:

  ```bash
  git commit --amend --no-edit
  ```

### Remote Repositories

- Fetch from remote without merging:

  ```bash
  git fetch [remote_name]
  ```

- Pull from remote and merge:

  ```bash
  git pull [remote_name] [branch_name]
  ```

- Push a branch to remote:

  ```bash
  git push [remote_name] [branch_name]
  ```

- Set up tracking between local and remote branch:

  ```bash
  git branch --u [remote_name]/[branch_name]
  ```

- Pull and rebase instead of merge:

  ```bash
  git pull --rebase
  ```

### Inspecting Changes

- View commit history:

  ```bash
  git log
  ```

- Show diff of staged changes:

  ```bash
  git diff --staged
  ```

- Show diff against another branch:

  ```bash
  git diff [other_branch_name]
  ```

- Graphical log (if available):

  ```bash
  gitk
  ```

- Pretty one-line log with graph:

  ```bash
  git log --oneline --graph --all --decorate
  ```

---

## 🧠 Advanced Git Commands

### Refs and the Reflog

- Show the reflog:

  ```bash
  git reflog
  ```

- Cherry-pick a commit:

  ```bash
  git cherry-pick [commit_hash]
  ```

- Recover state after a hard reset:

  ```bash
  git reset 'HEAD@{1}'
  ```

### Bisecting

- Start bisect:

  ```bash
  git bisect start
  ```

- Mark commit as good:

  ```bash
  git bisect good
  ```

- Mark commit as bad:

  ```bash
  git bisect bad
  ```

- Reset bisect:

  ```bash
  git bisect reset
  ```

### Filter-branch (history rewriting)

- Replace author email throughout history (use with caution):

  ```bash
  git filter-branch --commit-filter 'if [ "$GIT_AUTHOR_EMAIL" = "old_email@example.com" ]; then
       export GIT_AUTHOR_EMAIL=new_email@example.com;
       export GIT_COMMITTER_EMAIL=new_email@example.com;
     fi;
     git commit-tree "$@"'
  ```

- Remove a file from entire history (use with caution):

  ```bash
  git filter-branch --force --index-filter "git rm --cached --ignore-unmatch path_to_file" --prune-empty --tag-name-filter cat -- --all
  ```

### Submodules

- Add a submodule:

  ```bash
  git submodule add [repository_url] [path_to_place_submodule]
  ```

- Update all submodules:

  ```bash
  git submodule update --recursive --remote
  ```

### Worktrees

- Create a new worktree:

  ```bash
  git worktree add [path] [branch]
  ```

### Advanced Rebase

- Start interactive rebase:

  ```bash
  git rebase -i [base_branch_name]
  ```

- Squash last n commits:

  ```bash
  git rebase -i HEAD~[n]
  ```

### Cleanup

- Remove untracked files (dangerous):

  ```bash
  git clean -f
  ```

- Remove untracked files and directories (dangerous):

  ```bash
  git clean -f -d
  ```

- Prune remote-tracking branches that no longer exist:

  ```bash
  git fetch -p
  ```

- Delete local branches that have been merged:

  ```bash
  git branch --merged | xargs git branch -d
  ```

### Cherry-picking

- Apply specific commits:

  ```bash
  git cherry-pick [commit_hash1] [commit_hash2]
  ```

- Abort cherry-pick:

  ```bash
  git cherry-pick --abort
  ```

### Advanced Merge

- Merge without automatic commit:

  ```bash
  git merge [branch_name] --no-commit
  ```

- Merge and squash commits:

  ```bash
  git merge --squash [branch_name]
  ```

- Preview files with merge conflicts:

  ```bash
  git diff --name-only --diff-filter=U
  ```

- Abort a merge:

  ```bash
  git merge --abort
  ```

---

**Warning:** Aborting the merge will revert any changes made during the merge operation.

😄 We hope this guide has been helpful to you. If you have any feedback or would like to contribute more information, please open a pull request or create an issue.
