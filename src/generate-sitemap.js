import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

async function generateSitemap() {
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

  routes.forEach((route) => smStream.write(route));

  smStream.end();
  const sitemap = await streamToPromise(smStream).then((data) =>
    data.toString()
  );

  // Save sitemap to the appropriate location
  createWriteStream("../public/sitemap.xml").write(sitemap);
  console.log("Sitemap generated!");
}

generateSitemap();
