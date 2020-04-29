export class ChooseCity {
    constructor(currentCity, clickCity) {
        this.currentCity = currentCity
        this.clickCity = clickCity
    }

    chooseCity () {
        $(this.clickCity).on('click', (e) => {
            $(this.currentCity).text($(e.target).text())
        })
    }
}