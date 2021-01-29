//BOTONES 
theVideo = document.querySelector("#video1");

function playVideo() {
    theVideo.play();
}

function pauseVideo() {
    theVideo.pause();
}

function stopVideo() {
    theVideo.currentTime = 0;
    theVideo.pause();
}

function rewindVideo() {
    theVideo.currentTime = 0;
}

//FILTROS
var output = document.getElementById('video1');

var idx = 0;
var filters = [
    'grayscale',
    'sepia',
    'blur',
    'brightness',
    'contrast',
    'hue-rotate', 'hue-rotate2', 'hue-rotate3',
    'saturate',
    'invert',
    ''
];

function changeFilter(e) {
    var el = e.target;
    var effect = filters[idx++ % filters.length];
    if (effect) {
        el.className = effect;
    }
    // Do not propagate the event
    event.stopPropagation();
    event.preventDefault();
}

output.addEventListener('click', changeFilter, false);