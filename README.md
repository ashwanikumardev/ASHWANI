# SaulDesign - Portfolio Landing Page

A modern, responsive portfolio landing page converted from Figma design.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Scrolling**: Navigation with smooth scroll animations
- **Interactive Elements**: Filter buttons, form validation, and hover effects
- **Modern UI**: Clean design with decorative illustrations and animations
- **Sections**:
  - Home/Hero section with call-to-action buttons
  - About Me section
  - Projects/Portfolio section with filters
  - Contact form
  - Footer with social links

## File Structure

```
landing/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── assets/             # Images and SVG files
│   ├── doodles-home.svg
│   ├── illustration-home.svg
│   ├── doodles-about.svg
│   ├── lightbulb.svg
│   ├── group-62.svg
│   ├── projects-grid.svg
│   ├── illustration-contact.svg
│   ├── mail.svg
│   └── keyboard.svg
└── README.md           # This file
```

## Getting Started

1. Open `index.html` in your web browser
2. No build process required - it's ready to use!

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --bg-dark: #222831;
    --bg-secondary: #393E46;
    --text-primary: #EEEEEE;
    /* ... */
}
```

### Content
- Update text content directly in `index.html`
- Replace images in the `assets/` folder
- Modify form submission in `script.js`

### Contact Form
To make the contact form functional, update the form submission handler in `script.js` to send data to your backend API.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.

