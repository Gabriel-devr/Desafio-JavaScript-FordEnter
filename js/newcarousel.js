const images = [
    {'url':'img/imagem_1.jpg','p':'Essa  é a nova Ranger 2022. Verifique novidades'},
    {'url':'img/imagem_2.jpg', 'p':'Ford, a nossa historia'},
    {'url':'img/imagem_3.jpg', 'p':'Nova ford bronco sport 2022'},
]

const container = document.querySelector('#carousel-track')
const previousButton = document.querySelector('#prev-button')
const nextButton = document.querySelector('#next-button')
let interval = setInterval(next,3500)

function loadImages(images, container) {
    images.forEach(image => {
        container.innerHTML+=`
            <div class="carousel-item">
                <a href="lancamento.html"><img src="${image.url}" alt=""></a>
                <p>${image.p}</p>
            </div>
        `
    });
}

loadImages(images,container)
let items = document.querySelectorAll('.carousel-item')

function next() {
    clearInterval(interval)
    container.appendChild(items[0]);
    items = document.querySelectorAll('.carousel-item')
    interval = setInterval(next, 3500)
}

function prev() {
    clearInterval(interval)
    const lastItem = items[items.length - 1]
    container.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.carousel-item')
    interval = setInterval(next, 3500)
    
}

nextButton.addEventListener('click', next)
previousButton.addEventListener('click',prev )

