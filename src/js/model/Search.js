export class Search {
    constructor(showBtn, hideBtn, container) {
        this.showBtn = showBtn
        this.hideBtn = hideBtn
        this.container = container
    }

    keydownEsc () {
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 27)
                this.hideSearch()
        })
    }

    outClick () {
        $(document).mouseup((e) => {
            let elem = $(this.container)
            if (!elem.is(e.target) && elem.has(e.target).length === 0) {
                $(this.container).slideUp()
            }
        });
    }

    openBtn () {
        $(this.showBtn).on('click', () => {
            this.showSearch()
        })
    }

    closeBtn () {
        $(this.hideBtn).on('click', () => {
            this.hideSearch()
        })
    }

    showSearch() {
        $(this.container).slideDown()
        $(this.container).find('input').focus()
    }

    hideSearch() {
        $(this.container).slideUp()
    }
}