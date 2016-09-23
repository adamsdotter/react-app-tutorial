import React from 'react';

export default class Archives extends React.Component {
  render() {
    const { article } = this.props.params;
    const articleName = article ? '(' + article + ')' : '';

    return (
      <div class="col-md-4">
        <h2>Archives {articleName}</h2>
        <p>Hello!</p>
        <a class="btn btn-default" href="#">More Info</a>
    </div>
    );
  };
}
