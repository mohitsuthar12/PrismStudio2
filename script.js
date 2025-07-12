function toggle() {

    const toggleBtn = document.getElementById('toggleBtn');
    const slider = document.getElementById('navMenu');

    toggleBtn.addEventListener('click', () => {
        if (slider.style.width === '250px') {
            slider.style.width = '0';
        }
        else {
            slider.style.width = '250px';
        }
    });
}
function toggleTheme() {
    document.body.classList.toggle("dark-theme");

}
document.addEventListener("DOMContentLoaded", function () {
    let myButton = document.getElementById("myBtn");
    window.onscroll = function () { scrollFunction(); };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            myButton.style.display = "block";
        }
        else {
            myButton.style.display = "none";
        }
    }

});
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

