function createSnake() {
    let randomizer = random(0,2651)
    TDS[randomizer].classList.add('snake')
    return randomizer
}
let index = createSnake()

function moveSnake(numberSnake) {
    
    let top = false
    let right = false
    let bottom = false
    let left = false
    let timerIdRight
    let timerIdBottom
    let timerIdLeft
    let timerIdTop
    let speed = 100
    let allowed = true
    function checkFood() {
        if(TDS[numberSnake].lastElementChild) {
            TDS[numberSnake].lastElementChild.remove()
            addFood()
            plusScore()
        } 
    }

    // function fixRepeatMove(events) {
    //     if (events.repeat != undefined) {
    //         allowed = !events.repeat;
    //       }
    //       if (!allowed) return;
    //       allowed = false;
    // }
    
    function moveRight() {
            timerIdRight =  setInterval( () => {
            TDS[numberSnake + 1].classList.add('snake')
            TDS[numberSnake].classList.remove('snake')
            numberSnake++
            checkFood()
        }, speed)
    }

    function moveLeft() {
            timerIdLeft = setInterval( () => {
            TDS[numberSnake - 1].classList.add('snake')
            TDS[numberSnake].classList.remove('snake')
            numberSnake--
            checkFood()
        },speed)
    }

    function moveTop() {
            timerIdTop =  setInterval( () => {
            TDS[numberSnake - 78].classList.add('snake')
            TDS[numberSnake].classList.remove('snake')
            numberSnake = numberSnake - 78
            checkFood()
        },speed)
    }

    function moveBottom() {
            timerIdBottom = setInterval( () => {
            TDS[numberSnake + 78].classList.add('snake')
            TDS[numberSnake].classList.remove('snake')
            numberSnake = numberSnake + 78
            checkFood()
        },speed)
    }

    document.addEventListener('keydown', function(event) {
        
        if( event.code.toLowerCase() == 'arrowdown') {


            if(left) {
                clearInterval(timerIdLeft)
                left = false
            }
            if(top) {
                clearInterval(timerIdTop)
                top = false
            }
            if(right) {
                clearInterval(timerIdRight)
                right = false
            }
            if(bottom) {
                clearInterval(timerIdBottom)
            }   
            bottom = true
            moveBottom()
        }
    })

    document.addEventListener('keydown', function (event) {
        if( event.code.toLowerCase() == 'arrowleft') {

            if(bottom) {
                clearInterval(timerIdBottom)
                bottom = false
            }
            if(top) {
                clearInterval(timerIdTop)
                top = false
            }
            if(right) {
                clearInterval(timerIdRight)
                right = false
            }
            if(left) {
                clearInterval(timerIdLeft)
            }
            left = true
            moveLeft()
            
        }
    })

    document.addEventListener('keydown', function (event) {
        if( event.code.toLowerCase() == 'arrowup') {

            if(left) {
                clearInterval(timerIdLeft)
                left = false
            }
            if(bottom) {
                clearInterval(timerIdBottom)
                bottom = false
            }
            if(right) {
                clearInterval(timerIdRight)
                right = false
            }
            if(top) {
                clearInterval(timerIdTop)
            }
            top = true
            moveTop()
            
        }
    })

    document.addEventListener('keydown', function (event) {
        if( event.code.toLowerCase() == 'arrowright') {
            
            if(left) {
                clearInterval(timerIdLeft)
                left = false
            }
            if(top) {
                clearInterval(timerIdTop)
                top = false
            }
            if(bottom) {
                clearInterval(timerIdBottom)
                bottom = false
            }
            if(right) {
                clearInterval(timerIdRight)
            }
            right = true
            moveRight()
            
        }
    })
}
moveSnake(index)