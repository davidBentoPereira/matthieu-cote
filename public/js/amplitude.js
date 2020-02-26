/*
    When the bandcamp link is pressed, stop all propagation so AmplitudeJS doesn't
    play the song.
*/
/*let bandcampLinks = document.getElementsByClassName('bandcamp-link');

for( var i = 0; i < bandcampLinks.length; i++ ){
    bandcampLinks[i].addEventListener('click', function(e){
        e.stopPropagation();
    });
}*/


let songElements = document.getElementsByClassName('song');

for( let i = 0; i < songElements.length; i++ ){
    /*
        Ensure that on mouseover, CSS styles don't get messed up for active songs.
    */
    songElements[i].addEventListener('mouseover', function(){
        // this.style.backgroundColor = 'red';

        // this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#000000';
        // this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#FFFFFF';

        if( !this.classList.contains('') ){
            this.querySelectorAll('.icon-pause')[0].style.display = 'block';
        }

        // this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'none';
        // this.querySelectorAll('img.bandcamp-white')[0].style.display = 'block';
        // this.querySelectorAll('.song-duration')[0].style.color = '#FFFFFF';
    });

    /*
        Ensure that on mouseout, CSS styles don't get messed up for active songs.
    */
    songElements[i].addEventListener('mouseout', function(){
        // this.style.backgroundColor = '#171d24';
        // this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#FFFFFF';
        // // this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#607D8B';
        // this.querySelectorAll('.play-button-container')[0].style.display = 'none';
        // this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'block';
        // this.querySelectorAll('img.bandcamp-white')[0].style.display = 'none';
        // this.querySelectorAll('.song-duration')[0].style.color = '#607D8B';
    });

    /*
        Show and hide the play button container on the song when the song is clicked.
    */
    songElements[i].addEventListener('click', function(){
        this.querySelectorAll('.play-button-container')[0].style.display = 'none';
    });
}

/*
    Initializes AmplitudeJS
*/
Amplitude.init({
    "songs": [
        {
            "name": "Etudiante en lettre",
            "artist": "Matthieu Côte",
            "album": "Matthieu Côte",
            "url": "../music/matthieu_cote_mathieu_cote/Matthieu CÔTE - Matthieu CÔTE - 01 Etudiante en Lettres.mp3",
            "cover_art_url": "../img/cover_album_matthieu_cote.jpg"
        },
        {
            "name": "La mère de l'oficier",
            "artist": "Matthieu Côte",
            "album": "Matthieu Côte",
            "url": "../music/matthieu_cote_mathieu_cote/Matthieu CÔTE - Matthieu CÔTE - 02 La Mère de l'Officier.mp3",
            "cover_art_url": "../img/cover_album_matthieu_cote.jpg"
        },
        {
            "name": "Tendre",
            "artist": "Matthieu Côte",
            "album": "Matthieu Côte",
            "url": "../music/matthieu_cote_mathieu_cote/Matthieu CÔTE - Matthieu CÔTE - 03 Tendre.mp3",
            "cover_art_url": "../img/cover_album_matthieu_cote.jpg"
        },
        {
            "name": "Liège",
            "artist": "Matthieu Côte",
            "album": "Matthieu Côte",
            "url": "../music/matthieu_cote_mathieu_cote/Matthieu CÔTE - Matthieu CÔTE - 04 Liège.mp3",
            "cover_art_url": "../img/cover_album_matthieu_cote.jpg"
        },
        {
            "name": "Le rêve Américain",
            "artist": "Matthieu Côte",
            "album": "Matthieu Côte",
            "url": "../music/matthieu_cote_mathieu_cote/Matthieu CÔTE - Matthieu CÔTE - 05 Le Rêve Américain.mp3",
            "cover_art_url": "../img/cover_album_matthieu_cote.jpg"
        },
        {
            "name": "Le Sarong",
            "artist": "Matthieu Côte",
            "album": "Matthieu Côte",
            "url": "../music/matthieu_cote_mathieu_cote/Matthieu CÔTE - Matthieu CÔTE - 06 Le Sarong.mp3",
            "cover_art_url": "../img/cover_album_matthieu_cote.jpg"
        },
        {
            "name": "Ma meilleure amie",
            "artist": "Matthieu Côte",
            "album": "Matthieu Côte",
            "url": "../music/matthieu_cote_mathieu_cote/Matthieu CÔTE - Matthieu CÔTE - 07 Ma Meilleure Amie.mp3",
            "cover_art_url": "../img/cover_album_matthieu_cote.jpg"
        },
        {
            "name": "Si les vaches avaient des ailes",
            "artist": "Matthieu Côte",
            "album": "Matthieu Côte",
            "url": "../music/matthieu_cote_mathieu_cote/Matthieu CÔTE - Matthieu CÔTE - 08 Si les vaches avaient des ailes.mp3",
            "cover_art_url": "../img/cover_album_matthieu_cote.jpg"
        },
        {
            "name": "Ravissante Môme",
            "artist": "Matthieu Côte",
            "album": "Matthieu Côte",
            "url": "../music/matthieu_cote_mathieu_cote/Matthieu CÔTE - Matthieu CÔTE - 09 Ravissante Môme.mp3",
            "cover_art_url": "../img/cover_album_matthieu_cote.jpg"
        },
        {
            "name": "Le soldat en bouffon",
            "artist": "Matthieu Côte",
            "album": "Matthieu Côte",
            "url": "../music/matthieu_cote_mathieu_cote/Matthieu CÔTE - Matthieu CÔTE - 10 Le Soldat en Bouffon.mp3",
            "cover_art_url": "../img/cover_album_matthieu_cote.jpg"
        },
        {
            "name": "Potache",
            "artist": "Matthieu Côte",
            "album": "Matthieu Côte",
            "url": "../music/matthieu_cote_mathieu_cote/Matthieu CÔTE - Matthieu CÔTE - 11 Potache.mp3",
            "cover_art_url": "../img/cover_album_matthieu_cote.jpg"
        },
        {
            "name": "Quéquette",
            "artist": "Matthieu Côte",
            "album": "Matthieu Côte",
            "url": "../music/matthieu_cote_mathieu_cote/Matthieu CÔTE - Matthieu CÔTE - 12 Quéquette.mp3",
            "cover_art_url": "../img/cover_album_matthieu_cote.jpg"
        },
        {
            "name": "Tu as 20 ans",
            "artist": "Matthieu Côte",
            "album": "Matthieu Côte",
            "url": "../music/matthieu_cote_mathieu_cote/Matthieu CÔTE - Matthieu CÔTE - 13 Tu as 20 ans.mp3",
            "cover_art_url": "../img/cover_album_matthieu_cote.jpg"
        }
    ],
});
// document.getElementById('large-visualization').style.height = document.getElementById('album-art').offsetWidth + 'px';



/*
    Show and hide the play or the pause button depending on which one is clicked
*/
let playButton = document.getElementsByClassName('btn-play');
let pauseButton = document.getElementsByClassName('btn-pause');

playButton[0].addEventListener('click', function(){
    playButton[0].style.display = 'none';
    pauseButton[0].style.display = 'block';
});

pauseButton[0].addEventListener('click', function(){
    playButton[0].style.display = '';
    pauseButton[0].style.display = 'none';
});