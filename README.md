# Powered by Plants 🌱

A static website sharing my Veganuary journey — tips, recipes, and restaurant discoveries from London and Hong Kong.

## 🚀 Quick Start

### Option 1: View Locally
Simply open `index.html` in your web browser to preview the site.

### Option 2: Deploy to GitHub Pages

1. **Push this repository to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Powered by Plants website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages** (in the left sidebar)
   - Under "Source", select **Deploy from a branch**
   - Select **main** branch and **/ (root)** folder
   - Click **Save**

3. **Your site will be live at:**
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
   ```

## 📁 Project Structure

```
vegan/
├── index.html          # Home page
├── why-vegan.html      # Why go vegan? page
├── recipes.html        # Recipes with tag filtering
├── tips.html           # Tips page (with placeholders)
├── restaurants.html    # Restaurant recommendations
├── css/
│   └── style.css       # Main stylesheet
└── docs/
    └── prompt.md       # Original design brief
```

## ✏️ How to Edit Content

### Adding a New Recipe
Open `recipes.html` and add a new recipe card inside the `#recipe-list` div:

```html
<div class="recipe-card" data-tags="chinese main quick">
  <h3>Recipe Name</h3>
  <p class="chinese-name">Chinese name or description</p>
  <div class="recipe-tags">
    <span class="tag chinese">Chinese</span>
    <span class="tag main">Main</span>
    <span class="tag quick">Quick</span>
  </div>
</div>
```

**Available tags:** `chinese`, `western`, `japanese`, `breakfast`, `main`, `quick`, `salad`

### Adding a New Restaurant
Open `restaurants.html` and add:

```html
<div class="restaurant-card">
  <div class="restaurant-info">
    <h4>Restaurant Name <span class="badge">Recommended</span></h4>
    <p>Description or location</p>
  </div>
  <a href="GOOGLE_MAPS_LINK" target="_blank" rel="noopener" class="restaurant-link">📍 Map</a>
</div>
```

Use `<span class="badge keen">On my list</span>` for places you want to try.

### Adding New Tips
Open `tips.html` and add:

```html
<div class="tip-card">
  <h3><span class="tip-number">5</span> Your Tip Title</h3>
  <p>Your tip content goes here...</p>
</div>
```

## 🎨 Customization

### Changing Colors
Edit the CSS variables at the top of `css/style.css`:

```css
:root {
  --color-coral: #FF6B6B;
  --color-orange: #FF9F43;
  --color-peach: #FFEAA7;
  --color-pink: #FD79A8;
  /* ... */
}
```

### Changing Hero Images
Each page uses Unsplash images. To change them, replace the URL in the `style` attribute:

```html
<section class="hero" style="background-image: url('YOUR_IMAGE_URL');">
```

For best results, use images at least 1920px wide.

### Using Your Own Images
1. Create an `images/` folder
2. Add your images
3. Update the URLs: `url('images/your-image.jpg')`

## 📱 Features

- ✅ Fully responsive (mobile-optimized)
- ✅ Parallax scrolling effects
- ✅ Recipe filtering by tags
- ✅ Google Maps integration for restaurants
- ✅ Coral/orange/peach color palette
- ✅ No build tools required — pure HTML, CSS, JavaScript

## 🌐 Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome for Android)

## 📝 License

Feel free to use this template for your own Veganuary journey!

---

Made with 🧡 for the planet.
