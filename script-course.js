const course = document.querySelector('.course');
const profile = document.getElementById('profile');

let setS = () => {
    document.querySelector('.course-image').width = course.offsetWidth - 40;

    document.querySelector('.course-image').width = course.offsetWidth - 40;
}

setS();

window.addEventListener('resize', setS);