import React, {Component} from "react"

export default class FilmsList extends Component{

  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
  }

  async getFilms() {
    const filmLink = await fetch('https://ghibliapi.herokuapp.com/films')
    const response = await filmLink.json()
    this.setState({list: response})
  }

  componentDidMount() {
    this.getFilms()
  }


  render() {
    return <ul>{this.state.list.map(item => {
      return <li key={item.id}>{item.title}</li>
    })}</ul>;
  }
}