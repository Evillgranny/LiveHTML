import { Search } from "../model/Search"

export let search = new Search('.menu-search-btn', '.search-cross', '.search-block')
search.openBtn()
search.closeBtn()
search.keydownEsc()
search.outClick()