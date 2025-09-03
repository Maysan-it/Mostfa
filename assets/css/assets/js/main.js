(function(){
  const toggle = document.getElementById('themeToggle');
  const current = localStorage.getItem('theme') || 'dark';
  if(current === 'light'){ document.body.classList.add('light'); toggle.textContent = '☀️'; }
  toggle.addEventListener('click', ()=>{
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    toggle.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
})();
