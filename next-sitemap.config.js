module.exports = {
  siteUrl: "https://tanuj.org", // Replace with your own domain
  generateRobotsTxt: true, // (optional) Include robots.txt file
  exclude: ["/admin", "/drafts"], // (optional) Exclude specific routes
  additionalPaths: async (config) => {
    return [
      {
        loc: "/skills", // This is the path you want to include
        changefreq: "daily",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      // You can add more paths if needed
    ];
  },
};
