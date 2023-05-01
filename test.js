const openPopUp1 = document.getElementById('open_pop_up1');
const closePopUp1 = document.getElementById('pop_up_close1');

const openPopUp2 = document.getElementById('open_pop_up2');
const closePopUp2 = document.getElementById('pop_up_close2');

const openPopUp3 = document.getElementById('open_pop_up3');
const closePopUp3 = document.getElementById('pop_up_close3');

const openPopUp4 = document.getElementById('open_pop_up4');
const closePopUp4 = document.getElementById('pop_up_close4');

const openPopUp5 = document.getElementById('open_pop_up5');
const closePopUp5 = document.getElementById('pop_up_close5');

const popUp1 = document.getElementById('pop_up1');
const popUp2 = document.getElementById('pop_up2');
const popUp3 = document.getElementById('pop_up3');
const popUp4 = document.getElementById('pop_up4');
const popUp5 = document.getElementById('pop_up5');

openPopUp1.addEventListener('click', function(e){
    e.preventDefault();
    popUp1.classList.add('active');
})
closePopUp1.addEventListener('click',() => {
    popUp1.classList.remove('active');
})

openPopUp2.addEventListener('click', function(e){
    e.preventDefault();
    popUp2.classList.add('active');
})
closePopUp2.addEventListener('click',() => {
    popUp2.classList.remove('active');
})

openPopUp3.addEventListener('click', function(e){
    e.preventDefault();
    popUp3.classList.add('active');
})
closePopUp3.addEventListener('click',() => {
    popUp3.classList.remove('active');
})

openPopUp4.addEventListener('click', function(e){
    e.preventDefault();
    popUp4.classList.add('active');
})
closePopUp4.addEventListener('click',() => {
    popUp4.classList.remove('active');
})

openPopUp5.addEventListener('click', function(e){
    e.preventDefault();
    popUp5.classList.add('active');
})
closePopUp5.addEventListener('click',() => {
    popUp5.classList.remove('active');
})