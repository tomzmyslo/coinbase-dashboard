import React, { Component } from 'react'
import './App.css'
import MonetaryUnit from './MonetaryUnit'
import CurrencyModal from './CurrencyModal'

document.ontouchmove = (event) => {
  event.preventDefault()
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      amount: '0.00',
      base: 'BTC',
      currency: 'USD',
      digital: 'Bitcoin',
      refreshInterval: 1,
      seconds: 60,
      showModal: false,
    }

    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.changeCurrency = this.changeCurrency.bind(this)
    this.getPrice = this.getPrice.bind(this)
  }

  getPrice() {
    let base = this.state.base
    let currency = this.state.currency
    let currencyPair = base + '-' + currency
    let apiURL = 'https://api.coinbase.com/v2/prices/' + currencyPair + '/spot'

    fetch(apiURL).then(
      (response) => response.json()
    ).then(
      (json) => {
        let data = json.data
        this.setState({ amount: data.amount })
      }
    ).catch(
      (err) => {
        console.error('Network error: ' + err);
      }
    )
  }

  open() {
    this.setState({showModal: true})
  }

  close() {
    this.setState({showModal: false})
  }

  changeCurrency(e) {
    this.setState({
      base: e.base,
      currency: e.currency,
      digital: e.digital,
      seconds: 0,
    })
    this.close()
  }

  componentWillMount() {
    this.getPrice()
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.seconds === 0) {
        this.getPrice()
        this.setState((prevState) => ({
          seconds: (this.state.refreshInterval * 60)
        }))
      } else {
        this.setState((prevState) => ({
          seconds: prevState.seconds - 1
        }))
      }

    }, 1000)
  }

  render() {
    return (
      <div className="App">

        <nav>
          <a className="brand" href="/coinbase-dashboard">Coinbase Dashboard</a>
          <a onClick={this.open} style={{float: 'right'}}>Settings</a>
        </nav>

        <div className="container-fluid">

          <div className="dashboard">
            <div className="currency">
              <h3>{this.state.digital}</h3>
              <div className="price">
                <h1 className="display-1">
                  <MonetaryUnit currency={this.state.currency} />{this.state.amount}
                </h1>
                <small className="refreshStatus">{this.state.seconds} seconds until refresh</small>
              </div>
            </div>
          </div>

          <footer>
            <small>Bitcoin pricing supplied by Coinbase API</small>
          </footer>

        </div>

        <CurrencyModal
          close={this.close}
          changeCurrency={this.changeCurrency}
          showModal={this.state.showModal}
          base={this.state.base}
          currency={this.state.currency}
          digital={this.state.digital}
        />

      </div>

    );
  }
}

export default App
