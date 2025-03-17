# 0xAddy Website - https://0xaddy.xyz

A stylish terminal-themed website with a hacker aesthetic.

## How to Run Locally

You have two options to run this website locally:

### Method 1: Python HTTP Server (Recommended)

1. Open your terminal
2. Navigate to the website directory:
   ```bash
   cd path/to/your/website
   ```
3. If you have Python 3:
   ```bash
   python -m http.server 8000
   ```
   If you have Python 2:
   ```bash
   python -m SimpleHTTPServer 8000
   ```
4. Open your web browser and visit: `http://localhost:8000`

### Method 2: Using VS Code Live Server

1. Install VS Code if you haven't already: https://code.visualstudio.com/
2. Install the "Live Server" extension:
   - Click on Extensions icon in VS Code (or press Ctrl+Shift+X)
   - Search for "Live Server"
   - Install the one by Ritwick Dey
3. Right-click on `index.html` in VS Code
4. Select "Open with Live Server"
5. The website will automatically open in your default browser

### Method 3: Using Node.js http-server

1. Install Node.js if you haven't already: https://nodejs.org/
2. Open terminal and install http-server globally:
   ```bash
   npm install -g http-server
   ```
3. Navigate to your website directory and run:
   ```bash
   http-server
   ```
4. Open your browser and visit: `http://localhost:8080`

## Files Structure
- `index.html` - The main HTML file
- `styles.css` - Contains all the styling and animations 