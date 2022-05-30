const track = document.querySelector('.carousel_track');

//Vetor dos Slides
const slides = Array.from(track.children);

//Botões de navegação laterais
const nextButton = document.querySelector('.b_carousel--right');
const prevButton = document.querySelector('.b_carousel--left');

//Botões de navegação inferiores
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

//Setando o tamanho dos slides pra serem o mesmo do slide[0]
const slideWidth = slides[0].getBoundingClientRect().width;

//Colocar os Slides do lado um do outro
// slides[0].style.left = slideWidth * 0  + 'px';
// slides[1].style.left = slideWidth * 1  + 'px';
// slides[2].style.left = slideWidth * 2  + 'px';

//Função pra setar posição dos slides ao invés de fazer na mão q nem em cima
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

//Laço pra setar posição dos slides
slides.forEach(setSlidePosition);

//Função pra mover os slides
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')'; //move o slide no eixo X o valor da MOVE
    
    //Seta o slide q mudou pra current slide
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');
}

//Atualizar os indicadores
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current_slide');
    targetDot.classList.add('current_slide');
}

const navButtonHidden = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        nextButton.classList.add('is-hidden');
        prevButton.classList.remove('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

//Click left move left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_slide');
    const prevSlide = currentSlide.previousElementSibling; //slide anterior
    const currentDot = dotsNav.querySelector('.current_slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide)
    
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    navButtonHidden(slides, prevButton, nextButton, prevIndex);
});

//Click right move right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_slide');
    const nextSlide = currentSlide.nextElementSibling; //próximo slide
    const currentDot = dotsNav.querySelector('.current_slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide)

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    navButtonHidden(slides, prevButton, nextButton, nextIndex);
});

dotsNav.addEventListener('click', e => {
    //Qual indicador foi clicado, se b tuver o TARGET.CLOSEST('BUTTON') ele checka a função msm se clicar fora dos botões
    const targetDot = e.target.closest('button');

    //Se clicar fora dos botões o IF para a função ao invés de rodar ela
    if (!targetDot) return;

    const currentSlide = track.querySelector('.current_slide');
    const currentDot = dotsNav.querySelector('.current_slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);

    navButtonHidden(slides, prevButton, nextButton, targetIndex);
});