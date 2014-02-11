var videoInput = document.querySelector('#videoURL'),
    youtubePlayer = document.querySelector('youtube-player');

videoInput.addEventListener('input', function (){
    youtubePlayer.changeVideo(this.value);
});