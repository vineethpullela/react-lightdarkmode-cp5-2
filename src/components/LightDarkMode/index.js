import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {
    mode: true,
  }

  changeMode = () => {
    this.setState(prevState => ({mode: !prevState.mode}))
  }

  render() {
    const {mode} = this.state
    const modeClassName = mode ? 'dark-mode' : 'light-mode'
    const buttonText = mode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="app-container">
        <div className={`container ${modeClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.changeMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
