let images = ["bateau.jpg", "batiment.jpg", "carroussel.jpg", "chevaux.jpg", "dragon.jpg", "ile_de_nantes.jpg", "roue.jpg", "spider.jpg", "tulipe.jpg"];

let modal = document.getElementById("modal");
let photos = document.getElementById("photos");
let img = document.getElementById('myImg');
let modalImg = document.getElementById("img01");
let span = document.getElementsByClassName("close")[0];

images.forEach(image => {
    let div = document.createElement("div");
    div.classList += "img-wrap mx-1 my-1";
    let card = `<img class="img-fluid photo" id="${image}" src="../img/${image}">`;
    div.innerHTML = card;
    photos.appendChild(div);
});

let galerie = document.querySelectorAll(".photo");

galerie.forEach(image => {
    image.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = `../img/${image.id}`;
    });
});

span.addEventListener("click", () => {
    modal.style.display = "none";
});