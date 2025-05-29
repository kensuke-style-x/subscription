//translate 
function showLanguage(lang){
  
 const languages = ['en','jp','ch_simplify','ch_traditional','fr','it','es','es_latino'];
  languages.forEach(id => {
     const section = document.getElementById(id);
    if (section) {
      section.classList.remove('active');
      section.style.display = 'none';
    }
  });

  const targetSection = document.getElementById(lang)
  if (targetSection){
    targetSection.classList.add('active');
    targetSection.style.display = 'block';
  }
}

//button 
document.addEventListener('DOMContentLoaded',() => {

  document.getElementById('en-btn').addEventListener('click', () => showLanguage('en'));
  document.getElementById('jp-btn').addEventListener('click', () => showLanguage('jp'));
  document.getElementById('ch_simplify-btn').addEventListener('click', () => showLanguage('ch_simplify'));
  document.getElementById('ch_traditional-btn').addEventListener('click', () => showLanguage('ch_traditional'));
  document.getElementById('fr-btn').addEventListener('click', () => showLanguage('fr'));
  document.getElementById('it-btn').addEventListener('click', () => showLanguage('it'));
  document.getElementById('es-btn').addEventListener('click', () => showLanguage('es'));
  document.getElementById('es_latino-btn').addEventListener('click', () => showLanguage('es_latino'));
  
});
  
