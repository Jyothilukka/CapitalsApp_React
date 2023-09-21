import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {capitalId: countryAndCapitalsList[0].id}

  getCapitalValue = event => {
    this.setState({capitalId: event.target.value})
  }

  getCountry = () => {
    const {capitalId} = this.state

    const countryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === capitalId,
    )
    return countryAndCapital.country
  }

  render() {
    const {capitalId} = this.state
    const country = this.getCountry(capitalId)

    return (
      <div className="main-con">
        <div className="c-card">
          <div>
            <h1 className="head">Countries and Capitals</h1>
          </div>
          <div className="s">
            <select
              onChange={this.getCapitalValue}
              value={capitalId}
              className="select"
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option key={eachCapital.id} value={eachCapital.id}>
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
