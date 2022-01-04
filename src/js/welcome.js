//Language Selector

//Call all the languages

const lang_def = document.getElementById('lang-sel');
const lang_es = document.getElementById('es-es');
const lang_en = document.getElementById('en-en');
const sel_btn = document.getElementById('lang-sel-btn');


//Debugin Completed: All Working
document.body.onload = function() {
    lang_def.value = 'def-sel';
}

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

//Social Media

//Call all the btn's

const ig_btn = document.getElementById('social-instagram');
const yt_btn = document.getElementById('social-youtube');
const music_btn = document.getElementById('social-music');

//Music || Call all the elements
const music_block = document.getElementById('social-music-block');
const spotify_btn = document.getElementById('social-music-block-spotify');
const soundcloud_btn = document.getElementById('social-music-block-soundcloud');

//Click Events
ig_btn.addEventListener('click', () => {
    window.location.href = "https://www.instagram.com/artistlkrecords/";
});

yt_btn.addEventListener('click', () => {
    window.location.href = "";
});

music_btn.addEventListener('click', () => {
    music_block.style.display = 'block';
});

