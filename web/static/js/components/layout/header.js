import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import {Dropdown, Button} from 'react-semantify';
import ReactDOM from 'react-dom';
require('./layout.scss');

class Header extends Component {

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    jQuery('.ui.dropdown').dropdown();
  }

  getMenuItems () {
    return {
      left: [
        {
          classes: 'header',
          route: '/',
          text: 'Home'
        },
        {
          classes: 'header',
          route: '/about',
          text: 'About'
        }
      ],
      right: [
        {
          classes: 'header',
          route: '/recipes',
          text: 'Recipes'
        },
        {
          classes: 'header',
          route: '/account',
          text: 'Account'
        }
      ]
    };
  }

  renderMenuItems (items) {
    return items.map( item => {
      let icon, { route, text, classes, href } = item;
      classes = 'item ${classes}';

      if (href) { return ( <a
        key={route}
        href={route}
        target='_blank'
        className={classes}>{text}</a>)}

      return (
        <Link
          key={route}
          className={classes}
          to={route}>

          {text}
        </Link>
      );
    });
  }

  _onClick () {
    console.log('hello world!');
  }


  renderDropdown () {
    return (
      <div className="ui dropdown">
        <div className="default text example">Gender</div>
        <div className="menu">
          <div className="item" data-value="male">Male</div>
          <div className="item" data-value="female">Female</div>
        </div>
      </div>
    );
  }

  render () {
    const { router } = this.props;
    const { left, right } = this.getMenuItems();

    return (
      <div className="header-component">

        <div className="ui large secondary pointing menu">
          <div className="left menu">
            {this.renderMenuItems(left)}
          </div>

          <div className="right menu">
            {this.renderDropdown()}
            {this.renderMenuItems(right)}
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
