import waypoints from'../../../../node_modules/waypoints/lib/noframework.waypoints'
import smoothScroll from 'smoothscroll'

class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector('.site-header')
        this.headerTriggerElement = document.querySelector('.large-hero__title')
        this.menuBtn = document.querySelector('.btn')
        this.createHeaderWaypoint()
        this.pageSections = document.querySelectorAll('.page-section')
        this.headerLinks = document.querySelectorAll('.primary-nav a')
        this.createPageSectionWaypoints()
    }

    createHeaderWaypoint() {
        new Waypoint({
            element: this.headerTriggerElement,
            handler: (direction) => {
                if (direction === 'down') {
                    this.siteHeader.classList.add('site-header--dark')
                    this.menuBtn.classList.add('btn--orange')
                } else {
                    this.siteHeader.classList.remove('site-header--dark')
                    this.menuBtn.classList.remove('btn--orange')

                }
            }
        })
    }

    createPageSectionWaypoints() {
        this.pageSections.forEach(pageSection => {
            new Waypoint({
                element: pageSection,
                handler: (direction) => {
                    if (direction === 'down') {
                        let matchingHeaderLink = pageSection.getAttribute('data-matching-link')

                        this.headerLinks.forEach(link => {
                            link.classList.remove('is-current-link')
                        })

                        document.querySelector(matchingHeaderLink).classList.add('is-current-link')
                    }
                },
                offset: '18%'
            })

            new Waypoint({
                element: pageSection,
                handler: (direction) => {
                    if (direction === 'up') {
                        let matchingHeaderLink = pageSection.getAttribute('data-matching-link')

                        this.headerLinks.forEach(link => {
                            link.classList.remove('is-current-link')
                        })

                        document.querySelector(matchingHeaderLink).classList.add('is-current-link')
                    }
                },
                offset: '-40%'
            })
        })
    }
}

export { StickyHeader as default }