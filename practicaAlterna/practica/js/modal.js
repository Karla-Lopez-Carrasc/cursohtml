document.addEventListener("DOMContentLoaded", function(){

    const btnPlay = document.querySelector('.buttons .play');
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('spyVideo');

    console.log(btnPlay);
    console.log(modal);
    console.log(video);

    // abre el modal
    btnPlay.addEventListener('click', ()=>{
        modal.style.display = 'block';
        video.play();
    });

    // cierra el modal
    modal.addEventListener('click', (e)=>{
        if(e.target == modal){
            video.pause();
            video.currentTime = 0;
            modal.style.display = 'none';
        }

    });








});