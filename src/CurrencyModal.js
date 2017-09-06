import React, { Component } from 'react'
import './CurrencyModal.css'
import { Button, Modal } from 'react-bootstrap'

class CurrencyModal extends Component {

  constructor(props) {
    super(props)

    this.state = {
      base: this.props.base,
      currency: this.props.currency,
      digital: this.props.digital,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    const value = e.target.value
    const name = e.target.name
    console.log(name + ": " + value);

    if (name === "base" && value === "BTC") {
      this.setState({digital: "Bitcoin"})
    } else if (name === "base" && value === "ETH") {
      this.setState({digital: "Ethereum"})
    } else if (name === "base" && value === "LTC") {
      this.setState({digital: "Litecoin"})
    }

    this.setState({[name]: value})
  }

  render() {
    return(
      <Modal show={this.props.showModal} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Change Currency</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Digital Currency</label>
                <select
                  name="base"
                  className="form-control"
                  value={this.state.base}
                  onChange={this.handleInputChange}
                >
                  <option value="BTC">Bitcoin</option>
                  <option value="ETH">Ethereum</option>
                  <option value="LTC">Litecoin</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Local Currency</label>
                <select
                  name="currency"
                  className="form-control"
                  value={this.state.currency}
                  onChange={this.handleInputChange}
                >
                  <option value="USD">United States Dollar</option>
                  <option value="CAD">Canadian Dollar</option>
                  <option value="EUR">Euro</option>
                  <option value="MXN">Mexican Peso</option>
                </select>
              </div>
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" onClick={() => this.props.changeCurrency(this.state)}>Save</Button>
        </Modal.Footer>
      </Modal>
    )
  }

}

export default CurrencyModal
