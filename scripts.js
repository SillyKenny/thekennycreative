document.getElementById('theme-toggle').addEventListener('click', function() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', currentTheme === 'light' ? 'dark' : 'light');
});

document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || 'light');
document.getElementById('theme-toggle').addEventListener('click', function() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', currentTheme === 'light' ? 'dark' : 'light');
  localStorage.setItem('theme', document.documentElement.getAttribute('data-theme'));
});

const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
if (systemSettingDark.matches) {
  document.documentElement.setAttribute('data-theme', 'dark');
} else {
  document.documentElement.setAttribute('data-theme', 'light');
}