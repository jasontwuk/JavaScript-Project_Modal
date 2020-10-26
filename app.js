// set const
const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

// set event
// when user clicks modal-btn add .open-modal to modal-overlay
modalBtn.addEventListener('click', function(){
    modalOverlay.classList.add('open-modal');
});

// when user clicks close-btn remove .open-modal from modal-overlay
closeBtn.addEventListener('click', function(){
    modalOverlay.classList.remove('open-modal');
});

// when user clicks area that outside modal remove .open-modal from modal-overlay
modalOverlay.addEventListener('click', function(e){
    // console.log(e.target);
    if(e.target == modalOverlay){
        modalOverlay.classList.remove('open-modal');
    }
});