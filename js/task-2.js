const images = [
    {
        url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
        alt: "White and Black Long Fur Cat",
    },
    {
        url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
        alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
        url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
        alt: "Group of Horses Running",
    },
];

const gallery = document.querySelector(".gallery");
const fragment = document.createDocumentFragment();

for (let i = 0; i < images.length; i++) {
    const liElement = document.createElement("li");
    liElement.classList.add("gallery-item");

    const imgElement = document.createElement("img");
    imgElement.src = images[i].url;
    imgElement.alt = images[i].alt;
    imgElement.classList.add("gallery-item-image");

    liElement.append(imgElement);
    fragment.append(liElement);
}

gallery.append(fragment);
