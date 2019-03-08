let images = [];

let modal = document.getElementById('modal');
let photos = document.getElementById('photos');
let img = document.getElementById('myImg');
let modalImg = document.getElementById('img01');
let span = document.getElementsByClassName('close')[0];


// FETCH //

fetch('./img/gallery/')
    .then(res => {
        return res.text();
    })
    .then(html => {
        let parser = new DOMParser();
        let doc = parser.parseFromString(html, 'text/html');
        let a = doc.querySelectorAll('a');
        a.forEach(image => {
            if (image.href.includes('.jpg') || image.href.includes('.png')) {
                let linkArray = image.href.split('/');
                let link = linkArray[(linkArray.length) - 1];
                images.push(link);
            };
        });
    })
    .then(() => {
        generateGallery();
    })
    .catch(err => {
        console.log('fetch error', err);
    });


// GENERATES GALLERY //

function generateGallery() {
    images.forEach(image => {
        let div = document.createElement('div');
        div.classList += 'img-wrap mx-2 my-2';
        let img = `<img class='img-fluid photo' id='${image}' src='./img/${image}'>`;
        div.innerHTML = img;
        photos.appendChild(div);
    });
    
    
    //  CREATES MODAL //
    
    let galerie = document.querySelectorAll('.photo');
    
    galerie.forEach(image => {
        image.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = `./img/${image.id}`;
        });
    });
    
    span.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}
