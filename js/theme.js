document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;

  // Check local storage for a saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.setAttribute('icon', 'sun'); // In dark mode, show the sun to indicate a light mode switch
  } else {
    themeToggle.setAttribute('icon', 'moon'); // In light mode, show the moon to indicate a dark mode switch
  }

  // Toggle the theme on click
  themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      themeToggle.setAttribute('icon', 'moon');
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      themeToggle.setAttribute('icon', 'sun');
    }
  });
});
