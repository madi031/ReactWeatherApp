'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value,
    });
  }

  onFormSubmit(event) {
    // this is to avoid the form being submitted when the user presses enter or search button
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({
      term: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)} className='input-group'>
        <input
          className='form-control'
          onChange={this.onInputChange.bind(this)}
          placeholder='Get a five-day forecast for your favorite city'
          value={this.state.term}
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>
            Search
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
