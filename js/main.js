//text
const input = document.querySelector('.text__input')
const inputValue = document.querySelector('.text__value')
const inputLength = document.querySelector('.text__length')
const inputError = document.querySelector('.text__error')

input.oninput = () => {
    inputValue.innerText ='вы ввели : ' + input.value;
    inputLength.innerText = 'количество символов : '+ input.value.length;
    if(input.value.length == 25){
        inputError.innerText = 'вы ввели максимальное количество символов'
        inputError.classList.add('margin')
    }else{
        inputError.innerText = ''
        inputError.classList.remove('margin')
    
    }    
}
//modal window

const modalBtn = document.querySelector('.modal__btn')
const modalWindow = document.querySelector('.window')
const modalRemoveBtn = document.querySelector('.window__button');
modalBtn.onclick = () => {
    modalWindow.classList.add('active')
   }
modalRemoveBtn.onclick = () => {
 modalWindow.classList.remove('active')
}

//checkbox
const checkBtn = document.querySelector('.check__btn')
const checkBtn2 = document.querySelector('.check__btn2')
const checkBtn3 = document.querySelector('.check__btn3')
const checkChoose = document.querySelector('.check__choose')
checkBtn.addEventListener('click', () =>{
        checkChoose.innerText = 'Ягодные культуры содержат пектины, которые производят синтез нужных для организма веществ, возвращают в норму холестерин, защищают от негативного воздействия радиации, улучшают обмен веществ. Ягоды перестали быть сезонным лакомством, теперь их можно потреблять в пищу круглый год.'
}) 
checkBtn2.addEventListener('click', () =>{
    checkChoose.innerText = 'Фрукты являются ценным источником витаминов, клетчатки и минеральных веществ , таких как антиоксиданты – бета -каротин (витамина А) и витамин С, которые защищают клетки от старения и болезней. Фрукты по своим вкусовым качествам и содержанием кислоты можно разделить на кислые, полукислые, сладкие и нейтральные.'
}) 
checkBtn3.addEventListener('click', () =>{
    checkChoose.innerText = 'Овощи – действительно кладезь витаминов и минералов. Они богаты кальцием, магнием, железом, цинком и витаминами А, С, Е и К. Витамины являются биокатализаторами многих биохимических реакций, протекающих в организме. При нехватке витамина А страдает зрение, иммунитет, ухудшается состояние кожи, ногтей и волос.'
}) 
//prompt


const promptBtn = document.querySelector('.prompt__ask')
const promptResult = document.querySelector('.prompt__result')
let age = () => age = prompt('введите свой возраст')
promptBtn.addEventListener('click', ()=>{
    age()
    if( age > 18 && age < 60) {
		promptResult.innerText = "результат : проверка была завершена успешно";
	}
	else if(age < 18 && age > 0) {
		promptResult.innerText = "результат : вы не прошли проверку";
	}	
	else if(age > 60) {
		promptResult.innerText = 'результат : ваша карточка устарела';
	} 
	else if(age == 0 || age < 0) {
		promptResult.innerText = 'результат : ты еще не родился';
	}	
	else {
		promptResult.innerText = ' результат :введите пожалуйста цифры';
	}
})

//tabs

const tabBtns = document.querySelector('.tabs__buttons');
const tabBtn = document.querySelector('.tabs__button');
const tabInfo = document.querySelector('.tabs__info');

tabBtns.onclick = () => {
    tabInfo.innerText = ' CSS — Cascading Style Sheets — это каскадные таблицы стилей. По сути — язык, который отвечает за описание внешнего вида HTML-документа. Подавляющее большинство современных веб-сайтов работают на основе связки HTML+CSS.CSS позволяет отформатировать его, сделать более привлекательным для читателя. Изначально веб-разработчики использовали исключительно HTML — так было на заре развития интернет-технологий.'
}
tabBtn.onclick = () => {
    tabInfo.innerText = 'HTML — стандартизированный язык разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код в интерфейс, который будет отображаться на экране монитора.'
}


//slider

let sliderCount = 0;
const sliderNext = document.querySelector('.slider__next');
const sliderPrev = document.querySelector('.slider__prev');
const sliderImages = document.querySelector('.slider__line');
sliderNext.addEventListener('click', () => {
    sliderCount = sliderCount + 200
    if(sliderCount > 400){
        sliderCount = 0
    }
    sliderImages.style.left = -sliderCount + 'px'   
})
sliderPrev.addEventListener('click',() => {
    sliderCount = sliderCount - 200
    if(sliderCount < 0){
        sliderCount = 400
    }
    sliderImages.style.left = -sliderCount + 'px'
})

//collapse

const collapseInfo = document.querySelectorAll('.collapse__info')
const collapseButton = document.querySelectorAll('.collapse__button')

for(let i = 0 ; i < collapseButton.length ; i++){
    collapseButton[i].addEventListener('click',() => {
        collapseInfo[i].classList.toggle('block')
    })    
}

//burger
const burgerLine = document.querySelector('.burger__lines')
const burger = document.querySelector('.burger__table')
burger.addEventListener('click', () =>{
    burger.classList.toggle('burger-active')
})


//siderbar

const sideBarSide = document.querySelector('.sidebar__content');
const sideBarBtn = document.querySelector('.sidebar__open');
sideBarBtn.onclick = () => sideBarSide.classList.toggle('sidebar__close')

//own carousel 
let carouselCount = 0;
const carouselDots = document.querySelector('.carousel__change');
const carouselDots2 = document.querySelector('.carousel__change2');
const carouselDots3 = document.querySelector('.carousel__change3');
const carouselNext = document.querySelector('.carousel__next');
const carouselPrev = document.querySelector('.carousel__prev');
const carouselImages = document.querySelector('.carousel__line');
carouselNext.addEventListener('click', () => {
    carouselCount = carouselCount + 200
    if(carouselCount > 400){
        carouselCount = 0
    }
    carouselImages.style.left = -carouselCount + 'px'   
})
carouselPrev.addEventListener('click',() => {
    carouselCount = carouselCount - 200
    if(carouselCount < 0){
        carouselCount = 400
    }
    carouselImages.style.left = -carouselCount + 'px'
})
carouselDots.addEventListener('click', () => {
    carouselImages.style.left = 0 + 'px' 
})
carouselDots2.addEventListener('click', () => {
    carouselImages.style.left = -200 + 'px' 
})
carouselDots3.addEventListener('click', () => {
    carouselImages.style.left = -400 + 'px' 
})

//light verse
const lightVerse = document.querySelector('.light-verse')
const blackVerse = document.querySelector('.black')
lightVerse.addEventListener('click',()=>{
    blackVerse.classList.toggle('light')
})



