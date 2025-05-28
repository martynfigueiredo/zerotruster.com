document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;

  // Check local storage for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = "☀️"; // Show sun icon (click this to switch to light)
  } else {
    themeToggle.textContent = "🌙"; // Show moon icon (click this to switch to dark)
  }

  themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
      // Switch to light mode
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      themeToggle.textContent = "🌙";
    } else {
      // Switch to dark mode
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      themeToggle.textContent = "☀️";
    }
  });
});
