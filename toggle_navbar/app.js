
const navToggleBtn = document.querySelector('.nav-toggle');
const links = document.querySelector('.links')

navToggleBtn.addEventListener('click', function(){
    // 1st solution to add class manually

    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links')
    // } else {
    //     links.classList.add('show-links')
    // }

    // 2nd solution to add in one line
    links.classList.toggle('show-links')
})