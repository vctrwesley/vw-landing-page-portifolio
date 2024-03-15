var container = document.getElementById('container');
var textContainer = document.getElementById('text-container');

function moveText() {
    textContainer.style.transform = 'translateX(' + container.offsetWidth + 'px)';
    textContainer.style.transition = 'transform 12s linear';

    setTimeout(function() {
        textContainer.style.transform = 'translateX(-100%)';
    }, 100);
}

moveText();
setInterval(moveText, 8000); 