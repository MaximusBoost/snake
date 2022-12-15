'use strict'

function createTable (size) {
    let table = document.createElement('table');
    let height = GAME_FIELD.getBoundingClientRect().height;
    let width = GAME_FIELD.getBoundingClientRect().width;
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

    GAME_FIELD.append(table);
};
createTable(18);

console.log(TDS)






