export class Dropdown {
    constructor(btn, content) {
        this.dropdown = btn
        this.dropdownContent = content

    }

    dropdownClick () {
        $(this.dropdown).children('span').on('click', () => {
            if (!$(this.dropdown).hasClass('active')) {
                this.openDropdown()
            } else {
                this.closeDropdown()
            }
        })
    }

    openDropdown () {
        $(this.dropdown).addClass('active')
        $(this.dropdownContent).slideDown()
    }

    closeDropdown () {
        $(this.dropdown).removeClass('active')
        $(this.dropdownContent).slideUp()
    }

    keyDownEsc () {
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 27)
                this.closeDropdown()
        })
    }

    outClick () {
        $(document).mouseup((e) => {
            let elem = $(this.dropdown)
            if (!elem.is(e.target) && elem.has(e.target).length === 0) {
                this.closeDropdown()
            }
        });
    }
}