let checkIsLogin = () => {
    if (localStorage.getItem('isLogin') == null) {
        window.location.replace('registration.html');
    }
}

checkIsLogin();
const course = document.querySelector('.course');
const profile = document.getElementById('profile');

let setS = () => {
    document.querySelector('.course-image').width = course.offsetWidth - 40;

    document.querySelector('.course-image').width = course.offsetWidth - 40;
}

setS();

window.addEventListener('resize', setS);

document.getElementById('btn-out').addEventListener('click', function() {
    localStorage.removeItem('isLogin');
    window.location.replace('registration.html');
});