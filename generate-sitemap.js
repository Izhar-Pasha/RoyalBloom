const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const path = require("path");

// Define your hostname
const hostname = "https://www.royalbloom.in/"; // Replace with your actual domain

// Define your routes
const routes = [
  "/",
  "/Home",
  "/About",
  "/Services",
  "/Gallery",
  "/Contact", // Add more specific routes as needed
  // Add more static routes here
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname });
  const outputPath = path.resolve(__dirname, "..", "public", "sitemap.xml"); // Ensure public is outside of src

  const writeStream = createWriteStream(outputPath);
  sitemap.pipe(writeStream);

  routes.forEach((route) => {
    sitemap.write({ url: route, changefreq: "daily", priority: 0.8 });
  });

  sitemap.end();

  await streamToPromise(sitemap);
  console.log("Sitemap successfully generated!");
}

generateSitemap().catch(console.error);
