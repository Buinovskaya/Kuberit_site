const scroll = document.querySelector('.btn__connect[data-goto]');
scroll.addEventListener('click', toFeedback);

function toFeedback(event){
    
    const btnConnect = event.target;
    if(btnConnect.dataset.goto && document.querySelector(btnConnect.dataset.goto)){
        const gotoFeedback = document.querySelector(btnConnect.dataset.goto);
        const gotoFeedbackValue = gotoFeedback.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__top').offsetHeight;

        window.scrollTo({
            top: gotoFeedbackValue,
            behavior: 'smooth'
        });
    }
    event.preventDefault();
}