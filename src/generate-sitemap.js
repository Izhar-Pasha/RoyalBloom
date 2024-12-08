import { SitemapStream, streamToPromise } from "sitemap";
import { mkdirSync, writeFileSync } from "fs";
import { dirname } from "path";

async function generateSitemap() {
  const outputPath = "../public/sitemap.xml"; // Path to save the sitemap

  // Ensure the directory exists
  mkdirSync(dirname(outputPath), { recursive: true });

  const smStream = new SitemapStream({
    hostname: "https://www.royalbloom.in/", // Your website's base URL
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

  try {
    const sitemap = await streamToPromise(smStream).then((data) =>
      data.toString()
    );

    // Debugging: Log the generated sitemap content
    console.log("Generated Sitemap:\n", sitemap);

    // Ensure the output is valid XML
    if (sitemap.startsWith("<?xml")) {
      // Write the sitemap to the public directory
      writeFileSync(outputPath, sitemap);
      console.log("Sitemap generated and saved to:", outputPath);
    } else {
      console.error("The generated sitemap is not valid XML.");
    }
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
}

generateSitemap();
