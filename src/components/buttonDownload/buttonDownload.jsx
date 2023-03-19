import "./buttonDownload.css"
import React from "react"

class AwesomeButton extends React.Component {
  constructor() {
    super()
    this.state = {
      status: false,
      text: 'Download video',
      class: '',
    }
  }

  click() {
    this.setState({
      status: !this.state.status,
      text: (!this.state.status) ? String.fromCharCode('10003') : 'Download video',
      class: (!this.state.status) ? 'checked' : '',
    })
  }

  render() {
    return (
      <button
        className={`awesome-btn ` + this.state.class}
        onClick={this.click.bind(this)}>{this.state.text}</button>
    )
  }
}

const ButtonDownload = class App extends React.Component {
  render() {
    return (
      <div className="container-fluid" style={{
        marginTop: '1em',
      }}>
        <div className="row">
          <div className="col-12 text-center">
            <AwesomeButton />
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center" style={{
            marginTop: '.5em',
          }}>
          </div>
        </div>
      </div>
    )
  }
}



export default ButtonDownload