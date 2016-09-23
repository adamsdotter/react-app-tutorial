import React from 'react';

export default class Featured extends React.Component {
  render() {
    const adText = [
      'Adtext #1',
      'Adtext #2',
      'Adtext #3',
      'Adtext #5',
      'Adtext #6'
    ];

    const randomAd = adText[Math.round(Math.random() * (adText.length-1))];

    return (
      <div class="row">
        <div class="col-lg-12">
          <div class="well text-center">
            {randomAd}
          </div>
        </div>
      </div>
    );
  };
}
