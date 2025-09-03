# Business Landing Page

A modern, responsive business landing page for a software development company specializing in digital solutions, building management systems, and enterprise applications.

## 🌟 Features

- **Modern Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Dark/Light Theme Toggle**: Interactive theme switcher with smooth animations and sparkle effects
- **Multi-page Architecture**: Organized content across multiple pages for better user navigation
- **Client Portfolio Showcase**: Dedicated sections highlighting work with major clients including Marina One, SUTD, SIT Singapore, and H9A Singapore
- **Product Demonstrations**: Interactive carousel showcasing different product offerings
- **Performance Metrics**: Real-time display of system reliability and uptime statistics
- **Client Testimonials**: Customer reviews and feedback section
- **Smooth Animations**: AOS (Animate On Scroll) integration for engaging user experience
- **Modular Components**: Reusable navbar and footer components for maintainability

## 🚀 Live Demo

Visit the live demo: [Site Demo](https://www.sample-site.com/demo)

## 🛠️ Technologies Used

- **Frontend Framework**: Bootstrap 5
- **JavaScript Libraries**:
  - jQuery 3.x
  - jQuery Flipster (for carousel functionality)
  - AOS (Animate On Scroll)
- **CSS**: Custom theme with Bootstrap customization
- **Fonts**: Inter font family with multiple weights
- **Icons**: Bootstrap Icons
- **Build Tools**: Standard HTML/CSS/JS (no build process required)

## 📁 Project Structure

```
business-landing-page/
├── index.html              # Main landing page
├── about.html              # About us page  
├── contact.html            # Contact information page
├── products.html           # Products showcase page
├── ibms.html              # IBMS product details page
├── content.html           # Dynamic content display page
├── css/
│   ├── theme.css          # Main custom styles
│   ├── theme.min.css      # Minified theme styles
│   ├── bootstrap.min.css  # Bootstrap framework
│   └── jquery.flipster.min.css  # Carousel styles
├── js/
│   ├── bootstrap.bundle.min.js   # Bootstrap JavaScript
│   ├── jquery.min.js            # jQuery library
│   ├── jquery.flipster.min.js   # Carousel functionality
│   ├── aos.js                   # Scroll animations
│   ├── themeToggle.js           # Dark/light theme switching
│   ├── includeNavbar.js         # Dynamic navbar injection
│   ├── includeFooter.js         # Dynamic footer injection
│   ├── scrollPos.js             # Scroll position tracking
│   └── productDataDisplay.js    # Product data handling
├── data/
│   └── data.js            # Client and project data
├── img/                   # Image assets organized by client/project
├── fonts/                 # Inter font files (WOFF2/WOFF)
└── README.md             # This file
```

## 🏃‍♂️ Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended for development)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/IsuruPD/business-landing-page.git
   cd business-landing-page
   ```

2. **Open in a web browser:**
   - **Option A**: Simply open `index.html` in your web browser
   - **Option B**: Use a local development server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Access the application:**
   - Direct file access: `file:///path/to/index.html`
   - Local server: `http://localhost:8000`

## 🎯 Usage

### Navigation
- **Home**: Main landing page with company overview and key services
- **Products**: Detailed view of product offerings including Mini SCADA, IBMS, and Pump Edge
- **About**: Company information and team details
- **Contact**: Contact information and inquiry forms

### Theme Switching
- Click the theme toggle button in the navigation bar to switch between light and dark modes
- Theme preference is maintained across page navigation

### Product Showcase
- Navigate through the product carousel on the home page
- Click on client project cards to view detailed case studies
- Use the "See All" link to expand the client portfolio view

## 🏗️ Development

### Adding New Content

1. **Client Projects**: Update `data/data.js` to add new client projects and product information
2. **Images**: Add new images to the `img/` directory, organized by client/project
3. **Styles**: Modify `css/theme.css` for custom styling (avoid editing minified files)

### Customization

- **Colors**: Update CSS custom properties in `css/theme.css`
- **Fonts**: Modify font-face declarations in individual HTML files
- **Layout**: Adjust Bootstrap grid classes and custom CSS as needed

### Code Structure

- **Modular Components**: Navbar and footer are loaded dynamically via JavaScript
- **Data-Driven Content**: Client and project information is stored in `data/data.js`
- **Responsive Design**: Uses Bootstrap's grid system with custom breakpoints
- **Animation**: AOS library handles scroll-triggered animations

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (limited support)

## 📊 Performance Features

- **Optimized Images**: WebP format for modern browsers with fallbacks
- **Lazy Loading**: Images load as they become visible
- **Minified Assets**: CSS and JavaScript files are minified for production
- **CDN Ready**: All assets can be served from a CDN for improved performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

### Development Guidelines

- Maintain responsive design principles
- Test across multiple browsers and devices
- Follow existing code style and structure
- Update documentation for significant changes
- Optimize images and assets before committing

## 🔄 Version History

- **v1.0**: Initial release with core functionality
- **Current**: Multi-page architecture with client showcases and product demonstrations

---
