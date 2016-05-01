import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import Actions from '../actions';

import DocumentTitle from 'react-document-title';

require('./app.scss');

class App extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    const { router } = this.props;

    return (
      <DocumentTitle title='GitChecker | Home'>
        <h1>
          Hello
        </h1>
      </DocumentTitle>
    )
  }
}
export default connect()(App);
