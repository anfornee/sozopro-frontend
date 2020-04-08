import React, { useState } from 'react'
import axios from 'axios'
import TweetButton from './TweetButton'

const TweetField = props => {
  const [input, setInput] = useState('')

  const handleTweet = e => {
    e.preventDefault()
    axios.post('http://localhost:3001/new', { status: input })
      .then(res => {
        setInput('')
      })
      .catch(err => window.alert(err))
  }

  return (
    <div className='tweet-field-container'>
      <textarea
        className='tweet-field'
        type='text'
        value={input}
        placeholder='Say something'
        onChange={e => {
          if (input.length < 280) {
            setInput(e.target.value)
          }
        }}
        onKeyDown={e => {
          if (input.length === 280 && e.key === 'Backspace') {
            e.preventDefault()
            setInput(input.substring(0, input.length - 1))
          }
        }}
      />
      <p className='char-count'>{input.length}/280</p>
      <TweetButton handleTweet={handleTweet} />
    </div>
  )
}

export default TweetField
