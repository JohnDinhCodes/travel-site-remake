import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'

class RevealOnScroll {
    constructor(els, offset) {
        this.itemsToReveal = els
        this.offsetPercentage = offset
        this.hideInitially()
        this.createWaypoints()
    }

    hideInitially() {
        this.itemsToReveal.forEach(item => {
            item.classList.add('reveal-item')
        })
    }

    createWaypoints() {
        this.itemsToReveal.forEach(item => {
            new Waypoint({
                element: item,
                handler: () => {
                    item.classList.add('reveal-item--is-visible')
                },
                offset: this.offsetPercentage
            })
        })
    }

}

export { RevealOnScroll as default}