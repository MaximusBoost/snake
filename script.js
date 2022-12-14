'use strict'

let counter = 0 // счетчик для перебора элементов в массиве для еды
let gameField = document.querySelector('#game_field');
let counterScore = 0 // общий счет для игры
let score = document.getElementById('score')

function createTable (size) {
    let table = document.createElement('table');
    let height = gameField.getBoundingClientRect().height;
    let width = gameField.getBoundingClientRect().width;
    let countI = width / size;
    let countJ = height / size;
    

    for(let i = 0; i < countJ; i++) {

        let tr = document.createElement('tr');
        for(let j = 0; j < countI; j++) {
            
            let td = document.createElement('td');
            tr.append(td);
        };

        table.append(tr);
    };

    gameField.append(table);
};
createTable(18);

let tds = document.getElementsByTagName('td') // глобальный перебор всех ячеек
let arrForFood = ['./img/apple.png', './img/carrot.png','./img/cabbage.png','./img/cheese.png','./img/potato.png','./img/watermelon.png']
function random(min, max) {// создание случайного числа в выбранном диапазоне 
    let rand =  (((min - 0.5) + Math.random() * (max - min + 0.5)).toFixed())
    return Math.round(rand)
}

function addFood() {
    let randomCell = random(0, tds.length - 1) // получаем рандомное число в переменную
    let img = document.createElement('img')
    if(counter >= arrForFood.length) { // если счетчик больше чем еды в массиве - обнуляем
        counter = 0
    }
    img.src = arrForFood[counter] // присваем для img путь к i элементу в массиве
    counter++
    tds[randomCell].append(img) // добавляем в случайную ячейку заготовленный img с соответствующей едой
        
}
addFood()

document.addEventListener('click', function(event) { // проверочная функция появления новой еды после ее уничтожения
    let target = event.target.closest('td')
    if(!target) return
    if(!target.lastElementChild) return 
    target.lastElementChild.remove()
    if(counterScore % 50 == 0 && counterScore != 0) {
        createBigFood()
    } else {
        addFood()
    }
    createScore()
})

function createScore() {
    if(counterScore % 50 == 0 && counterScore) {
        counterScore = counterScore + 40
    } else {
        counterScore = counterScore + 10
    }
    score.lastElementChild.textContent = `${counterScore}` 
}

function createBigFood() {
    let randomCell = random(0, tds.length - 1) 
    let img = document.createElement('img')
    img.src = './img/pizza.png'
    img.classList.add('bigFood')
    tds[randomCell].append(img)
}