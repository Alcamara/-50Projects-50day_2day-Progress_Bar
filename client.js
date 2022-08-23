$(document).ready(readyNow);

let progressBar = 0;
let step = 1;

function readyNow() {
    console.log('test');
    $('#next').on('click', nextBtn);
    $('#prev').on('click', prevBtn);
}

function nextBtn() {
    progressBar +=33;
    step++ 
    console.log('you click next');
    $('.progress').css('width', `${progressBar}%`);

    $(`#${step}`).addClass('active');

    if (progressBar > 0) {
        $('#prev').removeAttr('disabled');
    } else if(progressBar === 0){
        $('#prev').attr('disabled', 'disabled');
    }
        
    if (progressBar > 90) {
        $('#next').attr('disabled', 'disabled');
    }
}

function prevBtn() {
    progressBar -=33; 
    $('.progress').css('width', `${progressBar}%`);

    $(`#${step}`).removeClass('active');
    step--  

    if(progressBar === 0){
        $('#prev').attr('disabled', 'disabled');
    }

    if (progressBar <= 80) {
        $('#next').removeAttr('disabled');
    } 
}