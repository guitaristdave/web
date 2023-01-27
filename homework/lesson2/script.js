document.querySelector('button').onclick = myClick;

function myClick(){
    let name = document.querySelector('.name').value;
    let link = '<video src="./video/video.mp4" autoplay="autoplay" class="joke"></video>';
    document.querySelector('.vidos').innerHTML = ('<p>Привет, ' + name + '! Для тебя есть подарок:</p>');
    document.querySelector('.video').innerHTML = link;
}