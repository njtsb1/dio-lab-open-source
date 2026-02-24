# Contributing Guide

[![Star](https://img.shields.io/github/stars/njtsb1/dio-lab-open-source?style=social)](https://github.com/njtsb1/dio-lab-open-source/stargazers)  
[![Forks](https://img.shields.io/github/forks/njtsb1/dio-lab-open-source?style=social)](https://github.com/njtsb1/dio-lab-open-source/forks)  
[![GitHub Issues](https://img.shields.io/github/issues/njtsb1/dio-lab-open-source?style=social)](https://github.com/njtsb1/dio-lab-open-source/issues/)

> **From the original document:**  
> This is a project made for the community, so feel free to contribute.

This is a project made for the community, so feel free to contribute. Some ways to contribute, besides adding your Profile README example, are to add other utilities to the **`utils`** folder or improve the README search page by modifying files in the **`docs`** folder.  
You can also contribute by:

- **Resolving, answering, or pointing out issues**.  
- **Starring** the repository.

---

## Contributing to the `community` directory

Contributing to the `community` directory is one way to complete the lab challenge **“Contributing to an Open Source Project on GitHub”** from Digital Innovation One. You can collaborate by creating a **Profile README** containing information about yourself that you want to share with the community.

You may include: badges that show your skills; cards with your GitHub statistics and projects you created or contributed to; links to projects, challenges, and articles on the Digital Innovation One platform. Get inspired by the examples in the `community` folder, check some utilities in the `utils` folder, and use your creativity to build yours.

---

## Step-by-step contribution process

### 1) **Fork** this repository  

Go to the repository main page and click the **Fork** button in the top-right corner.

> **Note:** A fork on GitHub is a copy of a repository that any user can create. For more details, review the lesson or see GitHub docs: *Create a fork of a repository*.

### 2) Clone locally  

Open Git Bash and run `git clone` followed by the URL of your fork to clone it locally. Example:

```bash
git clone https://github.com/YOUR_USERNAME/dio-lab-open-source.git
```

Press Enter; a local copy of your fork will be created.

### 3) Create a new **branch**  

Use `git checkout -b` to create and switch to a new branch named `feat/community/YOUR_USERNAME`.  
Example:

```bash
git checkout -b feat/community/falvojr
```

### 4) Create your Profile README  

Inside the `community` folder, create a Markdown file (`.md`) named exactly as your GitHub username.

Example:
```
community/falvojr.md
```

#### 4.1) Build your Profile README  

Use examples in the `community` directory for inspiration and add utilities from the `utils` folder as desired.

### 5) Add your changes to the staging area  

Run:
```bash
git add community/YOUR_USERNAME.md
```

### 6) Create a commit  

Commit your change with a message indicating you added your profile:

```bash
git commit -m "feat: add YOUR_USERNAME profile"
```

> **Important:** Check the **Commit Convention** to write clear, standardized commit messages.

### 7) Push your changes to your remote repository  

Push your local branch to your remote fork:

```bash
git push origin feat/community/YOUR_USERNAME
```

> **Warning:** If you created the file directly on GitHub, this push step is not necessary.

### 8) Open a **Pull Request**  

When creating the PR, follow these rules:

- Your PR should modify **only** the file `community/YOUR_USERNAME.md` (check the “Files changed” tab).  
- The filename must match your GitHub username exactly (validation is case-sensitive).

> **Note:** If you don’t know how to create a pull request, review the lab or see GitHub docs: *Creating a pull request*.

After you open the Pull Request, automation will validate your submission. If everything is correct, you’ll receive a message indicating your PR was approved. If not, read the guidance and check the modified files to ensure they meet the contribution instructions.

---

## Commit Convention

| **Commit Type** | **Description** | **Example** |
| --------------- | --------------- | ----------- |
| **`feat`** | Adds a new feature to the project. | `feat: add USERNAME.md profile` |
| **`fix`** | Fixes a bug or problem in the project. | `fix: fixed issue fix#IssueNumber` |
| **`docs`** | Changes project documentation. | `docs: update README.md` |
| **`style`** | Changes appearance without altering functionality. | `style: add EFFECTNAME to COMPONENT` |
| **`refactor`** | Code changes that do not alter functionality. | `refactor: refactor at CLASSNAME` |
| **`test`** | Adds or modifies tests. | `test: add unit test for UserService` |

---

## References

- ANGULAR. *Contributing to Angular*  
- CONVENTIONAL COMMITS. *Summary*  
- GITHUB. *Set guidelines for repository contributors*
