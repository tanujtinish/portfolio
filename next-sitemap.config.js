module.exports = {
  siteUrl: "https://portfolio-tanuj.vercel.app", // Replace with your own domain
  generateRobotsTxt: true, // (optional) Include robots.txt file
  exclude: ["/admin", "/drafts"], // (optional) Exclude specific routes
  // Optional configuration to customize the generated sitemap.xml
  // Some common options:
  // 1. If you want to add additional paths to the sitemap, you can use the additionalPaths option:
  // additionalPaths: ['/extra-page'],
  // 2. If you want to provide a custom sitemapXml configuration:
  // sitemapXml: { additionalNamespaces: { 'xhtml': 'http://www.w3.org/1999/xhtml' }, lastmod: new Date().toISOString(), }
};
