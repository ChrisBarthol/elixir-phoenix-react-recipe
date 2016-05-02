import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Header from './header';
require('./layout.scss');

class PageLayout extends Component {

  static propTypes ={
    router: PropTypes.object.isRequired,
    renderIcon: PropTypes.bool,
    mainIconClass: PropTypes.string,
    mainIconText: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    renderIcon: true,
    mainIconClass: 'circular search',
  };

  renderHeader () {
    const { router } = this.props;

    return (
      <Header router={router}/>
    );
  }

  renderMainIcon () {
    const { renderIcon, mainIconClass, mainIconText } =this.props;

    if (!renderIcon) { return null; }

    return (
      <h1 className="ui icon center aligned huge header main-header">
        <Link to='/'><i className={`${mainIconClass} icon`}></i></Link>
        {mainIconText}
      </h1>
    );
  }

  renderFooter () {
    const githubUrl = 'https://github.com/chrisbarthol';
    const twitterUrl = 'https://twitter.com/chrisbarthol';

    return (
      <div className="footer">
        created by <span className="ui name blue">
          <a>Chris Barthol</a>
        </span> &middot; <a href={twitterUrl} target='_blank'>Twitter</a> <i className="icon twitter"></i>
      </div>
    );
  }

  render () {
    const { className } = this.props;

    return (
      <div id='page-layout' className={className}>
        {this.renderHeader()}
        <div className="ui doubling two column centered page grid">
          <div className="column">
            <div className="main-section">
              {this.renderMainIcon()}
              {this.props.children}
            </div>
          </div>
        </div>
        {this.renderFooter()}
      </div>
    )
  }
}

export default PageLayout;
