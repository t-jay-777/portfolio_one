//select sections
const section = document.querySelectorAll('.section');
//select btn parents element
const sectBtns = document.querySelector('.controlls');
//select buttons
const sectBtn = document.querySelector('.control');
//select main content
const allSelections = document.querySelectorAll('.main-content');

function PageTransitions() {
    //button click on active class
    for (let i = 0; i < sectBtn.length; i+=1) {
        //catch click on a button and apply a function for the button
        sectBtn[i].addEventListener('click', () => {
            //chaice buttons with a class active-btn
            let currentBtn = document.querySelectorAll('.active-btn');
            //when I dont click button it replace on empty string
            currentBtn[0].classList = currentBtn[0].className.replace('active-btn', '');
            //this refers to addEventListener function
            this.className += ' active-btn';     
        });
    }
}

console.log(section);
