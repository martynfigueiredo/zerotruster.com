document.addEventListener('DOMContentLoaded', () => {
  // Create the toggle button if it doesn't exist
  let themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) {
    themeToggle = document.createElement('button');
    themeToggle.id = 'themeToggle';
    themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    themeToggle.style.background = 'none';
    themeToggle.style.border = 'none';
    themeToggle.style.cursor = 'pointer';
    themeToggle.style.fontSize = '1.5rem';
    themeToggle.style.marginLeft = '1rem';
    // Add your icon classes or SVG here if needed
    // Example: themeToggle.innerHTML = '<i class="fa fa-moon"></i>';
    // For now, we'll use emoji:
    themeToggle.textContent = '🌙';
    // Place the button next to your other icons (adjust selector as needed)
    const iconBar = document.querySelector('.icon-bar, .icons, nav, header');
    if (iconBar) {
      iconBar.appendChild(themeToggle);
    } else {
      document.body.appendChild(themeToggle);
    }
  }

  // Check local storage for a saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️'; // Show sun icon for switching to light
  } else {
    themeToggle.textContent = '🌙'; // Show moon icon for switching to dark
  }

  // Toggle the theme on click
  themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      themeToggle.textContent = '🌙';
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      themeToggle.textContent = '☀️';
    }
  });
});