# Stop Analyzing Embed

[![This is a Poppins project](https://raw.githubusercontent.com/bancodobrasil/poppins/master/badge-poppins.svg)](https://github.com/bancodobrasil/poppins)
[![first-timers-only](https://img.shields.io/badge/first--timers--only-friendly-blue.svg?style=flat-square)](https://www.firsttimersonly.com/)

Stop Analyzing is a tool that uses Tinder-like user interaction to help customers make up their mind when choosing something that has lot of options, such as e-commerce products. [Check this repo for more details](https://github.com/bancodobrasil/stop-analyzing) and [this issue explains how this idea was born](https://github.com/bancodobrasil/stop-analyzing/issues/2). **Stop Analyzing Embed** is a web component designed to be embedded on client websites so that they can quickly & easily implement the features of the Stop Analyzing tool.

## This project was made for first-time contributors and open source beginners

This project follows the [Poppins manifesto guidelines](https://github.com/bancodobrasil/poppins) as part of it's community principles and policies, focusing all the decisions and interactions on providing open source beginners mentorship with real and relevant experiences, respecting each learning pace, background experience, academic formation, questions, suggestions, doubts and opinion.

## Contribute now!

So, let's start contributing! **First, go to the 'Issues' tab and open a new issue, titled something like: "I want to contribute." Then, in the first comment, introduce yourself and ask for a task to be assigned to you**. If you already have an issue in mind, feel free to describe it in that same comment. A mentor/maintainer will respond with a technical overview of the project and some possible ways of contributing. You will discuss the options, and when a suitable issue is agreed upon, the mentor will create a new issue and assign it to you. 

That's it! Just make yourself at home, and good luck!

## Getting Started

### Clone the Repo 

Before you start working on an issue, first you need to **fork** and **clone** the repo. There are some great instructions on how to do so [here](https://gist.github.com/Chaser324/ce0505fbed06b947d962). 

### Configure the Project on Your Local Machine

Once you've forked and cloned the repo, it's time to run the app locally. 

There are two options to build and run **stop-analyzing-embed** locally on your machine: using docker, or running it directly with NPM commands. Just follow the instructions below based on your preference. Regardless of which way you choose, the web server will show the hostname on the console, something like this:

```
stop-analyzing-embed | Listening on http://738e062f602e:8000, http://127.0.0.1:8000, http://192.168.124.2:8000
```

In the example above, you would navigate to `localhost:8000` to view the app. 

#### Using Docker
To run with docker-compose, open your cloned project and navigate into the root directory (the same directory where the `Dockerfile` is located). Then, open a terminal session and enter the following:
```
$ docker-compose up
```
The above command will spin up the development server right away, but it may take a couple of minutes to build. So, just be patient.

If you prefer to work on the Dockerfile directly:
```
$ docker build . --tag stop-analyzing-embed:latest
```

#### Using a Development Environment

To run with NPM, first change your terminal session in the `app` directory. Then, make sure to install all the dependencies:
```
$ cd app
$ npm install
```
When the dependencies have all been installed, you're ready to run the application:
```
$ npm run start
```
*Important: make sure you have [NPM](https://www.npmjs.com/get-npm) installed in your machine.*

Thats it! We are ready to go!

## Awesome list of other Poppins projects for you to go 
[![Awesome](https://camo.githubusercontent.com/1997c7e760b163a61aba3a2c98f21be8c524be29/68747470733a2f2f617765736f6d652e72652f62616467652e737667)](https://github.com/sindresorhus/awesome)

- [Stop Analyzing API](https://github.com/bancodobrasil/stop-analyzing-api): Golang API used as a backend of [Stop Analyzing application](https://github.com/bancodobrasil/stop-analyzing)
- [First Contributions Repository](https://github.com/firstcontributions/first-contributions): Help beginners to contribute to open source projects
- [Contribute to this Project](https://github.com/Syknapse/Contribute-To-This-Project): This is for absolute beginners. If you know how to write and edit an anchor tag <a href="" target=""></a> then you should be able to do it.
- [Contribute to open source](https://github.com/danthareja/contribute-to-open-source):
  Learn the GitHub workflow by contributing code in a fun simulation project
