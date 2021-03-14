
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("C:\\Users\\walido\\Documents\\gas\\my-gatsby-project\\src\\pages\\404.js")),
  "component---src-pages-about-js": preferDefault(require("C:\\Users\\walido\\Documents\\gas\\my-gatsby-project\\src\\pages\\about.js")),
  "component---src-pages-contact-js": preferDefault(require("C:\\Users\\walido\\Documents\\gas\\my-gatsby-project\\src\\pages\\contact.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\walido\\Documents\\gas\\my-gatsby-project\\src\\pages\\index.js")),
  "component---src-pages-listing-index-js": preferDefault(require("C:\\Users\\walido\\Documents\\gas\\my-gatsby-project\\src\\pages\\listing\\index.js")),
  "component---src-pages-work-js": preferDefault(require("C:\\Users\\walido\\Documents\\gas\\my-gatsby-project\\src\\pages\\work.js"))
}

