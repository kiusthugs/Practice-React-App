
export function filterFilmsByDirector(films) {
    let filterDirectors = []
    let directorArr = []
    films.forEach(el => directorArr.push(el.director))
    filterDirectors = directorArr.filter((el, i) => directorArr.indexOf(el) === i)
    return filterDirectors
}

export function getListOf() {

}