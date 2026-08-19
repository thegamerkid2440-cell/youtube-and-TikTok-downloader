const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Media Downloader Server is running!");
});

app.post("/api/download", (req, res) => {
  const { platform, url, quality } = req.body;

  if (!url) {
    return res.status(400).json({
      message: "Please provide a URL."
    });
  }

  res.json({
    message: "Request received!",
    platform: platform,
    quality: quality,
    url: url
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});