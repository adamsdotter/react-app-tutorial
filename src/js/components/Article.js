import React from 'react';
import { Link } from 'react-router';

export default class Article extends React.Component {
  render() {
    const { title } = this.props;
    const { href } = this.props;

    return (
      <div class="col-md-4">
        <h3>{title}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
        <a href={href} class="btn btn-default">Read more</a>
    </div>
    );
  };
}
