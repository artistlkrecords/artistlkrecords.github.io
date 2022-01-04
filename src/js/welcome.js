//Language Selector

//Call all the languages

const lang_es = document.getElementById('es-es');
const lang_en = document.getElementById('en-en');
const sel_btn = document.getElementById('lang-sel-btn');

lang_en.addEventListener('click',()=>{
    sel_btn.innerText = "Enter";
    sel_btn.addEventListener('click', ()=>{
        window.location.href = '../en/homepage/';
    });
});

lang_es.addEventListener('click',()=>{
    sel_btn.innerText = "Acceder";
    sel_btn.addEventListener('click', ()=>{
        window.location.href = '../es/inicio/';
    });
});