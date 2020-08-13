# How to contribute to Stop Analyzing Embed? Beginners are very welcome!

## This project was made for first-time contributors and open source beginners

This project follows the [Poppins manifesto guidelines](github.com/bancodobrasil/poppins/) as part of it's community principles and policies, focusing all the decisions and interactions on providing open source beginners mentorship with real and relevant experiences, respecting each learning pace, background experience, academic formation, questions, suggestions, doubts and opinions.
Contribute now!

So, let's start contributing! **First, go to the 'Issues' tab and open a new issue, titled something like: "I want to contribute." Then, in the first comment, introduce yourself and ask for a task to be assigned to you**. If you already have an issue in mind, feel free to describe it in that same comment. A mentor/maintainer will respond with a technical overview of the project and some possible ways of contributing. You will discuss the options, and when a suitable issue is agreed upon, the mentor will create a new issue and assign it to you. 

That's it. Just make yourself at home and good luck!

## Steps to send the contribution

To contribute to this project, you must fork and clone the project. Then, you need to get an issue assigned to you, and finally make your Pull Request once you have solved the issue.

## Technical Aspects

1. This project uses **React with Typescript and React Hooks**. So, although it is not required for you to already have experience with this stack, you'll be more comfortable if you know a bit about these technologies.

1. The project doesn't use any CSS preprocessors (like SASS or LESS). Instead, it uses CSS native variables and relies heavily on [tailwindCSS](https://tailwindcss.com/).

## Commiting and PR guidelines

1. For commit messages, we recommend following the conventions outlined at https://www.conventionalcommits.org/. This isn't a strict requirement, but is a good reference for writing readable, consistent commit messages.

1. Remember to reference the **issue** you are working on in your commit messages, like `git commit -a -m "<your_commit_message>. refs #8"`

1. When opening a PR, if it's a UI issue that you are working on and hence needs to be evaluated visually, its good practive to provide some screenshots or gifs of the result. It helps the PR reviewer to give you faster feedback.

1. To update your fork with the project master, [follow these instructions](https://gist.github.com/Chaser324/ce0505fbed06b947d962):

- Add the master of the original project (not your forked project) by naming it `upstream`:

```bash
$ git remote add upstream https://github.com/bancodobrasil/stop-analyzing-embed.git
```
(^^^Note: the GitHub username here matches the original repo, whereas your forked version will show your username).

- Fetch the `upstream` updated contents:

```bash
$ git fetch upstream
```

- Check whether it was successfully added:

```bash
$ git branch -va
```

If you are working on the master in your forked repo:

- Checkout the master:

```bash
$ git checkout master
```

- Merge the **original repo master** into you forked repo **master** to update it:

```bash
$ git merge upstream/master
```

If you are working on a branch in your forked repo:

- Checkout the master:

```bash
$ git checkout <branch_name> # for example: git checkout issue-9
```

- Merge the **original repo master** into you forked repo **branch** to update it:

```bash
$ git merge upstream/master
```

## GitHub Actions

1. File Size Impact: checks whether the PR will introduce an abnormal file size to the built bundle of the project.
