# DIO Lab — Contributing to an Open Source Project on GitHub

## Overview

A small static site that explains how to create and submit a **Profile README** to the `community` folder of the `dio-lab-open-source` repository. The site includes a language selector (EN-US, PT-BR, ES-ES), a light/dark theme toggle, and a quick profile search that opens a community profile on GitHub.

## Features

- **Multi-language UI**: English (EN-US), Português (PT-BR), Español (ES-ES).  
- **Theme toggle**: Light mode and Dark mode with moon/sun icons; preference saved in `localStorage`.  
- **Profile search**: Opens `community/<username>.md` on GitHub.  
- **Vanilla stack**: Plain HTML, CSS and JavaScript for easy customization.

## Project structure

```
.
├─ index.html
├─ styles.css
├─ scripts.js
└─ README.md
```

## Installation

- Fork this repository.  
- Clone your fork:

```bash
git clone https://github.com/<YOURUSERNAME>/dio-lab-open-source.git
```

- Open `index.html` in your browser or serve the folder with a static server.

## Usage

- Use the **language selector** in the header to switch the UI language.  
- Click the **theme icon** to toggle between light and dark modes; the choice is persisted.  
- Enter a GitHub username in the search field and click **View Profile** to open `community/<username>.md` on GitHub.

## How to contribute

- Fork the repository.  
- Create a branch:  

```bash
git checkout -b feat/community/<yourgithubusername>
```

- Add a Markdown profile at `community/<yourgithubusername>.md`.  
- Commit and push your branch:

```bash
git add community/<yourgithubusername>.md
git commit -m "feat: add <yourgithubusername> profile"
git push origin feat/community/<yourgithubusername>

```

- Open a Pull Request against the original repository's `main` branch.

## Notes

- Use examples in the `community` folder as **inspiration**, not direct copies.  
- The search button opens the GitHub path `community/<username>.md`; ensure your username file exists in the upstream repo to view it.

## License

[LICENSE](/LICENSE)

## Original Repository

See [original repository](https://github.com/digitalinnovationone/dio-lab-open-source)

[![Preview](https://img.shields.io/badge/Preview-000?style=for-the-badge&logo=github&logoColor=30A3DC)](https://njtsb1.github.io/dio-lab-open-source/)

## Tecnologias

![HTML](https://img.shields.io/badge/HTML-000?style=for-the-badge&logo=html5&logoColor=30A3DC)
![CSS](https://img.shields.io/badge/CSS-000?style=for-the-badge&logo=css3&logoColor=E94D5F)
![JavaScript](https://img.shields.io/badge/JavaScript-000?style=for-the-badge&logo=javascript&logoColor=30A3DC)
