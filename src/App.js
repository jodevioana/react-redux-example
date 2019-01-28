import React, { Component } from "react";
import { Alert, Button } from "reactstrap";
import { updateCountries, updateCountryInfo } from "./actions/actions";
import { connect } from "react-redux";
import { applyMiddleware as dispatch } from "redux";

class App extends Component {
  componentDidMount() {
    fetch("http://localhost:8080/countries")
      .then(res => res.json())
      .then(res => dispatch(this.props.updateCountries(res)));
  }
  getCountryInfo(event) {
    const URL = "http://localhost:8080/countries/" +
        event.target.getAttribute("data-country");
    fetch(URL)
      .then(res => res.json())
      .then(res => dispatch(this.props.updateCountryInfo(res)));
  }

  render() {
    const countries = this.props.countries;
    const selectedCountry = this.props.selectedCountry;
    return (
      <div className="App">
        <header className="App-header">
          {!countries && <Alert color="info">Loading...</Alert>}
          {countries && (
            <ul>
              {countries.map((country, index) => {
                return (
                  <li key={index}>
                    <div className="name pull-left">{country}</div>
                    <Button
                      className="btn btn-primary pull-left"
                      data-country={country}
                      onClick={this.getCountryInfo.bind(this)}
                    >
                      Get Info
                    </Button>
                  </li>
                );
              })}
            </ul>
          )}
          {selectedCountry && (
            <section className="countryInfo">
              <div className="code">{selectedCountry.code}</div>
              <div className="name">{selectedCountry.name}</div>
              <div className="currency">{selectedCountry.name}</div>
            </section>
          )}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { countries, selectedCountry } = state.countryReducer;
  return {
    countries,
    selectedCountry
  };
};

const mapDispatchToProps = { updateCountries, updateCountryInfo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
