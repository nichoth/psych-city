# psychedelic city

[![Netlify Status](https://api.netlify.com/api/v1/badges/e6426149-5386-48d8-acba-c4b8c3994a86/deploy-status)](https://app.netlify.com/sites/psych-city/deploys)

Start a local server
```
npm start
```

-------------------------

## netlify cms

https://www.netlifycms.org/docs/add-to-your-site/

* Make a foler `/admin` at the site root with a file `index.html`. It is `src/admin` in this repo
* make a media folder for uploads. In the config it is `media_folder` -- where in the repo they are saved. `public_folder` is the path relative to site root

### authentication
Registration is open for testing.

Go to Settings > Identity, and select Enable Identity service.

With the backend set to handle authentication, now you need a frontend interface to connect to it. The open source Netlify Identity Widget is a drop-in widget made for just this purpose. 

Add the netlify ID widget

```
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
```

to `/index.html` and also `/admin/index.html`

Also add a `script` tag to the body of `/index.html`

https://www.netlifycms.org/docs/add-to-your-site/#add-the-netlify-identity-widget

## netlify cli
https://cli.netlify.com/netlify-dev#usage




