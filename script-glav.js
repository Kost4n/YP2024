const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

const sliders = [
    {
        'img': 'images/image1.png',
        'text': 'Управление квадракоптерами требует понимания принципов аэродинамики и технической специфики дронов для достижения стабильного полета'
    }, 
    {
        'img': 'images/image2.png',
        'text': 'Обучение управлению квадракоптерами поможет развить навыки координации, реакции и принятия быстрых решений во время полета'
    },
    {
        'img': 'images/image3.png',
        'text': 'Понимание программного обеспечения и дистанционного управления является ключевым при обучении управлению квадракоптерами'
    },
    {
        'img': 'images/image4.png',
        'text': 'Изучение безопасности полетов, правил воздушного движения и аварийных ситуаций неотъемлемая часть обучения управлению квадракоптерами'
    },
    {
        'img': 'images/image1.png',
        'text': 'Управление квадракоптерами требует понимания принципов аэродинамики и технической специфики дронов для достижения стабильного полета'
    },
]

let showSlide = (numberSlide1, numberSlide2) => {
    const slide1 = document.getElementById('slide1');
    const slide2 = document.getElementById('slide2');
    const slide1text = document.getElementById('sl-tx1');
    const slide2text = document.getElementById('sl-tx2');
    slide1.src = sliders[numberSlide1].img;
    slide2.src = sliders[numberSlide2].img;
    slide1text.innerHTML = sliders[numberSlide1].text;
    slide2text.innerHTML = sliders[numberSlide2].text;
}

function showNextSlide() {
    if (currentSlide + 1 >= sliders.length || currentSlide + 2 >= sliders.length) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    showSlide(currentSlide, currentSlide + 1)
}

function showPrevSlide() {
    if (currentSlide - 1 <= 0 || currentSlide + 2 <= 0) {
        currentSlide = sliders.length - 1;
    } else {
        currentSlide--;
    }
    showSlide(currentSlide - 1, currentSlide);
}

function adjustSlider() {
    const sliderWidth = slider.offsetWidth;
    const slide1 = slides[0];
    const slide2 = slides[1];
    if (sliderWidth < 769) {
        slide1.style.width = '100%';
        slide2.style.width = '0';
        slide2.style.visibility = 'hidden';
        document.querySelector('.slides').style.display = 'block';
    } else {
        slide1.style.width = '50%';
        slide2.style.width = '50%';
        slide2.style.visibility = 'visible';
        document.querySelector('.slides').style.display = 'flex';
    }
}

adjustSlider();
showSlide(currentSlide, currentSlide + 1);

prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);

window.addEventListener('resize', adjustSlider);
const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.1)';
        });

        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });
