function initThemeToggle() {
  const themeToggle = document.getElementById('toggle');
  const body = document.body;
  const navbar = document.querySelector('.navbar');

  if (!themeToggle) return; // Exit if toggle not present

  function setTheme(isChecked) {
    // Navbar and body
    if (isChecked) {
      body.classList.add('bg-black', 'text-white');
      body.classList.remove('bg-light', 'text-dark');
      navbar.classList.add('navbar-dark', 'bg-black');
      navbar.classList.remove('navbar-light', 'bg-light');
    } else {
      body.classList.add('bg-light', 'text-dark');
      body.classList.remove('bg-black', 'text-white');
      navbar.classList.add('navbar-light', 'bg-light');
      navbar.classList.remove('navbar-dark', 'bg-black');
    }

    // Cards
    document.querySelectorAll('.card').forEach(card => {
      if (isChecked) {
        card.classList.add('bg-dark', 'text-white');
        card.classList.remove('bg-light', 'text-dark');
      } else {
        card.classList.add('bg-light', 'text-dark');
        card.classList.remove('bg-dark', 'text-white');
      }
    });

    // Containers
    document.querySelectorAll('body > .container, body > .container-fluid, main > .container, main > .container-fluid, footer > .container, footer > .container-fluid').forEach(container => {
      if (isChecked) {
        container.classList.add('bg-black');
        container.classList.remove('bg-light');
      } else {
        container.classList.add('bg-light');
        container.classList.remove('bg-black');
      }
    });

    // Backgrounds
    document.querySelectorAll('.bgLayer').forEach(bgLayer => {
      if (isChecked) {
        bgLayer.classList.add('bg-black');
        // bgLayer.classList.add('opacity-75');
        bgLayer.classList.remove('bg-light');
      } else {
        bgLayer.classList.add('bg-light');
        bgLayer.classList.remove('bg-black');
        // bgLayer.classList.remove('opacity-75');
      }
    });

    // Stripe
    document.querySelectorAll('.Stripe').forEach(bgLayer => {
      if (isChecked) {
        bgLayer.classList.add('bg-black');
        bgLayer.classList.remove('bg-light');
      } else {
        bgLayer.classList.add('bg-light');
        bgLayer.classList.remove('bg-black');
      }
    });

    // Footer
    document.querySelectorAll('footer').forEach(footer => {
      if (isChecked) {
        footer.classList.add('bg-black', 'text-white');
        footer.classList.remove('bg-light', 'text-dark');
      } else {
        footer.classList.add('bg-light', 'text-dark');
        footer.classList.remove('bg-black', 'text-white');
      }
    });

    // Footer background
    document.querySelectorAll('.footer-theme').forEach(footer => {
      if (isChecked) {
        footer.classList.add('bg-black');
        footer.classList.remove('bg-secondary');
      } else {
        footer.classList.add('bg-secondary');
        footer.classList.remove('bg-black');
      }
    });

    // Text elements
    document.querySelectorAll('.text-theme').forEach(el => {
      if (isChecked) {
        el.classList.add('text-white');
        el.classList.remove('text-dark');
      } else {
        el.classList.add('text-dark');
        el.classList.remove('text-white');
      }
    });

    // SVG icons
    document.querySelectorAll('.svg-theme').forEach(svg => {
      if (isChecked) {
        svg.classList.add('text-white');
        svg.classList.remove('text-dark');
      } else {
        svg.classList.add('text-dark');
        svg.classList.remove('text-white');
      }
    });

    // Card backgrounds
    document.querySelectorAll('.card-bg-theme').forEach(cardBg => {
      if (isChecked) {
        cardBg.classList.add('bg-dark');
        cardBg.classList.remove('bg-light', 'bg-white');
      } else {
        cardBg.classList.add('bg-white');
        cardBg.classList.remove('bg-dark', 'bg-light');
      }
    });

    // Buttons
    document.querySelectorAll('.btn-theme').forEach(btn => {
      if (isChecked) {
        btn.classList.add('btn-light', 'text-dark');
        btn.classList.remove('btn-dark', 'btn-secondary', 'text-white');
      } else {
        btn.classList.add('btn-dark', 'text-white');
        btn.classList.remove('btn-light', 'btn-secondary', 'text-dark');
      }
    });
  }

  themeToggle.addEventListener('change', function() {
    setTheme(this.checked);
    localStorage.setItem('theme', this.checked ? 'dark' : 'light');
  });

  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    themeToggle.checked = false;
    setTheme(false);
  } else {
    themeToggle.checked = true;
    setTheme(true);
  }
}

document.addEventListener('DOMContentLoaded', initThemeToggle);
window.initThemeToggle = initThemeToggle;