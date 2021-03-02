# psychedelic city

[![Netlify Status](https://api.netlify.com/api/v1/badges/e6426149-5386-48d8-acba-c4b8c3994a86/deploy-status)](https://app.netlify.com/sites/psych-city/deploys)

Start a local server
```
npm start
```

Need to visit the `/admin/` URL *with the ending slash*:
`http://localhost:8888/admin/`

-------------------------

## netlify cms
https://www.netlifycms.org/docs/add-to-your-site/

* Make a foler `/admin` at the site root with a file `index.html`. It is `src/admin` in this repo
* make a media folder for uploads. In the config it is `media_folder` -- where in the repo they are saved. `public_folder` is the path relative to site root

### authentication
Registration is **open** for testing.

Go to Settings > Identity, and select Enable Identity service.

With the backend set to handle authentication, now you need a frontend interface to connect to it. The open source Netlify Identity Widget is a drop-in widget made for just this purpose. 

Add the netlify ID widget to `/index.html` and also `/admin/index.html`

```
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
```

Also add a `script` tag to the body of `/index.html`:
https://www.netlifycms.org/docs/add-to-your-site/#add-the-netlify-identity-widget

-----------------------------------------

### identity
The localhost site redirects to `whammyanalog` after logging in, but the live site goes to the right place

Need to delete the localStorage thing:
https://github.com/netlify/netlify-cms/issues/1704
```
localStorage.removeItem("netlifySiteURL")
```

## netlify cli
https://cli.netlify.com/netlify-dev#usage

-----------------------------------------------------

Whammy just has a `template` tag in the html that is used by vanilla JS to render the products at run-time. The is no generating a static site, just runtime JS & html files.

This site will be re-built every time an edit is made via the CMS.

Need a way to pull in the data that is saved by CMS

----------------------------------------------

https://dev.to/koabrook/creating-a-basic-blog-with-eleventy-and-netlify-cms-completely-from-scratch-197e

Create a new folder in the project's root and name it _includes. This folder will contain templates that our blog will use to render pages.

> The addPassthroughCopy lines tell Eleventy to include those folders and their contents in the generated site. 

> Any element that should appear on every single page should reside in base.njk. Let's add the following to the file

Add these lines to `.eleventy.js`, so that it uses the right folders for input and output

```js
return {
    dir: {
        input: "src",
        output: "public"
    }
}
```

------------------------------------------------

Using hyperstream is possible, would just need to read the files created by netlify CMS. 



