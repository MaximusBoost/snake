function gameOver(timer) {
    clearInterval(timer);
    setTimeout(() => {
        for(let i = 0; i < TDS.length; i++) {
            if(TDS[i].classList.contains('snake')) {
                TDS[i].classList.remove('snake')
            }
        }
    },100)

    modalWindowForRecordingResult = $.modal(_createModalWindowForRecordingResult);
    modalWindowForRecordingResult.open();
    counterScore = 0;
    score.lastElementChild.textContent = 0;

    document.removeEventListener('keydown', moveBottomSide);
    document.removeEventListener('keydown', moveTopSide);
    document.removeEventListener('keydown', moveLeftSide);
    document.removeEventListener('keydown', moveRightSide);

    let buttonForRecords = document.getElementById('buttonForRecords')
    buttonForRecords.addEventListener('click', function() {
        modalWindowForRecordingResult.close()
        setTimeout( () => {
            recordResult() 
        }, 200)

        setTimeout(() => {
            gameStart()
        })
    })
}

function gameStart() {
    document.addEventListener('keydown', moveBottomSide);
    document.addEventListener('keydown', moveTopSide);
    document.addEventListener('keydown', moveLeftSide);
    document.addEventListener('keydown', moveRightSide);
}

document.addEventListener('click',listenerForClose =  function(event) {
    let target = event.target.dataset.close;
    if(!target) return;
    if(target) {
        if(modalWindowForRecordingResult) {
            modalWindowForRecordingResult.close();
            gameStart();
        } 
    }
})



