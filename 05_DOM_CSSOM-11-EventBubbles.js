
const img = document.querySelector('img');

document.body.onclick = event =>
    console.log('bodyclick');

document.body.onclick = null; // remove the event handler

img.onclick = event => {
    event.stopPropagation(); // burst the bubble
    event.preventDefault();  // for submit buttons
    console.log('imageclick');
}

const handler = event => console.log('imageclick3');

img.addEventListener( 'click', event => console.log('imageclick1') );
img.addEventListener( 'click', event => console.log('imageclick2') );
img.addEventListener( 'click', handler );
img.removeEventListener( 'click', handler );