const SitemapGenerator = require("sitemap-generator");

const generator = SitemapGenerator("https://marvel-chronicles-7f4ee.web.app/", {
  stripQuerystring: false, // Set to true if you want to remove query strings from URLs
});

generator.on("done", () => {
  console.log("Sitemap generated successfully.");
});

generator.start();
