
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

// document.addEventListener('DOMContentLoaded',() => {

//   const languageMap = {
//     'en': 'en',
//     'en-US':'en',
//     'ja': 'jp',
//     'ja-JP':'jp',
//     'zh': 'ch_simplify',
//     'zh-CN': 'ch_simplify',
//     'zh-TW': 'ch_traditional',
//     'fr': 'fr',
//     'fr-FR': 'fr',
//     'it':'it',
//     'it-IT': 'it',
//     'es':'es',
//     'es-ES':'es',
//     'es-419': 'es_latino',
//     'es-MX': 'es_latino',
//     'es-AR': 'es_latino',
//     'es-CL': 'es_latino'
//   };

//   const userLang = navigator.language || navigator.userLanguage;
//   const languageID = languageMap[userLang] || 'en';

//   showLanguage(languageID);

  

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
  
