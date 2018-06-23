class Modal {
    constructor() {
        this.openModalButton = document.querySelectorAll('.open-modal')
        this.modal = document.querySelector('.modal')
        this.closeModalButton = document.querySelector('.modal__close')
        this.events()
    }

    events() {
        this.openModalButton.forEach(btn => {
            btn.addEventListener('click', this.openModal.bind(this))
        })
        this.closeModalButton.addEventListener('click', this.closeModal.bind(this))
        window.addEventListener('keyup', this.keyPressHandler.bind(this))
    }

    keyPressHandler(e) {
        if (e.keyCode === 27) {
            this.closeModal()
        }
    }

    openModal(e) {
        e.preventDefault()
        this.modal.classList.add('modal--is-visible')
    }

    closeModal() {
        this.modal.classList.remove('modal--is-visible')
    }
}

export { Modal as default }