# Git

Git is a distributed version control system, which means a local clone of the project is a complete version-control repository. These fully functional local repositories make it easy to work offline or remotely. Developers commit their work locally and then synchronize their copy of the repository with the server copy. This paradigm differs from centralized version control, where clients must sync code with a server before creating new versions.

## Basic Commands

> Configure username and email

- `$ git config user.email email`
- `$ git config user.name "username"`

## 📚 Basic Commands

### git init

This command creates a new repository, local or remote, or reinitializes an existing repository.

- Create a local repository:
  - `$ git init`

- Initialize a repository or create a repository with a specific name:
  - `$ git init <your-repository-name>`

### git clone

Creates an exact copy of an existing repository.

- `$ git clone <your-project-URL>`

### git commit

This command moves files from the staging area to the local repository.

- `$ git commit -m "your message"`

### git add

This command adds a changed file to the staging area, preparing it to be included in a commit.

- Add a specific file to the repository:
  - `$ git add filename`

- Add all new and/or modified files to the repository:
  - `$ git add *`

### git push

Sends files from a local repository to a remote repository.

- `$ git push REMOTE-NAME BRANCH-NAME`

### git pull

Brings files from the remote repository into the local repository.

- `$ git pull <address> *`

### git merge

Used to merge changed files into the original project file.

- `$ git merge <branch_name> *`

### References

- [https://learn.microsoft.com/pt-br/devops/develop/git/what-is-git]
- [https://www.codigofonte.com.br/artigos/top-25-comandos-do-git]
- [https://kenzie.com.br/blog/o-que-e-git/]
