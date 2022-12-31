function recordResult() {

    modalWindowForConfirm.open()  // открытие подтверждающего окна

    setTimeout(() => {
        modalWindowForConfirm.close() // его закрытие через 1.5 с
        setTimeout(() => { // затем его удаление дабы не засорять DOM
            modalWindowForConfirm.destroy()
        }, 200);
    },1500)
}

