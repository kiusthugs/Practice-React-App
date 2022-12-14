import React, {useState} from "react"
import {FilmListFunction} from "../components/filmList.jsx"

// class App extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       list: ["ready", "set", "go"],
//       text: ""
//     }

//     this.onSubmit = this.onSubmit.bind(this)
//   }

//   onSubmit(e) {
//     e.preventDefault()
//     console.log(this)
//     console.log(this.state.text)
//     console.log(this.state.list)
//     this.setState({list: [...this.state.list, this.state.text]})
//     console.log(this)
//     console.log(this.state.text)
//     console.log(this.state.list)
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello World</h1>
//         <form onSubmit={this.onSubmit}>
//           <input value={this.state.text} onChange={(e) => {this.setState({text: e.target.value})}}></input>
//           <button type="submit">Add</button>
//         </form>
//         <ul>
//           {this.state.list.map((listItem, i) => {
//             return <li key ={listItem + i}>{listItem}</li>
//           })}
//         </ul>
//         <FilmsList></FilmsList>
//       </div>
//     );
//   }
// }

export function HomePage(props) {
  const [list, setList] = useState(["ready", "set", "go"])
  const [text, setText] = useState("")  

  function onSubmit(e) {
    e.preventDefault()
    setList([...list, text])
  }
  
  return (
    <div>
      <h1>Hello World</h1>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <button type="submit">Add</button>
      </form>
      <ul>
        {list.map((listItem, i) => {
          return <li key ={listItem + i}>{listItem}</li>
        })}
      </ul>
      <FilmListFunction></FilmListFunction>
    </div>
  );
}
