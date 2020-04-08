import React, { useState } from 'react'
import axios from 'axios'
import TweetButton from './TweetButton'
import LoadingButton from './LoadingButton'

const TweetField = props => {
  const [input, setInput] = useState('')
  const [isSending, setIsSending] = useState(false)

  const handleTweet = e => {
    e.preventDefault()
    if (input) {
      setIsSending(true)
      axios.post('http://localhost:3002/new', { status: input })
        .then(res => {
          setTimeout(() => {
            setInput('')
            setIsSending(false)
          }, 2000)
        })
        .catch(err => window.alert(err))
    } else {
      window.alert("Uh...awkward. There isn't anything to send")
    }
  }

  return (
    <div className='tweet-field-container'>
      <textarea
        className='tweet-field'
        type='text'
        value={input}
        placeholder="How's it going?"
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
      {
        isSending ? <LoadingButton /> : <TweetButton handleTweet={handleTweet} />
      }
    </div>
  )
}

export default TweetField
