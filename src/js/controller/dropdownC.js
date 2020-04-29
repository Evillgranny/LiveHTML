import { Dropdown } from "../model/Dropdown"


export let choseCityDD = new Dropdown('.change-city-btn', '.cites-container')

choseCityDD.dropdownClick()
choseCityDD.outClick()
choseCityDD.keyDownEsc()