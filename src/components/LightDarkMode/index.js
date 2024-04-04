import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    btnText: 'Light Mode',
    containerClassName: 'dark-container',
    heading: 'white-head',
  }

  modeChange = () => {
    const {btnText, containerClassName, heading} = this.state
    if (btnText === 'Light Mode') {
      return this.setState({
        btnText: 'Dark Mode',
        containerClassName: 'light-container',
        heading: 'black-head',
      })
    }
    return this.setState({
      btnText: 'Light Mode',
      containerClassName: 'dark-container',
      heading: 'white-head',
    })
  }

  render() {
    const {btnText, containerClassName, heading} = this.state
    return (
      <div className="back-container">
        <div className={containerClassName}>
          <h1 className={heading}>Click To Change Mode</h1>
          <button className="btn" onClick={this.modeChange}>
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
