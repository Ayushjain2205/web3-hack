import { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

const handler = async (_req, res) => {
  try {
    const searchString = _req.query.searchString;
    // Your web scraping logic here
    // ...

    // Launch a headless browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to the initial page
    await page.goto("https://www.websitecarbon.com/");

    // Find the input box by its selector
    const inputBox = await page.$("#wgd-cc-url");

    // Type a value into the input box
    await inputBox.type(searchString);

    // Wait for the new page to load
    await page.waitForSelector(".website__header");

    const title = await page.$eval(
      ".js-emission-count",
      (el) => el.textContent
    );
    const description = await page.$eval(
      ".js-emission-count",
      (el) => el.textContent
    );

    // Return extracted data as JSON
    res.status(200).json({ title, description });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to scrape data from website" });
  }
};

export default handler;
