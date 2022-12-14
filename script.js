'use strict'

let gameField = document.querySelector('#game_field');

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