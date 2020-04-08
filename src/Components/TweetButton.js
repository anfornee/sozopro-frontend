import React from 'react'

const TweetButton = props => (
  <div>
    <button className='tweet-button' onClick={props.handleTweet}>
      Tweet
    </button>
  </div>
)

export default TweetButton
