# How to contribute to Stop Analyzing Embed? Beginners are very welcome!

## This project was made for first-time contributors and open source beginners

This project follows the [Poppins manifesto guidelines](github.com/bancodobrasil/poppins/) as part of it's community principles and policies, focusing all the decisions and interactions on providing open source beginners mentorship with real and relevant experiences, respecting each learning pace, background experience, academic formation, questions, suggestions, doubts and opinion.
Contribute now!

So, **let's start contributing! Open an issue asking for a task to be done by you**. A mentor/maintainer will come and provide a technical overview of the project and what are the possibles ways of contributing to the project. You will discuss the options and a suitable issue will be assigned or created to you.

That's it. Just make yourself at home and good luck!

## Steps to send the contribution

To contribute to this project you must fork this projetct, get an issue and make your resulting Pull Request.

## Technical Aspects

1. This project uses **React with Typescript and React Hooks**. So, although it is not required for you to already have experience with this stack, its going to more comfort to.

1. The project doesn't use any CSS preprocessor (like SASS or LESS). It uses CSS native variables and is heavily relied on Bootstrap4

## Commiting and PR guidelines

1. We recommend using https://www.conventionalcommits.org/ for the commit messages. You don't need to be strict to it, but that's a good reference.

1. Remember to reference the **issue** you are working on your commit messages, like `git commit -a -m "<your_commit_message>. refs #8"`

1. When opening a PR, if its an UI issue that you are working on and hence needs to be evaluated visually, its a good practive to provide some prints or gifs of the result. It helps the PR reviewer to give you a faster feedback.

1. To update your fork master with the project master, [follow those instructions](https://gist.github.com/Chaser324/ce0505fbed06b947d962):

  * Add the master of the original project naming it `upstream`:
  
  ```bash
  $ git remote add upstream https://github.com/bancodobrasil/stop-analyzing-embed.git
  ```
  
  * Fetch the `upstream` updated contents:

  ```bash
  $ git fetch upstream
  ```

  * Check whether it was successfully added:
  
  ```bash
  $ git branch -va  
  ```
  
  * Merge the `upstream` into you forked repo `master` to update it:
  ```bash
  $ git merge upstream/master
  ```
  
