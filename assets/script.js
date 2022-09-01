let music= document.getElementById("music");
let mode = 2;
let stat_music = 2;

function play(){
    if(stat_music % 2 == 0)
    {
        let content = document.getElementById('play');
        content.className = 'bx bx-pause';
        music.play();
    }
}

function pause() {
    if(stat_music % 2 != 0)
    {
        let content = document.getElementById('play');
        content.className = 'bx bx-play';
        music.pause();
    }
}  

function darkMode() {
    if(mode % 2 == 0)
    {
        let element = document.body;
        let content = document.getElementById("DarkModetext");
        let content_icon = document.getElementById('mode')

        content_icon.className = "bx bx-moon"
        element.className = "dark";
    }
}

function lightMode() {
    if(mode % 2 != 0)
    {
        let element = document.body;
        let content = document.getElementById("DarkModetext");
        let content_icon = document.getElementById('mode');

        content_icon.className = "bx bx-sun";
        element.className = "light";
    }
}