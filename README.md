# Twinkle's Portfolio

A personal portfolio website built with plain HTML, CSS and JavaScript. No build step is needed.

## Folder structure
```
portfolio/
├── index.html
├── css/style.css
├── js/script.js
├── assets/
│   ├── images/profile.jpg
│   └── documents/ (resume.pdf, ai-literacy-certificate.pdf)
└── README.md
```

## Replace your photo, resume or project images
- Photo: `assets/images/profile.jpg`
- Resume: `assets/documents/resume.pdf` (keep the same file name)
- Project images: put them in `assets/images/` (for example `project1.jpg`) and write the path in `portfolioData`.

## Edit content
Open `js/script.js`. Everything is in the `portfolioData` object at the top.
- **Add a project:** replace the placeholder in `projects` with real text (no `[square brackets]`). The Projects section and menu link then appear automatically.
- **Add a certificate:** copy one entry in `certifications`. Add a `link` to show a "View Credential" button.
- **Hide something:** make its value empty (`""`). Empty sections never show.

## Change colors and fonts
Open `css/style.css` and edit the variables in `:root` (light theme) and `[data-theme="dark"]` (dark theme). Fonts are `--font-head` and `--font-body`, loaded in `index.html` from Google Fonts.

## Deploy on GitHub Pages
1. Create a new public repository on GitHub.
2. Name it `twinkle-0812.github.io` to get the address `https://twinkle-0812.github.io`. Any other name gives `https://twinkle-0812.github.io/<repo-name>/`.
3. Upload the **contents** of this folder (index.html at the top level of the repo).
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
6. Wait one or two minutes and open your address.

## Privacy note
Your phone number is shown publicly on the site. To remove it, set `phone: ""` in `portfolioData`.
