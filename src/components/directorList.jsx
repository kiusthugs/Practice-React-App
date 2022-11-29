import React from "react"

export function DirectorList(props) {
    let directorMovieList = []
    props.movies.forEach(el => {
        if (el.director === props.director) {
            directorMovieList.push(el)
        }
    })
    return (<ul>{directorMovieList.map(el => {
        let count = 0
        return <li key={el.id}>{el.title}</li>
    })}</ul>)
}