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
    const modeClassName = mode ? 'lightMode-container' : 'darkMode-container'
    const headingClassName = mode ? 'light-mode-heading' : 'dark-mode-heading'
    const text = mode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg-container">
        <div className={modeClassName}>
          <h1 className={headingClassName}>Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.changeMode}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
