![A person touching an orb of power (maybe not magic as much as science, whoops!). By Ramón Salinero, found at unsplash.com/@donramxn](https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80)

# What's the Magic

## Static Sites

Gatsby is a [static site generator](https://www.gatsbyjs.com/docs/glossary/static-site-generator/#what-is-a-static-site-generator). HTML for static sites is created during a build process. The data required to create a site is pulled in at this time - not on each request. This has several advantages over non-static sites:

- No traffic-based database spikes.
- Often have no need for databases
- Your data can potentially be version controlled - so you can use git to not only keep track of the structure of your site, but also the content of your site.
- Often forgo web servers entirely - host your site on a CDN that scales with your site's traffic.

## [JAMstack](https://jamstack.wtf/)

[JavaScript, API, and Markup (HTML)](https://jamstack.org/). Gatsby shines in this category. This describes the way Gatsby builds its static sites - Data comes in from an API call on build, and the resulting site is entirely HTML and JavaScript. This provides many advantages over many other stacks:

- Super fast! Because you never wait on a database for content all client database calls are eliminated.
- Host anywhere! Use a tradition web server or use a content delivery network to
- Better dev experience! If you use a backend, all it does is serve up an API. Or pass off backend management to a CMS (or build pages with Markdown) and ONLY have to build a front end.
- Because there is no dynamic content you are not vulnerable to server-side code injection attacks.

Other popular static site generators include: Next.js Jekyll, Hugo, and Nuxt.js

## React

Gatsby sites are react web apps! Know React? Then you know the basics of Gatsby. 

## [Progressive Web App](https://www.gatsbyjs.com/docs/progressive-web-app/#what-is-a-progressive-web-app)

Allows your site to be saved to the home screen of a device. Must meet three criteria: 

- Must run using HTTPS
- Must include a Web App Manifest (this allows your app to be saved to a home screen). Gatsby has a plugin that adds support for this!
- Must include a service worker that allows your site to be used offline making it resilient to bad or non-existent network connections. Also allows for push notifications and background sync! Gatsby also provides a plugin for this!

[Here's an installable PWA](https://web.dev/progressive-web-apps/) you can load onto your machine (note that this will only work in chrome on the desktop)

## Plugins

Plugins are Node packages that comply with the Gatsby API to enable additional functionality on a Gatsby site. There are over 2000 of the packages, enabling features like responsive images, sitemaps, RSS feeds, Google Analytics, responsive images, and more. Just like regular Node packages they can receive updates, 

## Starters

Optional opiniated pre-compiled sites that lay a foundation for a variety of different types of projects - blogs, portfolios, markdown libraries, and more. Many starters are community built and maintained, while Gatsby also offers a few of their own official starters. Once you begin a project with a starter, its link to the original source code is broken - starters are essentially snapshots of existing projects.

## GraphQL and Graph*i*QL

GraphQL is a powerful data query language. When used with Gatsby, it allows us to query our data and use that data side by side AND we can take advantage of some of Gatsby's cooler features when we use it. We'll get more into GraphQL later but you can learn more about why Gatsby uses GraphQL [here](https://www.gatsbyjs.com/docs/why-gatsby-uses-graphql/).  GraphiQL is a graphical site schema explorer that lets you build GraphQL queries quickly and easily.