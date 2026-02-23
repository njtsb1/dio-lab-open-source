# Headings

Like HTML, Markdown is also a markup language, so we can mix both syntaxes to make any changes in our collaboration.

To add a heading we must use the `#` symbol; for each hierarchical level desired we add one more `#`.

| Heading Level | Syntax | Description |
| --- | --- | --- |
| 1 | `#` | First-level heading, desired title |
| 2 | `##` | Second-level heading, desired title |
| 3 | `###` | Third-level subtitle, desired title |
| 4 | `####` | Fourth-level subtitle, desired title |
| 5 | `#####` | Fifth-level subtitle, desired title |
| 6 | `######` | Sixth-level subtitle, desired title |

> Note: Starting from the third hierarchical level, the underline that appears below the heading no longer exists, so there is no separation between heading and text; they become subtitles. Remember that you can also use HTML5 syntax for headings, using `<h1>` through `<h6>`.

## Changing Text Style

You can change the style of any word or text by following the formatting styles below.

| Style | Syntax | Keyboard Shortcut | Example |
| --- | --- | --- | --- |
| **Bold** | ``** **`` or ``__ __`` | Command + B (Mac) or CTRL + B (Windows/Linux) | **This is bold text** |
| *Italic* | ``* *`` or ``_ _`` | Command + I (Mac) or CTRL + I (Windows/Linux) | _This text is italicized_ |
| ~~Strikethrough~~ | ``~~ ~~`` | None | ~~This was mistaken text~~ |
| **Bold + italic nested** | ``** **`` and ``_ _`` | None | **This text is _extremely_ important** |
| ***Bold and italic*** | ``*** ***`` | None | ***All this text is important*** |
| Subscript | `<sub></sub>` | None | This is a <sub>subscript</sub> text |
| Superscript | `<sup></sup>` | None | This is a <sup>superscript</sup> text |

## Code Formatting

As shown earlier in the style table, you can use backticks (`` ` ``) to quote a code snippet or command. To format an entire block, use three backticks (```` ``` ````) — just remember to close them.

Inline code example:
```
`desired-word`
```

Code block example:
```
```
Hello, World!
Welcome my GitHub
I hope to contribute my knowledge.
```
```

The block above is a direct replica of the example used earlier for clarity.

## Links

You can use links to make navigation and exploration easier. Create an inline link by placing the link text in square brackets `[ ]` and the URL in parentheses `( )`. You can also use the keyboard shortcut Command + K to create a link.

You can paste a URL over selected text with Command + V, or replace selected text with a link using Command + Shift + V.

> Example: To access Elidiana Andrade's Open Source repository click [Elidiana Andrade Repository](https://github.com/elidianaandrade/dio-lab-open-source).

## Section Links

You can link directly to a section of a rendered file by hovering over the section heading to reveal the link. You can also use relative links and image paths to help readers access other files in the repository.

### Example of a linked heading to a rendered file

[Example linked heading](https://github.com/OlavoCosta/dio-lab-open-source)

HTML example for a linked heading:

```html
<h2><a class="heading-link" href="#relative-links">Relative links<span class="heading-link-symbol" aria-hidden="true"></span></a></h2>
```

You can mix Markdown with HTML5; there are two ways to link files to headings.

A relative link is relative to the current file. For example, if you have a README at the repository root and another file at `docs/CONTRIBUTING.md`, the relative link from the README to CONTRIBUTING.md could look like:

```markdown
[Contribution guidelines for this project](docs/CONTRIBUTING.md)
```

GitHub will automatically transform your relative link or image path based on the branch you are viewing so the link always works. Paths starting with `/` are relative to the repository root. You can use `./` and `../` as usual.

Relative links are easier for users who clone your repository. Absolute links may not work in clones — prefer relative links for files inside your repo.

## Images

Given the vast content on GitHub, contributing to a project is almost unavoidable. For newcomers to markup languages, it's essential to know you can attach images to projects — many people understand information better visually.

To add images to a `README.md` you can use Markdown or HTML5. Here are both methods.

Markdown image example:

```markdown
![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://myoctocat.com/assets/images/base-octocat.svg)
```

HTML example (centered):

```html
<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" width="500" height="500"/>
</div>
```

You can also add [Card Stats](https://github.com/elidianaandrade/dio-lab-open-source/blob/main/utils/cards/github-stats.md) which are useful and help your open source contributions. Click the hyperlink for examples.

## Using Emojis

Add an emoji by typing `:EMOJICODE:`, i.e., a colon, the emoji name, and another colon.

Example:
```
@octocat :+1: This PR looks great - it's ready to merge! :shipit:
```

You can also use HTML numeric codes:
```
&#128512; &#128516; &#128525; &#128151;
```

For a complete list of emoji names and HTML codes, see Emoji-Cheat-Sheet and HTML emoji references.

## Closing Notes

As mentioned at the start of this fork, the goal is to make future edits with markup languages (Markdown and HTML5) a bit easier. I hope this helps.

For more information and deeper research on both languages, see:

- GitHub Markdown: `https://docs.github.com/get-started/writing-on-github/basic-writing-and-formatting-syntax#headings` [(docs.github.com in Bing)](https://www.bing.com/search?q="https%3A%2F%2Fdocs.github.com%2Fget-started%2Fwriting-on-github%2Fbasic-writing-and-formatting-syntax%23headings")
- HTML (W3Schools): [https://www.w3schools.com/html/default.asp](https://www.w3schools.com/html/default.asp)

---

<div align="center">
  <a style="border-radius:10px;padding:15px;background-color:#232323;color:#fff;text-decoration:none;" href="https://github.com/elidianaandrade/dio-lab-open-source">HOME</a>
</div>
```
