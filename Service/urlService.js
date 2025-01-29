const Url = require("../models/url");
const shortid = require("shortid");

exports.shortenUrl = async (originalUrl) => {
  const shortUrl = shortid.generate();
  const newUrl = new Url({ originalUrl, shortUrl });
  await newUrl.save();
  return shortUrl;
};

exports.getUrlStats = async (shortUrl) => {
  const url = await Url.findOne({ shortUrl });
  if (url) {
    return {
      originalUrl: url.originalUrl,
      shortUrl: `http://localhost:3000/${url.shortUrl}`,
      accessCount: url.accessCount,
    };
  }
  throw new Error("URL not found");
};
