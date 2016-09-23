import React from 'react';

import Article from '../components/Article';

export default class Archives extends React.Component {
  render() {
    const articleList = [
      'About stuff',
      'Katzen',
      'An article',
      'Heading',
      'More text',
      'Stockholm',
      'Chrissy the cat',
      'Pig'
    ].map((title, i) => <Article key={i} title={title} />);

    const { article } = this.props.params;
    const articleName = article ? '(' + article + ')' : '';

    return (
      <div class="row">
        {articleList}
      </div>
    );
  };
}
