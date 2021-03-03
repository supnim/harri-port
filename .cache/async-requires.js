// prefer default export if available
const preferDefault = m => (m && m.default) || m;

exports.components = {
  "component---cache-dev-404-page-js": () =>
    import(
      "./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */
    ),
  "component---src-pages-404-js": () =>
    import(
      "./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */
    ),
  "component---src-pages-contact-js": () =>
    import(
      "./../../../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */
    ),
  "component---src-pages-index-js": () =>
    import(
      "./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */
    ),
  "component---src-pages-photo-js": () =>
    import(
      "./../../../src/pages/photo.js" /* webpackChunkName: "component---src-pages-photo-js" */
    ),
  "component---src-pages-video-js": () =>
    import(
      "./../../../src/pages/video.js" /* webpackChunkName: "component---src-pages-video-js" */
    ),
  "component---src-pages-words-js": () =>
    import(
      "./../../../src/pages/words.js" /* webpackChunkName: "component---src-pages-words-js" */
    ),
  "component---src-templates-blog-post-js": () =>
    import(
      "./../../../src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */
    )
};
