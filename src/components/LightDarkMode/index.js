import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {
    mode: 'light',
    text: 'Light Mode',
  }

  changeMode = () => {
    this.setState(prevState => {
      if (prevState.mode === 'light') {
        return {mode: 'dark', text: 'Light Mode'}
      }
      return {mode: 'light', text: 'Dark Mode'}
    })
  }

  render() {
    const {mode, text} = this.state
    return (
      <div className="bg-container">
        <div
          className={
            mode === 'light' ? 'lightMode-container' : 'darkMode-container'
          }
        >
          <h1
            className={
              mode === 'light' ? 'light-mode-heading' : 'dark-mode-heading'
            }
          >
            Click To Change Mode
          </h1>
          <button className="button" type="button" onClick={this.changeMode}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
