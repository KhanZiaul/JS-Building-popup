const button = document.querySelector('button');

const popup = document.querySelector('.popup-wrapper');

const close = document.querySelector('.close');

button.addEventListener('click', function(){
    popup.style.display = 'block';
});

close.addEventListener('click', function(){
    popup.style.display = 'none';
});

popup.addEventListener('click', function(){
    popup.style.display = 'none';
});