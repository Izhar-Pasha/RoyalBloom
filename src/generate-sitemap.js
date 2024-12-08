import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream, mkdirSync } from "fs";
import { dirname } from "path";

async function generateSitemap() {
  const outputPath = "../public/sitemap.xml"; // Correct path to the public folder

  // Ensure the directory exists
  mkdirSync(dirname(outputPath), { recursive: true });

  const smStream = new SitemapStream({
    hostname: "https://www.royalbloom.in/", // Base URL of your website
  });

  const routes = [
    { url: "/Home", changefreq: "daily", priority: 1.0 },
    { url: "/About", changefreq: "monthly", priority: 0.8 },
    { url: "/Services", changefreq: "weekly", priority: 1.0 },
    { url: "/Gallery", changefreq: "monthly", priority: 0.8 },
    { url: "/Contact", changefreq: "daily", priority: 1.0 },
  ];

  // Add each route to the sitemap stream
  routes.forEach((route) => smStream.write(route));

  smStream.end();

  const sitemap = await streamToPromise(smStream).then((data) =>
    data.toString()
  );

  // Ensure the output is valid XML
  if (sitemap.startsWith("<?xml")) {
    createWriteStream(outputPath).write(sitemap);
    console.log("Sitemap generated!");
  } else {
    console.log(
      "Failed to generate a valid sitemap. Please check the sitemap content."
    );
  }
}

generateSitemap();
