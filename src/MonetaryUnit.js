import React, { Component } from 'react'

class MonetaryUnit extends Component {
  render() {
    let unit = '';

    if (this.props.currency === 'MXN') {
      unit = '\u20B1'
    } else if (this.props.currency === 'EUR') {
      unit = '\u20AC'
    } else {
      unit = '\u0024'
    }
    return(
      <span>
        {unit}
      </span>
    )
  }
}

export default MonetaryUnit
