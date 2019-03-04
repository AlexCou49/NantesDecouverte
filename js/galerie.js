let images = ["bateau.jpg", "batiment.jpg", "carroussel.jpg", "chevaux.jpg", "dragon.jpg", "ile_de_nantes.jpg", "roue.jpg", "spider.jpg", "tulipe.jpg"];

let photos = document.getElementById("photos");

images.forEach((image) => {
    let div = document.createElement("div");
    let card = `<div class="card my-2" style="width: 18rem;"><img class="card-img-top" style="background-size: cover;" src="../img/${image}"></div>`;
    div.innerHTML = card;
    photos.appendChild(div);
});

