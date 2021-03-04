const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/nimesh/Code/harri-port/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/nimesh/Code/harri-port/src/pages/404.js"))),
  "component---src-pages-art-js": hot(preferDefault(require("/Users/nimesh/Code/harri-port/src/pages/art.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/nimesh/Code/harri-port/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/nimesh/Code/harri-port/src/pages/index.js"))),
  "component---src-pages-video-js": hot(preferDefault(require("/Users/nimesh/Code/harri-port/src/pages/video.js"))),
  "component---src-pages-writing-js": hot(preferDefault(require("/Users/nimesh/Code/harri-port/src/pages/writing.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/nimesh/Code/harri-port/src/templates/blog-post.js")))
}

