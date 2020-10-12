import React, { Component } from 'react'
import { Link } from 'gatsby'

const Challenge = ({ question, answer }) => {
 
    return (
      <div>
          <div>{question}</div>
          <div>{answer}</div>
      </div>
    )
}

export default Challenge