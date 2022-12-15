'use strict'
let counter = 0 // счетчик для перебора элементов в массиве для еды
let counterScore = 0 // общий счет для игры
let score = document.getElementById('score')

let arrForFood = ['./components/FoodAndScore/img/apple.png', './components/FoodAndScore/img/cabbage.png',
'./components/FoodAndScore/img/carrot.png','./components/FoodAndScore/img/cheese.png',
'./components/FoodAndScore/img/potato.png','./components/FoodAndScore/img/watermelon.png']
function random(min, max) {// создание случайного числа в выбранном диапазоне 
    let rand =  (((min - 0.5) + Math.random() * (max - min + 0.5)).toFixed())
    return Math.round(rand)
}

function addFood() {
    let randomCell = random(0, TDS.length - 1) // получаем рандомное число в переменную
    let img = document.createElement('img')
    if(counter >= arrForFood.length) { // если счетчик больше чем еды в массиве - обнуляем
        counter = 0
    }
    img.src = arrForFood[counter] // присваем для img путь к i элементу в массиве
    counter++
    TDS[randomCell].append(img) // добавляем в случайную ячейку заготовленный img с соответствующей едой
        
}
addFood()

document.addEventListener('click', function(event) { // проверочная функция появления новой еды после ее уничтожения
    let target = event.target.closest('td')
    if(!target) return
    if(!target.lastElementChild) return 
    target.lastElementChild.remove()
    addFood()
    plusScore()
})

function plusScore() {
    counterScore = counterScore + 1
    score.lastElementChild.textContent = `${counterScore}` 
}

// function createBigFood() {
//     let randomCell = random(0, TDS.length - 1) 
//     let img = document.createElement('img')
//     img.src = './img/pizza.png'
//     img.classList.add('bigFood')
//     TDS[randomCell].append(img)
// }