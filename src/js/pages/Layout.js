import React from 'react';

import Footer from '../components/Footer';
import Nav from '../components/Nav';

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: '60px'
    };
    return (
      <div>
        <Nav location={location} />
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>Killernewz</h1>
              {this.props.children}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  };
}
