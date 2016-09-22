import React from 'react';

export default class Archives extends React.Component {
  render() {
    console.log(this.props.params);
    return (
      <div>
        <h3>Archives</h3>
        <h5>Article: {this.props.params.article}</h5>
      </div>
    );
  };
}
