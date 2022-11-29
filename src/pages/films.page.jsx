import React, {Component, useState, useEffect} from "react"
import { filterFilmsByDirector } from "../helpers/film.helpers.js"
import { DirectorList } from "../components/directorList.jsx"

// export default class FilmsList extends Component{

//   constructor (props) {
//     super(props)
//     this.state = {
//       list: []
//     }
//   }

//   async getFilms() {
//     const filmLink = await fetch('https://ghibliapi.herokuapp.com/films')
//     const response = await filmLink.json()
//     this.setState({list: response})
//   }

//   componentDidMount() {
//     this.getFilms()
//   }


//   render() {
//     return <ul>{this.state.list.map(item => {
//       return <li key={item.id}>{item.title}</li>
//     })}</ul>;
//   }
// }

export function FilmsPage(props) {

  const [list, setList] = useState([])
  const [searchDirector, setSearchDirector] = useState("Hayao Miyazaki")
  const [directorFilter, setDirectorFilter] = useState([])
//   const [directorFilms, setDirectorFilms] = useState([])

async function getFilms() {
    const filmLink = await fetch('https://ghibliapi.herokuapp.com/films')
    const response = await filmLink.json()
    setDirectorFilter(filterFilmsByDirector(response))
    setList(response)
  }


let toggle = false

// function directorList(e) {
//     toggle = true
//     setSearchDirector(e.target.value)
//     let directorList = []
//     list.forEach(el => {
//         if (el.director === e.target.value) {
//             directorList.push(el)
//         }
//     })
//     setDirectorFilms(directorList)
// }

// function toggleFunc() {

// }

useEffect(() => {
  getFilms()
  return function cleanUp() {
    console.log('cleanup')
  }
}, [])

  return (
    <div>
        <h1>Studio Ghibli Films</h1>
        <form>
            <div className="form-group">
                <label htmlFor="directors">Choose a director:</label>
                <select name="directors" value={searchDirector} onChange={e => setSearchDirector(e.target.value)}>
                    {directorFilter.map(item => {
                        let count = 0
                        return <option value={item} key={item + count++}>{item}</option>
                    })}
                </select>
            </div>
        </form>
<DirectorList movies={list} director={searchDirector}></DirectorList>
  </div>)
}