import React from "react"

class Apps extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      list: ["ready", "set", "go"],
      text: ""
    }
  }



  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <p>bruh</p>
        <form>
          <input value={this.state.text} onChange={(e) => {this.setState(this.state.text = e.target.value)}}></input>
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.list.map((listItem, i) => {
            return <li key ={listItem + i}>{listItem}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default Apps