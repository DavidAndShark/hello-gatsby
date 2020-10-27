---
title: "Build and Launch a Gatsby Project"
date: "10/26/2020"
author: "David Stinson"
description: "Reviews how to build and launch a project, and gives a brief overview of the Gatsby file structure."
---

![Falcon Heavy Launch, by SpaceX. Found at unsplash.com/@spacex](https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80)

# Build and Launch a Gatsby Project

## Your First Project

When installation has completed, you can create your first Gatsby site with this command:

```bash
gatsby new my-gatsby-site https://github.com/gatsbyjs/gatsby-starter-hello-world
```

`gatsby new` makes a new Gatsby site, `my-gatsby-site` is what we are calling the site - we could change this to be anything though - the project will be created in a new **my-gatsby-site** directory. [The URL](https://github.com/gatsbyjs/gatsby-starter-hello-world) is the starter we are going to use for this project.

Move into the new **my-gatsby-site** directory:

```bash
cd my-gatsby-site
```

and open it in VS Code:

```bash
code .
```

Here's what the Gatsby CLI has made for us:

![The files and folders created by Gatsby CLI.](https://i.imgur.com/s0a5iWw.png)

To launch this starter code use:

```bash
gatsby develop
```

And notice an extra folder has been added - **public**. 

![The Gatsby public folder and its contents.](https://i.imgur.com/63ZcFXJ.png)

Browse to [http://localhost:8000](http://localhost:8000) and you'll be greeted with this: 

![A simple Hello world! Gatsby app!](https://i.imgur.com/UnaC8b9.png)

### Syncing to Git

Following along with this live? Set your upstream to follow along! 

```bash
git remote add upstream https://github.com/DavidAndShark/hello-gatsby.git
```

Live coding will be done in the main branch, but both the starter-code and complete-code are available in separate branches.
