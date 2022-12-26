function createSnake() {
    let randomizer = random(0,2651)
    TDS[randomizer].classList.add('snake')
    return randomizer
}
let index = createSnake()

function moveSnake(numberSnake) {
    
    let top = false;
    let right = false;
    let bottom = false;
    let left = false;
    let timerIdRight;
    let timerIdBottom;
    let timerIdLeft;
    let timerIdTop;
    let speed = 100;

    let arrWithTds = [];

    function checkFood() {
        if(TDS[numberSnake].lastElementChild) {
            TDS[numberSnake].lastElementChild.remove();
            addFood();
            plusScore();
        };
    };

    
    function moveRight() {
            timerIdRight =  setInterval( () => {
            if(numberSnake%78 == 77) {
                if(TDS[numberSnake]) TDS[numberSnake].classList.remove('snake');
                numberSnake -= 78;
            };



            if(counterScore) {

                if(TDS[numberSnake + 1]) {
                    TDS[numberSnake + 1].classList.add('snake');
                    arrWithTds.push( TDS[numberSnake + 1] );
                };

                setTimeout( () => {
                    arrWithTds[0].classList.remove('snake');
                    arrWithTds.splice(0, 1);
                }, speed * (counterScore + 1) );

            } else {
                if(TDS[numberSnake + 1]) TDS[numberSnake + 1].classList.add('snake');
                if(TDS[numberSnake]) TDS[numberSnake].classList.remove('snake');
            };
            // if(counterScore) increaseSnake(counterScore, 'right', numberSnake);
            numberSnake++;
            checkFood();
            console.log('---------');
        }, speed);
    }

    function moveLeft() {
            timerIdLeft = setInterval( () => {
                if(numberSnake%78 == 0) {
                if(TDS[numberSnake]) TDS[numberSnake].classList.remove('snake');
                numberSnake += 78;
            };

            if(TDS[numberSnake]) TDS[numberSnake - 1].classList.add('snake');
            // if(TDS[numberSnake]) TDS[numberSnake].classList.remove('snake');

            if(counterScore) {

                if(TDS[numberSnake - 1]) {
                    TDS[numberSnake - 1].classList.add('snake');
                    arrWithTds.push( TDS[numberSnake - 1] );
                };

                setTimeout( () => {
                    arrWithTds[0].classList.remove('snake');
                    arrWithTds.splice(0, 1);
                }, speed * (counterScore + 1) );

            } else {
                if(TDS[numberSnake]) TDS[numberSnake - 1].classList.add('snake');
                if(TDS[numberSnake]) TDS[numberSnake].classList.remove('snake');
            }

            numberSnake--;
            checkFood();
        },speed);
    }

    function moveTop() {
            timerIdTop =  setInterval( () => {
            if(numberSnake < 78) {
                TDS[numberSnake].classList.remove('snake');
                let num = 2652;
                numberSnake += num;
            }

            TDS[numberSnake - 78].classList.add('snake');
            // if (TDS[numberSnake]) TDS[numberSnake].classList.remove('snake');

            if(counterScore) {
                
                if(TDS[numberSnake - 78]) {
                    TDS[numberSnake - 78].classList.add('snake');
                    arrWithTds.push( TDS[numberSnake - 78] );
                };

                setTimeout( () => {
                    arrWithTds[0].classList.remove('snake');
                    arrWithTds.splice(0, 1);
                }, speed * (counterScore + 1) );

                if(TDS[numberSnake + 78*+counterScore]) TDS[numberSnake + 78*+counterScore].classList.remove('snake');
            } else {
                TDS[numberSnake - 78].classList.add('snake');
                if(TDS[numberSnake]) TDS[numberSnake].classList.remove('snake');
            }

            numberSnake = numberSnake - 78;
            checkFood();
        },speed);
    }

    function moveBottom() {

            timerIdBottom = setInterval( () => {
            if(numberSnake >= 2574) {
                TDS[numberSnake].classList.remove('snake');
                let num = 2652;
                numberSnake -= num;
            }

            TDS[numberSnake + 78].classList.add('snake');
            // if(TDS[numberSnake]) TDS[numberSnake].classList.remove('snake');

            if(counterScore) {
                
                if(TDS[numberSnake + 78]) {
                    TDS[numberSnake + 78].classList.add('snake');
                    arrWithTds.push( TDS[numberSnake + 78] );
                };

                setTimeout( () => {
                    arrWithTds[0].classList.remove('snake');
                    arrWithTds.splice(0, 1);
                }, speed * (counterScore + 1) );

            } else {
                TDS[numberSnake + 78].classList.add('snake');
                if(TDS[numberSnake]) TDS[numberSnake].classList.remove('snake');
            }

            numberSnake = numberSnake + 78;
            checkFood();
        },speed);
    }

    document.addEventListener('keydown', function(event) {
        if( event.code.toLowerCase() == 'arrowdown') {
            if (event.repeat == true) return;

            if(left) {
                clearInterval(timerIdLeft);
                left = false;
            }
            if(top) {
                clearInterval(timerIdTop);
                top = false;
            }
            if(right) {
                clearInterval(timerIdRight);
                right = false;
            }
            if(bottom) {
                clearInterval(timerIdBottom);
            }   
            bottom = true;
            moveBottom();
        }
    })

    document.addEventListener('keydown', function (event) {
        if( event.code.toLowerCase() == 'arrowleft') {
            if (event.repeat == true) return;

            if(bottom) {
                clearInterval(timerIdBottom);
                bottom = false;
            }
            if(top) {
                clearInterval(timerIdTop);
                top = false;
            }
            if(right) {
                clearInterval(timerIdRight);
                right = false;
            }
            if(left) {
                clearInterval(timerIdLeft);
            }
            left = true;
            moveLeft();
            
        }
    })

    document.addEventListener('keydown', function (event) {
        if( event.code.toLowerCase() == 'arrowup') {
            if (event.repeat == true) return;

            if(left) {
                clearInterval(timerIdLeft);
                left = false;
            }
            if(bottom) {
                clearInterval(timerIdBottom);
                bottom = false;
            }
            if(right) {
                clearInterval(timerIdRight);
                right = false;
            }
            if(top) {
                clearInterval(timerIdTop);
            }
            top = true;
            moveTop();
            
        }
    })

    document.addEventListener('keydown', function (event) {
        if( event.code.toLowerCase() == 'arrowright') {
            if (event.repeat == true) return;

            if(left) {
                clearInterval(timerIdLeft);
                left = false;
            }
            if(top) {
                clearInterval(timerIdTop);
                top = false;
            }
            if(bottom) {
                clearInterval(timerIdBottom);
                bottom = false;
            }
            if(right) {
                clearInterval(timerIdRight);
            }
            right = true;
            moveRight();
            
        }
    })
}
moveSnake(index);

// 
// function moveRight() {
//     timerIdRight =  setInterval( () => {
//     if(numberSnake%78 == 77) {
//         if(TDS[numberSnake]) TDS[numberSnake].classList.remove('snake');
//         numberSnake -= 78;
//     };



//     if(counterScore) {

//         if(TDS[numberSnake + 1]) {
//             TDS[numberSnake + 1].classList.add('snake');
//             arrWithTds.push( TDS[numberSnake + 1] );
//         };

//         setTimeout( () => {
//             arrWithTds[0].classList.remove('snake');
//             arrWithTds.splice(0, 1);
//         }, speed * counterScore++ );
        
//     } else {
//         if(TDS[numberSnake + 1]) TDS[numberSnake + 1].classList.add('snake');
//         if(TDS[numberSnake]) TDS[numberSnake].classList.remove('snake');
//     };
//     // if(counterScore) increaseSnake(counterScore, 'right', numberSnake);
//     numberSnake++;
//     checkFood();
//     console.log('---------');
// }, speed);
// }