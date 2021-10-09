
const openModalBtn = document.querySelector('.modal-btn');
const closeModalBtn = document.querySelector('.close-btn');
const modalOverlay = document.querySelector('.modal-overlay');

openModalBtn.addEventListener('click', function(){
    modalOverlay.classList.add('open-modal')
})

closeModalBtn.addEventListener('click', function(){
    modalOverlay.classList.remove('open-modal')
})