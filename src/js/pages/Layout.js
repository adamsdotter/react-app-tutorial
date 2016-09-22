import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class Layout extends React.Component {
  navigate() {
    this.props.history.pushState(null, 'settings');
  }

  render() {
    return (
      <div>
        <h1>Killernewz</h1>
        {this.props.children}
        <Link to="archives" class="btn btn-default" activeClassName="btn-info">Archives</Link>
        <IndexLink to="/" class="btn btn-default" activeClassName="btn-info">Featured</IndexLink>
        <Link to="settings" class="btn btn-default" activeClassName="btn-info">Settings</Link>
      </div>
    );
  };
}
