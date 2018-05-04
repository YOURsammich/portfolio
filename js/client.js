document.getElementsByClassName('toggle-nav')[0].addEventListener('click', function () {
    var nav = document.getElementsByClassName('nav')[0];
    
    nav.classList.toggle('openNav');
});