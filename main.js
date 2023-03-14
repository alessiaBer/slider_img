/* create a slide show of img, when the user press the next btn, slide to the next img, when the user press the prev btn slide to the revious img */

const imgArray = [
    'https://www.themoviedb.org/t/p/original/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
    'https://www.themoviedb.org/t/p/original/AhifyrSNkRVFMJ94CEMfBv1FaMz.jpg',
    'https://www.themoviedb.org/t/p/original/1xO2UnWyxoyTrdvVDXW276LaHQc.jpg',
    'https://www.themoviedb.org/t/p/original/9VdgIj9R9Z9dfDoO76v57V6FF6y.jpg'
];


//select the active img
let activeImg = 0;

//select the imgs dom el where place all imgs
const imagesElement = document.querySelector('.slider > .images')
console.log(imagesElement);

// passo per la lunghezza dell'array imgArray assegnando alla variabile imgSrc l'img per ogni i 
for (let i = 0; i < imgArray.length; i++) {
    const imgSrc = imgArray[i];
    const imgElement = `<img class="img-fluid ${i === activeImg ? 'active' : ''}" src="${imgSrc}" alt="">`

    console.log(imgElement);

    //inserisco l'elemento imgElement nel DOM beforeend del dell'elemento .images del DOM
    imagesElement.insertAdjacentHTML('beforeend', imgElement);


    /* altri modi per inserire l'elemento imgElement nel DOM
    // con .innerHTML
    imagesElement.innerHTML += imgElement;

    //con .createElement()
    const imgEl = document.createElement('img')
    imgEl.setAttribute('src', imgSrc);
    imgEl.setAttribute('class', `img-fluid ${i === activeImg ? 'active' : ''}`)
    imagesElement.append(imgEl) */
}
// seleziono tutte le slide
const slideImagesElement = document.querySelectorAll('.slider > .images > img')

//listen for click on next btn
const nextEl = document.querySelector('.next');
nextEl.addEventListener('click', function () {
    console.log('click next');

    
    console.log(slideImagesElement)
    // seleziono la slide corrente
    const currentSlide = slideImagesElement[activeImg]; //seleziono l'indice della img attiva
    console.log(currentSlide)
    // rimuovo dalla slide corrente la classe active
    currentSlide.classList.remove('active');
    //incremento il valore della variabile activeImg ogni volta che clicco su next
    activeImg++;
    //seleziono la prossima slide
    console.log(activeImg);
    const nextImage = slideImagesElement[activeImg];
    //le applico la class active
    console.log(nextImage);
    nextImage.classList.add('active')
})

//listen for click on prev btn
const prevEl = document.querySelector('.prev');
prevEl.addEventListener('click', function () {
    console.log('click prev')

    console.log(slideImagesElement);
    // seleziono la slide corrente
    const currentSlide = slideImagesElement[activeImg]; //seleziono l'indice della img attiva
    console.log(currentSlide)
    // rimuovo dalla slide corrente la classe active
    currentSlide.classList.remove('active');
    //incremento il valore della variabile activeImg ogni volta che clicco su next
    activeImg--;
    //seleziono la prossima slide
    console.log(activeImg);
    const nextImage = slideImagesElement[activeImg];
    //le applico la class active
    console.log(nextImage);
    nextImage.classList.add('active')
})