import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  navigate() {
    this.props.history.pushState(null, 'settings');
  }

  render() {
    return (
      <div>
        <h1>Killernewz</h1>
        {this.props.children}
        <Link to="archived" class="btn btn-default">Archived</Link>
        <Link to="/" class="btn btn-default">Featured</Link>
        <button class="btn btn-default" onClick={this.navigate.bind(this)}>Settings</button>
      </div>
    );
  };
}
