# Slideshow

This is a simple Node.js application that sets up a web server to display images from a directory in an infinite loop while simultaneously playing MP3 files from another directory.
Initial code written by some fancy large language model and fixed by @mrsrhn.

## Prerequisites

- Node.js and npm must be installed on your system.

## Installation

1. Clone the repository or download the files:
   ```bash
   git clone https://github.com/your-username/slideshow-with-music.git
   cd slideshow-with-music
   ```
2. Install the required packages
    ```bash
    npm install
    ```
3. Create the following directories and add your images and MP3 files:
    ```bash
    /project-root
        /public
            /images
                - image1.jpg
                - image2.jpg
                ...
            /audio
                - track1.mp3
                - track2.mp3
                ...
    ```

## Usage

1. Start the server
   ```bash
   node app.js
   ```
2. Open your web browser and go to http://localhost:3000.

3. Click somewhere in the slideshow to start the music


