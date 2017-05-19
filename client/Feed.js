import React, { Component } from 'react';
import FeedItem from './FeedItem';

// Feed contains multiple FeedItems
// Put AJAX in this Component
class Feed extends Component {

  constructor() {
    super();

    this.state = {
      urls: []
    }
  }

  componentDidMount() {
        let arr = [];
        let newState = {};
        console.log(this.props.feedUrl)
    $.get(this.props.feedUrl,
      function (data) {
        for (let keys in data) {
          arr[keys] = data[keys]
        };
        newState['urls'] = arr;
      }, 'json')
    this.setState(newState);
  }

  render() {
    console.log(this.state.urls)
    let FeedItems= [];
    this.state.urls.forEach(function(ele, ind, arr){
      FeedItems.push(<FeedItem url={this.state.urls[ind]}/>)
    });
    console.log(FeedItems)
    return (
      <div id="feed" styles={styles.container}>
      {FeedItems}
      </div>
    );
  }
}

const styles = {
  container: {
    border: '1px black solid',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  },
};

module.exports = Feed;
