class MobileMenu {
    constructor() {
        this.siteHeader = document.querySelector('.site-header');
        this.menuIcon = document.querySelector('.site-header__menu-icon')
        this.menuContent = document.querySelector('.site-header__menu-content')
        this.menuBtn = document.querySelector('.btn')
        this.events()
    }

    events() {
        this.menuIcon.addEventListener('click', this.toggleTheMenu.bind(this))
    }

    toggleTheMenu() {
        this.menuBtn.classList.toggle('btn--orange')
        this.menuContent.classList.toggle('site-header__menu-content--is-visible')
        this.siteHeader.classList.toggle('site-header--is-expanded')
    }
}

export { MobileMenu as default }