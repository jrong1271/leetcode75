// captureCoverageImage.js
import { launch } from "puppeteer";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

(async () => {
  const browser = await launch();
  const page = await browser.newPage();

  // Adjust the path to the coverage HTML file
  const coverageReportPath = join(
    dirname(fileURLToPath(import.meta.url)),
    "coverage",
    "index.html",
  );
  await page.goto(`file://${coverageReportPath}`, {
    waitUntil: "networkidle0",
  });

  // Screenshot options
  const options = {
    path: "coverage-report.png", // Output image file
    fullPage: true, // Capture the full page
  };

  await page.screenshot(options);
  await browser.close();
})();
