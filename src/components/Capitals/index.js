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

class Capitals extends Component {
  state = {selection: 'NEW_DELHI'}

  onChangingCountry = () => {
    this.setState({selection: document.getElementById('drop-down').value})
  }

  render() {
    const {selection} = this.state

    const k = countryAndCapitalsList.filter(
      eachGroup => eachGroup.id === selection,
    )[0].country

    console.log(k)

    return (
      <div className="main-cont">
        <div className="sub-cont">
          <h1 className="header-prop">Countries And Capitals</h1>
          <div className="selection-cont1">
            <div>
              <select id="drop-down" onChange={this.onChangingCountry}>
                {countryAndCapitalsList.map(each => (
                  <option key={each.id} value={each.id}>
                    {each.capitalDisplayText}
                  </option>
                ))}
              </select>
            </div>
            <div className="para-cont">
              <p className="para-prop">is capital of which country?</p>
            </div>
          </div>
          <p className="op-prop">{k}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
