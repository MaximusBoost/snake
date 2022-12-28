function gameOver(timer) {
    clearInterval(timer);
    alert('game over')
    counterScore = 0
    score.lastElementChild.textContent = 0
    setTimeout(() => {
        for(let i = 0; i < TDS.length; i++) {
            if(TDS[i].classList.contains('snake')) {
                TDS[i].classList.remove('snake')
            }
        }
    },100)
}