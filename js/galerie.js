let images = ["bateau.jpg", "batiment.jpg", "carroussel.jpg", "chevaux.jpg", "dragon.jpg", "ile_de_nantes.jpg", "roue.jpg", "spider.jpg", "tulipe.jpg"];

let photos = document.getElementById("photos");

images.forEach((image) => {
    let div = document.createElement("div");
    div.classList += "img-wrap mx-1 my-1";
    let card = `<img class="img-fluid photo" src="../img/${image}">`;
    div.innerHTML = card;
    photos.appendChild(div);
});