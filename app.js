const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

// Set the view engine to ejs
app.set("view engine", "ejs");

// Set the public directory for static files
app.use(express.static(path.join(__dirname, "public")));

// Get all jpg and jpeg files from the images directory
const imagesDir = path.join(__dirname, "public", "images");
const imageFiles = fs
  .readdirSync(imagesDir)
  .filter((file) => /\.(jpe?g)$/i.test(file));

// Get all mp3 files from the audio directory
const audioDir = path.join(__dirname, "public", "audio");
const audioFiles = fs
  .readdirSync(audioDir)
  .filter((file) => /\.mp3$/i.test(file));

// Serve the index page
app.get("/", (req, res) => {
  res.render("index", { images: imageFiles, audios: audioFiles });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
