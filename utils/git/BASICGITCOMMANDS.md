# Basic Git Commands

```markdown
• GIT CLONE URL -> Clones existing code.;  

• MKRDIR -> Create a directory;

• GIT CLONE URL -> Clones an existing repository

• MKDIR -> Creates a directory

• CD "FOLDER_NAME" -> Enters the folder

• CD .. -> Goes up one folder level

• GIT INIT -> Creates a local repository

• CAT CONFIG -> View repository configurations

• GIT REMOTE ADD ORIGIN URL -> Adds the local repository to a remote

• CD .GIT -> Enters the folder and shows the GIT file

• GIT STATUS -> Shows the status of our staging area or index

• TOUCH README -> Creates the README file

• GIT ADD . -> Stages all files in the folder for commit

• GIT ADD "FILENAME" -> Stages the specified file for commit

• GIT COMMIT -M "message to include in the commit" -> Adds the commit message

• GIT LOG -> Shows commit history/status

• RM -RF .GIT -> Exit the project if we initialized the wrong folder

• GIT RESTORE "FILENAME" -> Restores the file to its last committed state

• GIT COMMIT --AMEND -> Edits the last commit message

• GIT RESET --* + COMMIT_HASH (OBTAINED FROM GIT LOG) -> Restores repository to a commit state
    • SOFT -> Keeps changes after the specified commit staged
    • MIXED (default) -> Places files into the working tree as untracked
    • HARD -> Discards working-tree changes and resets to the previous state (deletes files changed since that commit)

• GIT REFLOG -> Shows detailed commit reference log

• GIT RM "FILENAME" -> Removes a file from the folder (and stages its deletion)

• GIT RM -R "FOLDER_NAME" -> Removes an entire folder

• GIT PUSH -U ORIGIN MAIN -> Uploads the local directory to the remote

• GIT PULL -> Pulls online changes into the local repository, merging the changes

• 🦉 FIRST STEPS
  1. Create the repository on GitHub
  2. Connect the repository with git init
  3. Add all necessary files for the commit
  4. Check with git status
  5. Make the commit
  6. Run git push

• 👾 BRANCHES
Branches are new project lines we create; if we create a new branch and then new commits, those commits belong to the new branch.

• GIT CHECKOUT -B "name" -> Creates a new branch

• ECHO "#TEXT-1" > TEXT-1 -> Creates a text file with the provided content

• GIT CHECKOUT "branch_name" -> Switches back to the specified branch

• GIT BRANCH -V -> Shows the latest commits for each branch

• GIT BRANCH -> Shows all branches in a project

• GIT BRANCH -D "branch_name" -> Deletes the specified branch

• GIT MERGE -> Merges branch changes

• GIT FETCH ORIGIN MAIN -> Downloads changes from the remote branch without merging

• GIT DIFF MAIN ORIGIN/MAIN -> Compares differences between main and origin/main

• GIT MERGE ORIGIN/MAIN -> Merges the changes

• GIT CLONE URL --BRANCH "BRANCH_NAME" --SINGLE-BRANCH -> Clones only one branch from the repository

• GIT STASH -> Stores modified/deleted files in a hidden stash for later use; they are not included in commits

• GIT STASH LIST -> Lists stashed items

• GIT STASH POP -> Removes the latest stash and applies it

• GIT STASH APPLY -> Applies a stash but keeps it in the stash list for later use

• 📊 CREATING A TABLE (Markdown example)

| Column 1 | Column 2 | Column 3 |
| -------  | -------  | -------  |
| Info 1   | Info 2   | Info 3   |
| Info 4   | Info 5   | Info 6   |

• 👨🏼‍💻 Creating a code block

To insert a code block, use the backtick character `` ` ``. Example:

````markdown
Insert your code line here
````
