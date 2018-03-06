import React, { Component } from 'react';
import { connect } from 'react-redux';
import { errorOccurred } from '../../actions';
import axios from 'axios';

class ErrorBoundary extends Component {
  componentDidCatch(error, info) {
    this.props.errorOccurred(error);
    return axios.post('/api/error', {
      error: error,
      info: info,
    })
    .catch(error => console.log(error));
  }

  render() {
    return this.props.guild.error ? (
      <img src="https://c1.staticflickr.com/8/7001/6509400855_aaaf915871_b.jpg" />
    ) : (
      this.props.children
    );
  }
}

function mapStateToProps({ guild }) {
  return { guild };
}

export default connect(mapStateToProps, { errorOccurred })(ErrorBoundary);
