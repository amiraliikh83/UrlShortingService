const UrlService = require("../Service/urlService");

exports.shortenUrl = async (req, res) => {
  const { originalUrl } = req.body;
  try {
    const shortUrl = await UrlService.shortenUrl(originalUrl);
    res.json({ shortUrl: `http://localhost:3000/${shortUrl}` });
  } catch (error) {
    res.status(500).send("Error shortening URL");
  }
};

exports.getUrlStats = async (req, res) => {
  const { shortUrl } = req.params;
  try {
    const stats = await UrlService.getUrlStats(shortUrl);
    res.json(stats);
  } catch (error) {
    res.status(404).send("URL not found");
  }
};
