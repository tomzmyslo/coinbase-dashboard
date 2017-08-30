import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      amount: '0.00',
      base: 'BTC',
      currency: 'USD',
      name: 'Bitcoin',
      refreshInterval: 1,
      seconds: 60,
    }
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
          <a href="/">Coinbase Dashboard</a>
        </nav>

        <div className="container-fluid">

          <div className="dashboard">
            <div className="currency">
              <h3>{this.state.name}</h3>
              <div className="price">
                <h1 className="display-1">
                  ${this.state.amount}
                </h1>
                <small className="refreshStatus">{this.state.seconds} seconds until refresh</small>
              </div>
            </div>
          </div>

          <footer>
            <small>Bitcoin pricing supplied by Coinbase API</small>
          </footer>

        </div>

      </div>

    );
  }
}

export default App
