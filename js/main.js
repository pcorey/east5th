function buildControlClickHandler(tab) {
    return function(e) {
        document.getElementsByClassName('active control')[0].className = 'control';
        e.target.className = 'active control';
    };
}

var controls = document.getElementsByClassName('control');
for (var i = 0; i < controls.length; i++) {
    var control = controls[i];
    var tab = control.getAttribute('data-tab');
    control.onclick = buildControlClickHandler(tab);
}