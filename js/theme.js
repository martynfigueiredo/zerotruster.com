document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('themeSwitch');
  if (!themeSwitch) return;

  // Check local storage for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeSwitch.checked = true;
  }

  // Listen for changes to the toggle (Fluent UI switch fires a 'change' event)
  themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  });
});
