const button = document.querySelector('.button');
 button.addEventListener('click',function(e){
    const text = document.querySelector('.text').value;
    const image = document.createElement('img');
    image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    document.querySelector('.result').replaceChildren(image);
 });