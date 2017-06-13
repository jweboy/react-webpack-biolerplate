import React, {
  Component,
} from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'

import styles from './index.scss'

@CSSModules(styles, {
  allowMultiple: true,
})
class Button extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  handleClick = () => {
    console.log('btn')
  }
  render() {
    const {
      text,
      isActive,
    } = this.props
    return (
      <div styleName={''} onClick={this.handleClick}>
        <a styleName={isActive ? "btn active" : "btn"}>{text}</a>
      </div >
    )
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
}

export default Button