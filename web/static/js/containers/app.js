import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PageLayout from '../components/layout/page_layout';
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
      <DocumentTitle title='Recipe | Home'>
      <PageLayout
        router={router}
        mainIconClass='circular search'
        mainIconText='Recipe'>

      </PageLayout>
      </DocumentTitle>
    )
  }
}


function select (state) {
  return {
    router: state.routing,
    ...state
  };
}

export default connect(select)(App);
